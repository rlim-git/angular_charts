import { Component } from '@angular/core';
import { ChartOptions, ChartType, Color, Chart, ChartConfiguration, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-product-sales-chart',
  templateUrl: './product-sales-chart.component.html',
  styleUrls: ['./product-sales-chart.component.scss']
})
export class ProductSalesChartComponent {
  public radarChartOptions: ChartOptions = {
    responsive: true,
  };

  public radarChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: 'origin',
      },
      {
        data: [100, 400, 600, 50, 800, 200, 300],
        label: 'Series B',
        borderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: [180, 480, 770, 90, 1000, 270, 400],
        label: 'Series C',
        yAxisID: 'y1',
        fill: 'origin',
      },
    ],
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  };
  public radarChartType: ChartType = 'radar';

  constructor() { }
}
