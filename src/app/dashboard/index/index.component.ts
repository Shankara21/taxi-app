import { MasterService } from 'src/app/services/master/master.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { statisticChart } from 'src/app/apexchart';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {



  breadcrumbData = [
    { label: 'Home', link: '/dashboard' },
  ];
  user: any;
  driver: any;
  transactions: any
  instantOrder: any;
  scheduledOrder: any;
  constructor(private MasterService: MasterService) {
  }

  public statisticChart!: Partial<statisticChart> | any;
  ngOnInit() {
    this.MasterService.getUser().subscribe((res: any) => {
      this.user = res.customer.length;
      this.driver = res.driver.length;
    })
    this.MasterService.getOrder().subscribe((res: any) => {
      this.transactions = res.order.length;
      this.instantOrder = res.orderInstant;
      this.scheduledOrder = res.orderScheduled;
    })
    this.statisticChart = {
      series: [10, 20, 30, 40, 50],
      chart: {
        type: "donut",
        height: 450
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      // responsive: [
      //   {
      //     breakpoint: 480,
      //     options: {
      //       chart: {
      //         width: 200
      //       },
      //       legend: {
      //         position: "bottom"
      //       }
      //     }
      //   }
      // ],
      dataLabels: {
        enabled: false
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      legend: {
        formatter: function (val: any, opts: any) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        }
      },
      fill: {
        colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"]
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
    }
  }
}
