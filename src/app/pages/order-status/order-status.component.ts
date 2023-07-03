import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { MasterService } from 'src/app/services/master/master.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent {
  isScheduled: boolean = false;
  dataModal: any;
  userLogged: any;
  alert: boolean = false;
  alertMessage: string = '';
  constructor(private MasterService: MasterService, private AuthService: AuthService, private Router: Router) { }

  orderInstantPicked: any;
  orderScheduledPicked: any;
  orderInstantDone: any;
  orderScheduledDone: any;

  driverData: any;
  ngOnInit() {
    this.userLogged = this.AuthService.GetPayload();
    this.MasterService.showByUserIdDriver(this.userLogged.id).subscribe((res: any) => {
      this.driverData = res;
      this.MasterService.getOrderByStatus(this.driverData.id).subscribe((res: any) => {
        this.orderInstantPicked = res.orderInstantPicked;
        this.orderScheduledPicked = res.orderScheduledPicked;
        this.orderInstantDone = res.orderInstantDone;
        this.orderScheduledDone = res.orderScheduledDone;
        console.log(this.orderInstantPicked);
        console.log(this.orderScheduledPicked);
        console.log(this.orderInstantDone);
        console.log(this.orderScheduledDone);

      })
    })
  }
  getDataModal(id: any) {
    this.MasterService.showOrder(id).subscribe((res: any) => {
      this.dataModal = res;
    })
  }
  finishOrder(id: any) {
    let dataOrder: any;
    this.MasterService.showOrder(id).subscribe((res: any) => {
      dataOrder = res;
      this.MasterService.finishOrder(dataOrder.id).subscribe((res: any) => {
        this.alert = true;
        this.alertMessage = 'Order Finished';
        setTimeout(() => {
          this.alert = false;
          this.alertMessage = '';
        }, 2500);
        this.ngOnInit();
      })
    })

  }
}
