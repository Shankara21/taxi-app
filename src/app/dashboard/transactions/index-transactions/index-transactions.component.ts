import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master/master.service';

@Component({
  selector: 'app-index-transactions',
  templateUrl: './index-transactions.component.html',
  styleUrls: ['./index-transactions.component.css']
})
export class IndexTransactionsComponent implements OnInit{
  breadcrumbData = [
    { label: 'Home', link: '/dashboard' },
    { label: 'Transactions', link: '/dashboard/transactions' },
  ];
  data: any[] = [];
  dataModal: any;

  alert: boolean = false;
  alertMessage: string = '';

  constructor(private masterService: MasterService) { }
  ngOnInit() {
    this.masterService.getOrder().subscribe((data: any) => {
      this.data = data.order;
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
