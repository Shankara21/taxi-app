import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { MasterService } from 'src/app/services/master/master.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private MasterService: MasterService, private AuthService: AuthService, private Router: Router) { }
  orderInstant: any;
  isScheduled: boolean = false;
  orderScheduled: any;
  dataModal: any;
  userLogged: any;
  alert: boolean = false;
  alertMessage: string = '';
  ngOnInit() {
    this.userLogged = this.AuthService.GetPayload();
    this.MasterService.getOrderOpen().subscribe((res: any) => {
      this.orderInstant = res.orderInstant;
      this.orderScheduled = res.orderScheduled;
    })
  }

  getDataModal(id: any) {
    this.MasterService.showOrder(id).subscribe((res: any) => {
      this.dataModal = res;
    })
  }

  acceptOrder(id: any) {
    let dataOrder: any;
    this.MasterService.showOrder(id).subscribe((res: any) => {
      dataOrder = res;
      this.MasterService.showByUserIdDriver(this.userLogged.id).subscribe((res: any) => {
        if (dataOrder.numberOfPassenger > res.passengerTotal) {
          this.alert = true;
          this.alertMessage = 'Your capacity is not enough';
          setTimeout(() => {
            this.alert = false;
            this.alertMessage = '';
          }, 2500);
          return;
        }
      })
    })
    this.MasterService.pickUpOrder(id, { driverId: this.userLogged.id }).subscribe((res: any) => {
      this.Router.navigateByUrl('/pickup');
    })
  }

}
