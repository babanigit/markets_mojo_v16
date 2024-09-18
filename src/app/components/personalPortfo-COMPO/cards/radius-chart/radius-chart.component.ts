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
          data: this.PIE,
          colors: ['#4caefe', '#3dc3e8', '#2dd9db', '#1feeaf', '#0ff3a0'],
        } as any,
      ],
    };

    if (this.container) {
      this.chart = Highcharts.chart(this.container.nativeElement, options);
    }
  }
}
