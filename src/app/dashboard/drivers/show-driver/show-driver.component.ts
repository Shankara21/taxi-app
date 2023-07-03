import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master/master.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-driver',
  templateUrl: './show-driver.component.html',
  styleUrls: ['./show-driver.component.css']
})
export class ShowDriverComponent implements OnInit {
  breadcrumbData = [
    { label: 'Home', link: '/dashboard' },
    { label: 'Druvers', link: '/dashboard/drivers' },
    { label: 'Detail Driver', link: '/dashboard/users/**' },
  ];

  constructor(private MasterService: MasterService, private Router:Router) { }

  data: any;
  params = this.Router.url.split('/')[3];

  ngOnInit() {
    this.MasterService.showByUserIdDriver(this.params).subscribe((res: any) => { 
      this.data = res;
      console.log(this.data);
      
    })
   }
}
