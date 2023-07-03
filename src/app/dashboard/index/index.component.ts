import { MasterService } from 'src/app/services/master/master.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  breadcrumbData = [
    { label: 'Home', link: '/dashboard' },
  ];
  user: any;
  driver:any;
  transactions: any
  instantOrder: any;
  scheduledOrder: any;
  constructor(private MasterService:MasterService){}
  ngOnInit() {
    this.MasterService.getUser().subscribe((res: any) => { 
      this.user = res.customer.length;
      this.driver = res.driver.length;
    })
    this.MasterService.getOrder().subscribe((res: any) => { 
      this.transactions = res.order.length;
      this.instantOrder = res.orderInstant;
      this.scheduledOrder = res.orderScheduled;
    })
  }
}
