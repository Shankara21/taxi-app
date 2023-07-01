import { AuthService } from './../../services/auth/auth.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private AuthService: AuthService, private router: Router) { }
  registerForm!: FormGroup;
  alert: boolean = false;
  alertMessage: any;

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    })
  }

  register() {
    if (this.registerForm.value.password.length < 6) {
      this.alert = true;
      this.alertMessage = "Password must be greater than 6 characters";
      setTimeout(() => {
        this.alert = false;
        this.alertMessage = "";
      }, 2500);
      return;
    }
    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.alert = true;
      this.alertMessage = "Passwords do not match";
      setTimeout(() => {
        this.alert = false;
        this.alertMessage = "";
      }, 2500);
      return;
    }
    this.AuthService.Register(this.registerForm.value).subscribe((res: any) => {
      this.AuthService.Login(this.registerForm.value).subscribe((res: any) => {
        this.AuthService.SetToken(res.token);
        this.router.navigateByUrl('/dashboard');
      })
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
