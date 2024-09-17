import { CommonModule } from '@angular/common';

// highcharts.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import VariablePie from 'highcharts/modules/variable-pie';
import { series_Data_pie } from 'src/app/models/pp/pie';

VariablePie(Highcharts);

@Component({
  selector: 'app-radius-chart',
  templateUrl: './radius-chart.component.html',
  styleUrls: ['./radius-chart.component.css'],
  standalone: true,
  imports: [CommonModule, ChartModule],
})
export class RadiusChartComponent {
  @Input() PIE: series_Data_pie[] | undefined; //props

  private chart: Highcharts.Chart | undefined;

  ngOnInit() {
    this.createChart();
  }


  // data format
  // private data = {
  //   'Large Cap': 50.02,
  //   'Mid Cap': 11.85,
  //   'Small Cap': 37.41,
  //   'Micro Cap': 0.71,
  // };

  private createChart() {
    const options: Highcharts.Options = {
      chart: {
        type: 'variablepie',
      },
      title: undefined,
      tooltip: {
        headerFormat: '',
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> <b>{point.name}</b><br/>' +
          'Percentage: <b>{point.y}%</b>',
      },
      series: [
        {
          type: 'variablepie',
          minPointSize: 10,
          innerSize: '50%',
          zMin: 0,
          name: 'Performance',
          data: this.PIE,
          // data: [
          //   {
          //     name: 'Below Average',
          //     y: 39.74,
          //   },
          //   {
          //     name: 'Good',
          //     y: 20.82,
          //   },
          //   {
          //     name: 'Excellent',
          //     y: 19.62,
          //   },
          //   {
          //     name: 'Average',
          //     y: 19.49,
          //   },
          //   {
          //     name: 'Does not qualify',
          //     y: 0.34,
          //   },
          // ],
          colors: ['#4caefe', '#3dc3e8', '#2dd9db', '#1feeaf', '#0ff3a0'],
        } as any,
      ],
    };

    this.chart = Highcharts.chart('container', options);
  }
}
