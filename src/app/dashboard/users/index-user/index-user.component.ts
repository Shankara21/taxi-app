import { Component } from '@angular/core';

@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.css']
})
export class IndexUserComponent {
      breadcrumbData = [
        { label: 'Home', link: '/dashboard' },
        { label: 'Users', link: '/dashboard/users' },
      ];
}
