import { AuthService } from './../../services/auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-dashboard',
  templateUrl: './sidebar-dashboard.component.html',
  styleUrls: ['./sidebar-dashboard.component.css']
})
export class SidebarDashboardComponent {
  constructor(public router: Router, private AuthService: AuthService) { }

  logout() {
    this.AuthService.DeleteToken();
    this.router.navigateByUrl('/login');
  }
}
