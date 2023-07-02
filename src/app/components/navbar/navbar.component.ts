import { Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollTop > 0;
  }

  user: any
  constructor(private AuthService: AuthService, private Router: Router) { }

  ngOnInit() {
    this.user = this.AuthService.GetPayload();
  }

  logOut() {
    window.location.reload();
    this.AuthService.DeleteToken();
    this.Router.navigateByUrl('/login');
  }

}
