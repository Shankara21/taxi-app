import { Component } from '@angular/core';

@Component({
  selector: 'app-show-driver',
  templateUrl: './show-driver.component.html',
  styleUrls: ['./show-driver.component.css']
})
export class ShowDriverComponent {
  breadcrumbData = [
    { label: 'Home', link: '/dashboard' },
    { label: 'Druvers', link: '/dashboard/drivers' },
    { label: 'Detail Driver', link: '/dashboard/users/**' },
  ];
}
