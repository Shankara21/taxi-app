import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router, private route: ActivatedRoute) { }
  title = 'taxi-app';
  isRegisterPage(): boolean {
    return this.router.routerState.snapshot.url.includes('register');
  }
  
  isLoginPage(): boolean {
    return this.router.routerState.snapshot.url.includes('login');
  }
  isNotFoundPage() {
    const currentRoute = this.getCurrentRoute(this.router);
    console.log(currentRoute);

    // return currentRoute && currentRoute.routeConfig && currentRoute.routeConfig.path === '**';
  }

  private getCurrentRoute(router: Router): any {
    let currentRoute = null;
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        currentRoute = router.routerState.root.snapshot;
      }
    });
    return currentRoute;
  }


}
