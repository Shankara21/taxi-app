import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MasterService } from './../../services/master/master.service';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private Router: Router, private AuthService: AuthService, private MasterService: MasterService) { }

  userLogged: any;
  user: any;
  form!: FormGroup;
  alert: boolean = false;
  alertMessage: any;
  isLoading: boolean = true;

  ngOnInit() {
    this.userLogged = this.AuthService.GetPayload();
    this.MasterService.showUser(this.userLogged.id).subscribe((res: any) => {
      this.user = res;
      this.form = new FormGroup({
        name: new FormControl(this.user.name, Validators.required),
        email: new FormControl(this.user.email, Validators.required),
        telephone: new FormControl(this.user.telephone, Validators.required),
        gender: new FormControl(this.user.gender, Validators.required),
        age: new FormControl(this.user.age, Validators.required),
      })
      this.isLoading = false;
    })
    if (localStorage.getItem('prevUrl')) {
      console.log(localStorage.getItem('prevUrl'));
      this.Router.navigateByUrl(localStorage.getItem('prevUrl')!);
      localStorage.removeItem('prevUrl');
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
    console.log(this.form.value);

    this.MasterService.updateUser(this.userLogged.id, this.form.value).subscribe((res: any) => {
      this.AuthService.SetToken(res.token);
      localStorage.setItem('prevUrl', '/profile');
      window.location.reload();
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
