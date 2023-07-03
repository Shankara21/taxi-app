import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MasterService } from 'src/app/services/master/master.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class DriverEditComponent implements OnInit {
  isDetail: boolean = false;

  constructor(private MasterService: MasterService, private AuthService: AuthService, private Router: Router) { }
  data: any;
  user: any;
  form!: FormGroup;
  previewImage: any;
  photo!: File;
  ngOnInit() {
    this.user = this.AuthService.GetPayload();
    this.MasterService.showByUserIdDriver(this.user.id).subscribe((response: any) => {
      this.data = response;
      this.form = new FormGroup({
        id: new FormControl(this.data.id, Validators.required),
        name: new FormControl(this.data.User.name, Validators.required),
        email: new FormControl(this.data.User.email, Validators.required),
        telephone: new FormControl(this.data.User.telephone, Validators.required),
        gender: new FormControl(this.data.User.gender, Validators.required),
        age: new FormControl(this.data.User.age, Validators.required),
        carPlateNumber: new FormControl(this.data.carPlateNumber, Validators.required),
        drivingLicenseNumber: new FormControl(this.data.drivingLicenseNumber, Validators.required),
        passengerTotal: new FormControl(this.data.passengerTotal, Validators.required),
      })
      if (this.data.carPicture) {
        this.previewImage = `http://localhost:3000/${this.data.carPicture}`
      }
    })
    if (localStorage.getItem('prevUrl')) {
      this.Router.navigateByUrl(localStorage.getItem('prevUrl')!);
      localStorage.removeItem('prevUrl');
    }
  }
  processPhoto(event: any) {
    this.photo = event.target.files[0];
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [image] = event.target.files;
      reader.readAsDataURL(image);

      reader.onload = () => {
        this.previewImage = reader.result as string;
        // this.form.patchValue({
        //   image: reader.result,
        //   url: reader.result
        // })
      }
    }
  }

  submit() {
    console.log(this.form.value);
    const formData = new FormData();
    formData.append('id', this.form.value.id);
    formData.append('name', this.form.value.name);
    formData.append('email', this.form.value.email);
    formData.append('telephone', this.form.value.telephone);
    formData.append('gender', this.form.value.gender);
    formData.append('age', this.form.value.age);
    formData.append('carPlateNumber', this.form.value.carPlateNumber);
    formData.append('drivingLicenseNumber', this.form.value.drivingLicenseNumber);
    formData.append('passengerTotal', this.form.value.passengerTotal);
    if (this.photo) {
      formData.append('carPicture', this.photo, this.photo.name);
    }



    this.MasterService.updateDriver(this.form.value.id, formData).subscribe((response: any) => {
      this.AuthService.SetToken(response.token);
      localStorage.setItem('prevUrl', '/profile-driver');
      window.location.reload();
    })
  }
}
