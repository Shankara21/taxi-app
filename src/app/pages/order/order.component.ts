import { AuthService } from './../../services/auth/auth.service';
import { MasterService } from 'src/app/services/master/master.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  isScheduled: boolean = false;
  constructor(private MasterService: MasterService, private AuthService: AuthService) { }
  orderInstant: any;
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
        console.log(res);
        console.log(dataOrder);
        if (dataOrder.numberOfPassenger > res.passengerTotal){
          this.alert = true;
          this.alertMessage = 'Kursi tidak mencukupi';
          return;
        }
      })

    })
  }

}
