import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  breadcrumbData = [
    { label: 'Home', link: '/dashboard' },
    { label: 'Users', link: '/dashboard/users' },
    { label: 'Edit User', link:'/dashboard/users/**' },
  ];
}
