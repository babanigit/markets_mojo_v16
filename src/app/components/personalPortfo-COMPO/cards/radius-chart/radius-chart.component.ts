import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
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
export class RadiusChartComponent implements OnInit {
  @Input() PIE: series_Data_pie[] | undefined; //props

  @ViewChild('container', { static: true }) container!: ElementRef;

  private chart: Highcharts.Chart | undefined;

  private colorMap: { [key: string]: string } = {
    'Mid Cap': 'rgb(144, 237, 125)', //green
    'Small Cap': 'rgb(67, 67, 72)', //black
    'Micro Cap': 'rgb(247, 163, 92)', //orange
    Others: 'rgb(241, 92, 128)', //red
    'Tea/Coffee': 'rgb(128, 133, 233)', //purple
    'Capital Goods': 'rgb(247, 163, 92)',
    'Finance/NBFC': 'rgb(144, 237, 125)',
    'Mining & Minerals': 'rgb(67, 67, 72)',
    Remaining: 'rgb(144, 237, 125)',
    'Tail Stocks': 'rgb(67, 67, 72)',
    'Below Average': 'rgb(241, 92, 128)',
    Good: 'rgb(144, 237, 125)',
    Excellent: 'rgb(144, 237, 125)',
    Average: 'rgb(247, 163, 92)',
    Expensive: 'rgb(241, 92, 128)',
    'Very Expensive': 'rgb(241, 92, 128)',
    Attractive: 'rgb(144, 237, 125)',
    'Very Attractive': 'rgb(144, 237, 125)',
    'Very Risky': 'rgb(247, 163, 92)',
    Positive: 'rgb(144, 237, 125)',
    'Very Positive': 'rgb(144, 237, 125)',
    Negative: 'rgb(241, 92, 128)',
    Flat: 'rgb(247, 163, 92)',
  };

  // default
  private defaultColors = [
    '#4caefe',
    '#3dc3e8',
    '#2dd9db',
    '#1feeaf',
    '#0ff3a0',
  ];

  ngOnInit() {
    this.createChart();
  }

  private createChart() {
    const options: Highcharts.Options = {
      chart: {
        type: 'variablepie',
        height: 190,
        width: 380,
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
          minPointSize: 30,
          innerSize: '50%',
          zMin: 0,
          name: 'Performance',

          data: this.PIE?.map((item) => ({
            ...item,
            color: this.colorMap[item['name']] || undefined,
          })),

          colors: this.defaultColors,
        } as any,
      ],
    };

    if (this.container) {
      this.chart = Highcharts.chart(this.container.nativeElement, options);
    }
  }
}
