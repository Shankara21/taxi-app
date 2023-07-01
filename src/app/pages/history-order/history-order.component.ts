import { Component } from '@angular/core';

@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.component.html',
  styleUrls: ['./history-order.component.css']
})
export class HistoryOrderComponent {
  isDetailShown: boolean = true;
  isRecently: boolean = false;
  isScheduled: boolean = false;
}
