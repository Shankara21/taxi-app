import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master/master.service';

@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.css']
})
export class IndexUserComponent implements OnInit {
  breadcrumbData = [
    { label: 'Home', link: '/dashboard' },
    { label: 'Users', link: '/dashboard/users' },
  ];

  data: any[] = [];
  dataModal: any;

  alert: boolean = false;
  alertMessage: string = '';
  constructor(private masterService: MasterService) { }
  ngOnInit() {
    this.masterService.getUser().subscribe((data: any) => {
      this.data = data.customer;
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
