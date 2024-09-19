import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

type YearData = {
  data: number;
  color: number;
  year: string;
};

type CategoryData = {
  [key: string]: YearData;
};

type ChartData = {
  [key: string]: CategoryData;
  // sensex: CategoryData;
  // midcap: CategoryData;
  // smallcap: CategoryData;
};

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class BarGraphComponent implements OnInit {
  @ViewChild('container', { static: true }) container: ElementRef | undefined;

  @Input() chartData: any | undefined;

  chart: Highcharts.Chart | undefined;
  currentYear: '2022' | '2023' | '2024' = '2024';

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const options: Highcharts.Options = {
      chart: {
        type: 'column',
        height: 280
      },
      title: {
        text: 'Market Performance',
        align: 'left',
      },
      xAxis: {
        categories: ['Sensex', 'Midcap', 'Smallcap'],
        title: {
          text: null,
        },
      },
      yAxis: {
        title: {
          text: 'Performance (%)',
        },
      },
      plotOptions: {
        column: {
          dataLabels: {
            enabled: true,
            format: '{point.y:.2f}%',
          },
        },
      },
      series: [
        {
          name: this.currentYear,
          type: 'column',
          data: this.getYearData(this.currentYear),
        },
      ],
    };

    this.chart = Highcharts.chart(this.container!.nativeElement, options);
  }

  getYearData(year: '2022' | '2023' | '2024'): number[] {
    return [
      this.chartData!['sensex'][year].data,
      this.chartData!['midcap'][year].data,
      this.chartData!['smallcap'][year].data,
    ];
  }

  updateChart(year: '2022' | '2023' | '2024') {
    this.currentYear = year;
    if (this.chart) {
      this.chart.series[0].setData(this.getYearData(year));
      this.chart.setTitle({ text: `Market Performance - ${year}` });
    }
  }
}
