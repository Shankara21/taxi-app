import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent {
  breadcrumbData = [
    { label: 'Home', link: '/dashboard' },
    { label: 'Drivers', link: '/dashboard/drivers' },
    { label: 'Edit Driver', link: '/dashboard/users/**' },
  ];
}
