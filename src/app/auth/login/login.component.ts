import { AuthService } from './../../services/auth/auth.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private AuthService: AuthService, private router: Router) { }
  loginForm!: FormGroup;

  alert: boolean = false;
  alertMessage: any;


  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  login() {
    this.AuthService.Login(this.loginForm.value).subscribe((res: any) => {
      this.AuthService.SetToken(res.token);
      this.router.navigateByUrl('/dashboard');
    }, (err: any) => { 
      this.alert = true;
      this.alertMessage = err.error.message;
      console.log(err.error.message);
      
    })
  }
}
