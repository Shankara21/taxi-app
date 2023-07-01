import { MasterService } from 'src/app/services/master/master.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  constructor(private AuthService: AuthService, private router: Router, private MasterService: MasterService) { }

  userLogged: any;
  user: any;
  ngOnInit() {
    this.userLogged = this.AuthService.GetPayload();
    this.MasterService.showUser(this.userLogged.id).subscribe((res: any) => {
      console.log(res);
      this.user = res;
    })
  }

}
