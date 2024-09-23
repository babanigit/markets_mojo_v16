import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

import { IPortfolioGraph_Data } from 'src/app/models/pp/PortfolioGraph';
import { ITodayGraph_Data } from 'src/app/models/pp/todayGraph';

type GraphKeys = keyof ITodayGraph_Data;

@Component({
  selector: 'app-graph-today',
  templateUrl: './graph-today.component.html',
  styleUrls: ['./graph-today.component.css'],
  standalone: true,
  imports: [ChartModule, CommonModule],
})
export class GraphTodayComponent implements OnChanges {
  @Input() graphToday_Data: IPortfolioGraph_Data | undefined;
  @Input() send_button: string | undefined;
  @Input() switch_button: string | undefined;

  areaChart: Chart = new Chart({});

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['graphToday_Data'] || changes['send_button'] || changes['switch_button']) {
      this.updateChart();
    }
  }

  private extractDataPoints(data: ITodayGraph_Data | undefined, key: GraphKeys): [number, number][] {
    if (!data || !data[key]?.plotgraph) {
      return [];
    }

    return data[key].plotgraph.map((point) => {
      const timestamp = new Date(point.dt).getTime();
      const value = this.switch_button === 'flow' ? point.port : point.portidx;
      return [timestamp, value];
    });
  }

  private updateChart(): void {
    if (!this.graphToday_Data || !this.send_button) {
      console.error('Invalid graph data or send_button');
      return;
    }

    const key = this.send_button as GraphKeys;
    const dataPoints = this.extractDataPoints(this.graphToday_Data, key);

    if (dataPoints.length === 0) {
      console.warn('No data points available');
      return;
    }

    dataPoints.sort((a, b) => a[0] - b[0]);

    const minY = Math.min(...dataPoints.map(([, y]) => y));
    const maxY = Math.max(...dataPoints.map(([, y]) => y));
    const previousClose = dataPoints[0][1]; // Assuming the first point is the previous close

    this.areaChart = new Chart({
      chart: { type: 'area', height: 260 },
      title: { text: '' },
      credits: { enabled: false },
      xAxis: {
        type: 'datetime',
        labels: { enabled: false },
        gridLineWidth: 0,
        title: { text: null },
      },
      yAxis: {
        title: { text: null },
        min: minY,
        max: maxY,
        tickAmount: 6,
        labels: { enabled: false },
        gridLineWidth: 0,
        plotLines: this.createPlotLines(previousClose, minY, maxY),
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, Highcharts.color('#4CAF50').setOpacity(0.5).get('rgba') as string],
              [1, Highcharts.color('#FF6666').setOpacity(0.5).get('rgba') as string],
            ],
          },
          threshold: null,
        },
      },
      series: [{
        type: 'area',
        name: '',
        data: dataPoints,
        color: '#000000',
        lineWidth: 1,
        marker: { enabled: false, radius: 2 },
        tooltip: { valueDecimals: 2 },
        zones: [
          { value: previousClose, color: '#FF6666' },
          { color: '#4CAF50' },
        ],
      } as Highcharts.SeriesAreaOptions],
    });
  }

  private createPlotLines(previousClose: number, minY: number, maxY: number): Highcharts.YAxisPlotLinesOptions[] {
    return [
      {
        color: '#C0C0C0',
        width: 2,
        value: previousClose,
        label: {
          text: `Previous Close: ${previousClose.toFixed(2)}`,
          align: 'right',
          style: { color: '#404040' },
        },
      },
      {
        color: '#66FF66',
        width: 2,
        value: maxY,
        label: {
          text: `High: ${maxY.toFixed(2)}`,
          align: 'left',
          style: { color: '#404040' },
        },
      },
      {
        color: '#FF6666',
        width: 2,
        value: minY,
        label: {
          text: `Low: ${minY.toFixed(2)}`,
          align: 'left',
          style: { color: '#404040' },
        },
      },
    ];
  }
}
