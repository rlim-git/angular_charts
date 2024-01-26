import { Component } from '@angular/core';
import { ChartOptions, ChartType, Color, Chart, ChartConfiguration, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-sales-traffic-chart',
  templateUrl: './sales-traffic-chart.component.html',
  styleUrls: ['./sales-traffic-chart.component.scss']
})
export class SalesTrafficChartComponent {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [300,500,100],
      },
    ],
    labels: [
      'Download Sales',
      'In-Store Sales',
      'Mail Sales'
    ],
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }
}
