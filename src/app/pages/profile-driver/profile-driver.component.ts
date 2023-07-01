import { MasterService } from 'src/app/services/master/master.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-driver',
  templateUrl: './profile-driver.component.html',
  styleUrls: ['./profile-driver.component.css']
})
export class ProfileDriverComponent implements OnInit {
  constructor(private AuthService: AuthService, private Router: Router, private MasterService: MasterService) { }

  userLoggedIn: any;
  user: any;

  isDetailShown: boolean = false;

  ngOnInit() {
    this.userLoggedIn = this.AuthService.GetPayload();
    this.MasterService.showByUserIdDriver(this.userLoggedIn.id).subscribe((res: any) => {
      this.user = res;
    })
  }
}
