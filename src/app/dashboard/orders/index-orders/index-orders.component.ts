import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master/master.service';

@Component({
  selector: 'app-index-orders',
  templateUrl: './index-orders.component.html',
  styleUrls: ['./index-orders.component.css']
})
export class IndexOrdersComponent implements OnInit {
  breadcrumbData = [
    { label: 'Home', link: '/dashboard' },
    { label: 'Instant Order', link: '/dashboard/orders' },
  ];
  data: any[] = [];
  dataModal: any;

  alert: boolean = false;
  alertMessage: string = '';

  constructor(private masterService: MasterService) { }
  ngOnInit() {
    this.masterService.getOrder().subscribe((data: any) => {
      this.data = data.orderInstant;
      this.data.forEach((element: any) => {
        element['index'] = this.data.indexOf(element) + 1;
      })
      console.log(this.data);
      
    })
  
  }
  getData(id: any) {
    this.masterService.showOrder(id).subscribe((data: any) => {
      this.dataModal = data;
    })
  }
  deleteData(id: any) {
    this.masterService.deleteOrder(id).subscribe((data: any) => {
      this.alert = true;
      this.alertMessage = 'Data deleted successfully';
      this.ngOnInit();
      setTimeout(() => {
        this.alert = false;
        this.alertMessage = '';
      }, 2500);
    })
  }
}
