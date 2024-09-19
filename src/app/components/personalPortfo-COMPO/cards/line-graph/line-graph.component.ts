import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css'],
  standalone: true,
  imports: [ChartModule],
})
export class LineGraphComponent implements OnInit {
  @ViewChild('containerrr', { static: true }) container: ElementRef | undefined;

  @Input() chartData: any;

  // chartData = [
  //   { year: '2016', dt: '2016-12-30', port: 185554, sensex: 26626.5 },
  //   { year: '2017', dt: '2017-01-06', port: 189088, sensex: 26759.2 },
  //   { year: '2017', dt: '2017-01-13', port: 191179, sensex: 27238.1 },
  //   { year: '2017', dt: '2017-01-20', port: 126982.25, sensex: 27034.5 },
  //   { year: '2017', dt: '2017-01-27', port: 168083, sensex: 27882.5 },
  // ];

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const options: Highcharts.Options = {
      chart: {
        type: 'spline',
        height: 230,
      },
      title: {
        text: undefined,
      },
      xAxis: {
        categories: this.chartData.map((item: { dt: any }) => item.dt),
        title: undefined,
      },
      yAxis: [
        {
          title: undefined,
          labels: {
            enabled: false, // This removes the labels on the left y-axis
          },
        },
        {
          title: undefined,
          opposite: true,
          labels: {
            enabled: false, // This removes the labels on the right y-axis
          },
        },
      ],
      series: [
        {
          type: 'spline',
          name: 'Port',
          data: this.chartData.map((item: { port: any }) => item.port),
        },
        {
          type: 'spline',
          name: 'Sensex',
          data: this.chartData.map((item: { sensex: any }) => item.sensex),
          yAxis: 1,
        },
      ],
      plotOptions: {
        spline: {
          marker: {
            enabled: false,
          },
        },
        series: {
          animation: {
            duration: 3000,
          },
        },
      },
    };

    Highcharts.chart(this.container!.nativeElement, options);
  }
}
