import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

import { IPortfolioGraph_Data } from 'src/app/models/pp/PortfolioGraph';
import { IGraphToday_Data } from 'src/app/models/pp/today';

type GraphKeys = keyof IPortfolioGraph_Data;

@Component({
  selector: 'app-graph-today',
  templateUrl: './graph-today.component.html',
  styleUrls: ['./graph-today.component.css'],
  standalone: true,
  imports: [ChartModule, CommonModule],
})
export class GraphTodayComponent implements OnChanges {
  areaChart: Chart = new Chart({});

  @Input() send_button: string | undefined;
  @Input() switch_button: string | undefined;
  @Input() PortfolioGraph_data: IPortfolioGraph_Data | undefined;
  @Input() GraphToday_data: IGraphToday_Data | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges triggered', changes);
    if (changes['PortfolioGraph_data'] || changes['GraphToday_data'] || changes['send_button'] || changes['switch_button']) {
      this.updateChart();
    }
  }

  private extractDataPoints(data: IPortfolioGraph_Data | undefined, key: GraphKeys): [number, number][] {
    if (!data || !data[key]?.plotgraph) {
      console.warn(`No data available for key: ${key}`);
      return [];
    }

    return data[key].plotgraph.map((point) => {
      const timestamp = new Date(point.dt).getTime();
      const value = this.switch_button === 'flow' ? point.port : point.portidx;
      return [timestamp, value];
    });
  }

  private updateChart(): void {
    console.log('Updating chart');
    console.log('send_button:', this.send_button);
    console.log('GraphToday_data:', this.GraphToday_data);
    console.log('PortfolioGraph_data:', this.PortfolioGraph_data);

    if (!this.send_button) {
      console.error('send_button is undefined');
      return;
    }

    let dataPoints: [number, number][] = [];
    console.log("form update the graphtoday is : ", this.GraphToday_data)

    if (this.send_button === '1D' && this.GraphToday_data) {
      console.log('Processing 1D data');
      const plotpts = this.GraphToday_data['plotpts'];

      console.log("the poinst are hehehe : ", plotpts)

      if (plotpts && plotpts.length > 0) {
        dataPoints = this.processGraphTodayData(plotpts);
      } else {
        console.warn('No plot points available in GraphToday_data');
      }
    } else if (this.PortfolioGraph_data) {
      console.log('Processing PortfolioGraph data');
      const key = this.send_button as GraphKeys;
      dataPoints = this.extractDataPoints(this.PortfolioGraph_data, key);
    } else {
      console.error('Invalid graph data');
      return;
    }

    if (dataPoints.length === 0) {
      console.warn('No data points available after processing');
      return;
    }

    this.renderChart(dataPoints);
  }

  private processGraphTodayData(plotpts: any[]): [number, number][] {
    return plotpts.map((point) => {
      try {
        const [time, meridiem] = point.time.split(' ');
        const [hour, minute] = time.split(':').map(Number);

        if (isNaN(hour) || isNaN(minute)) {
          throw new Error('Invalid hour or minute');
        }

        const isPM = meridiem === 'PM';
        const hoursIn24Format = isPM && hour !== 12 ? hour + 12 : (hour === 12 && !isPM ? 0 : hour);

        const now = new Date();
        const timestamp = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hoursIn24Format, minute, 0).getTime();

        if (isNaN(timestamp)) {
          throw new Error('Invalid timestamp');
        }

        const value = Number(point.y);
        if (isNaN(value)) {
          throw new Error('Invalid y value');
        }

        return [timestamp, value];
      } catch (error) {
        console.error('Error processing data point:', error, 'Point:', point);
        return null;
      }
    }).filter((point): point is [number, number] => point !== null);
  }

  private renderChart(dataPoints: [number, number][]): void {
    console.log('Rendering chart with data points:', dataPoints);

    dataPoints.sort((a, b) => a[0] - b[0]);

    const minY = Math.min(...dataPoints.map(([, y]) => y));
    const maxY = Math.max(...dataPoints.map(([, y]) => y));
    const previousClose = dataPoints[0][1];

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