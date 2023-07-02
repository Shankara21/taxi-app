import { MasterService } from './../../services/master/master.service';
import { AuthService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.component.html',
  styleUrls: ['./history-order.component.css']
})
export class HistoryOrderComponent implements OnInit {
  isDetailShown: boolean = false;
  isRecently: boolean = true;
  isScheduled: boolean = false;

  constructor(private Router: Router, private AuthService: AuthService, private MasterService: MasterService) { }

  userLogged: any;

  orders: any;
  orderScheduled: any;
  orderRecently: any;

  dataModal: any;

  alert: boolean = false;
  alertMessage: any;

  ngOnInit() {
    this.userLogged = this.AuthService.GetPayload();
    this.MasterService.showByUserIdOrder(this.userLogged.id).subscribe((res: any) => {
      this.orders = res.order;
      this.orderScheduled = res.scheduled;
      this.orderRecently = res.instant;
    })
  }

  getDataModal(id: any) {
    this.MasterService.showOrder(id).subscribe((res: any) => {
      this.dataModal = res;
    })
  }

  cancelOrder(id: any) {
    this.MasterService.cancelingOrder(id).subscribe((res: any) => {
      this.alert = true;
      this.alertMessage = "Order has been canceled";
      this.ngOnInit();
      setTimeout(() => {
        this.alert = false;
        this.alertMessage = "";
      }, 2500);
    })
  }
}
