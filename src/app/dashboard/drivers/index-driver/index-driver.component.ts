import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master/master.service';

@Component({
  selector: 'app-index-driver',
  templateUrl: './index-driver.component.html',
  styleUrls: ['./index-driver.component.css']
})
export class IndexDriverComponent implements OnInit {
  breadcrumbData = [
    { label: 'Home', link: '/dashboard' },
    { label: 'Drivers', link: '/dashboard/users' },
  ];

  data: any[] = [];
  dataModal: any;

  alert: boolean = false;
  alertMessage: string = '';

  constructor(private masterService: MasterService) { }
  ngOnInit() {
    this.masterService.getUser().subscribe((data: any) => {
      this.data = data.driver;
      this.data.forEach((element: any) => {
        element['index'] = this.data.indexOf(element) + 1;
      })
    })
  }
  getData(id: any) {
    this.masterService.showUser(id).subscribe((data: any) => {
      this.dataModal = data;
    })
  }
  deleteData(id: any) {
    this.masterService.deleteUser(id).subscribe((data: any) => {
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
