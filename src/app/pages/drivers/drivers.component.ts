import { AuthService } from './../../services/auth/auth.service';
import { MasterService } from 'src/app/services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  constructor(private Router: Router, private MasterService: MasterService, private AuthService: AuthService) { }

  form!: FormGroup;
  photo!: File;
  previewImage: any;
  user: any;
  alert: boolean = false;
  alertMessage: any;

  ngOnInit() {
    this.user = this.AuthService.GetPayload();
    this.form = new FormGroup({
      userId: new FormControl(this.user.id, Validators.required),
      carPlateNumber: new FormControl('', Validators.required),
      drivingLicenseNumber: new FormControl('', Validators.required),
      passengerTotal: new FormControl('', Validators.required),
    })
  }
  processPhoto(event: any) {
    this.photo = event.target.files[0];
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [image] = event.target.files;
      reader.readAsDataURL(image);

      reader.onload = () => {
        this.previewImage = reader.result as string;
        this.form.patchValue({
          image: reader.result,
          url: reader.result
        })
      }
    }
  }

  submit() {
    if (this.form.invalid) {
      this.alert = true;
      this.alertMessage = "Please fill out all the fields";
      setTimeout(() => {
        this.alert = false;
        this.alertMessage = "";
      }, 2500);
      return;
    }
    const formData = new FormData();
    formData.append('userId', this.form.value.userId);
    formData.append('carPlateNumber', this.form.value.carPlateNumber);
    formData.append('drivingLicenseNumber', this.form.value.drivingLicenseNumber);
    formData.append('passengerTotal', this.form.value.passengerTotal);
    if (this.photo) {
      formData.append('carPicture', this.photo, this.photo.name);
    } else {
      this.alert = true;
      this.alertMessage = "Please upload your car picture";
      setTimeout(() => {
        this.alert = false;
        this.alertMessage = "";
      }
        , 2500);
      return;
    }
    this.MasterService.storeDriver(formData).subscribe((res: any) => {
      this.AuthService.SetToken(res.token);
      window.location.reload();
      this.Router.navigateByUrl('/profile-driver');
    }, (err: any) => { 
      this.alert = true;
      this.alertMessage = err.error.message;
      setTimeout(() => {
        this.alert = false;
        this.alertMessage = "";
      }, 2500);
    })
  }
}
