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

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    })
  }

  register() {
    this.AuthService.Register(this.registerForm.value).subscribe((res: any) => {
      if (res.status === 201) {
        this.AuthService.Login(this.registerForm.value).subscribe((res: any) => {
          this.AuthService.SetToken(res.token);
          this.router.navigateByUrl('/dashboard');
        })
      }
    }, (err: any) => { 
      console.log(err)
    })
  }
}
