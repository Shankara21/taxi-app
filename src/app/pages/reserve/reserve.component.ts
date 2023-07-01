import { AuthService } from 'src/app/services/auth/auth.service';

import { DatePipe } from '@angular/common';
import { MasterService } from 'src/app/services/master/master.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  constructor(private Router: Router, private AuthService: AuthService, private MasterService: MasterService) { }
  userLogged: any;
  form!: FormGroup;
  alert: boolean = false;
  alertMessage: any;
  dateNow: any = new Date();

  ngOnInit() {
    this.dateNow = this.dateNow.toISOString().slice(0, 16);
    this.userLogged = this.AuthService.GetPayload();
    this.form = new FormGroup({
      userId: new FormControl(this.userLogged.id, Validators.required),
      destinationLocation: new FormControl('', Validators.required),
      setOffLocation: new FormControl('', Validators.required),
      status: new FormControl('open', Validators.required),
      type: new FormControl('scheduled', Validators.required),
      numberOfPassenger: new FormControl('', Validators.required),
      setOffDate: new FormControl('', Validators.required),
    });
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
    this.MasterService.storeOrder(this.form.value).subscribe((res: any) => {
      this.Router.navigateByUrl('/history');
    });
  }

}
