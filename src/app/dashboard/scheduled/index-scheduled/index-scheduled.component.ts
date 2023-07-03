import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master/master.service';

@Component({
  selector: 'app-index-scheduled',
  templateUrl: './index-scheduled.component.html',
  styleUrls: ['./index-scheduled.component.css']
})
export class IndexScheduledComponent implements OnInit{
  breadcrumbData = [
    { label: 'Home', link: '/dashboard' },
    { label: 'Scheduled Order', link: '/dashboard/scheduled' },
  ];
  data: any[] = [];
  dataModal: any;

  alert: boolean = false;
  alertMessage: string = '';



  constructor(private masterService: MasterService) { }
  ngOnInit() {
    this.masterService.getOrder().subscribe((data: any) => {
      this.data = data.orderScheduled;
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
