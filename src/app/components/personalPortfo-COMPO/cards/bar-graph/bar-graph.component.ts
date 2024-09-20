import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { TopNPipePipe } from 'src/app/pipes/pp/top-npipe.pipe';

type YearData = { data: number; color: number; year: string; };
type CategoryData = { [key: string]: YearData; };
type ChartData = { [key: string]: CategoryData; };

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css'],
  standalone: true,
  imports: [CommonModule, TopNPipePipe],
})
export class BarGraphComponent implements OnInit {
  @ViewChild('container', { static: true }) container: ElementRef | undefined;
  @Input() chartData: any | undefined;
  chart: Highcharts.Chart | undefined;
  currentYear: string = '';

  ngOnInit() {
    this.setInitialYear();
    this.createChart();
  }

  setInitialYear() {
    if (this.chartData && this.chartData.years) {
      this.currentYear = this.getHighestYear(this.chartData.years);
    }
  }

  getHighestYear(years: string[]): string {
    return years.reduce((a, b) => a > b ? a : b);
  }

  createChart() {
    const options: Highcharts.Options = {
      chart: {
        type: 'column',
        height: 280,
      },
      title: undefined,
      xAxis: {
        categories: ['Portfolio', 'Comp Ind', 'Sensex', 'Midcap', 'Smallcap'],
        title: undefined,
      },
      yAxis: {
        title: undefined,
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
          name: '',
          type: 'column',
          data: this.getYearData(this.currentYear),
          showInLegend: false,
        },
      ],
    };

    this.chart = Highcharts.chart(this.container!.nativeElement, options);
  }

  getYearData(year: string): Highcharts.PointOptionsObject[] {
    const categories = ['port', 'comp', 'sensex', 'midcap', 'smallcap'];
    return categories.map(category => {
      const value = this.chartData![category][year].data;
      return {
        y: value,
        color: value < 0 ? 'red' : undefined // Use default color for positive values
      };
    });
  }

  updateChart(year: string) {
    this.currentYear = year;
    if (this.chart) {
      this.chart.series[0].setData(this.getYearData(year));
    }
  }
}
