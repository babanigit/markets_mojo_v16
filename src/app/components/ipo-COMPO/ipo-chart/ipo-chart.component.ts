import { Component, OnInit } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { IGraphData } from '../../../models/graphData';

import { GraphDataService } from '../../../services/ipo/graph-data.service';
import { CommonModule } from '@angular/common';
import { GetDotFunctionsService } from '../../../services/ipo/get-dot-functions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ipo-chart',
  templateUrl: './ipo-chart.component.html',
  styleUrls: ['./ipo-chart.component.css'],
  standalone: true,
  imports: [ChartModule, CommonModule],
})
export class IpoChartComponent implements OnInit {
  graphData: IGraphData | undefined; // Initialize with an empty object

  strr: string = 'day'; // Default value
  areaChart: Chart = new Chart({}); // Initialize with an empty chart
  maxYY!: number;

  maxValue = 100;
  dotPositions: Map<any, string> = new Map();
  dotColors: Map<any, string> = new Map();

  loading$: Observable<boolean> = this.serv.loading$;
  error$: Observable<string | null> = this.serv.error$;
  errorMessage: string | null = null;

  constructor(
    private serv: GraphDataService,
    private dot: GetDotFunctionsService
  ) {}

  ngOnInit(): void {
    this.fetchGraphData('day');
  }

  fetchGraphData(
    type: 'day' | 'week' | 'month' | 'YTD' | 'year' | 'threeYears'
  ) {
    this.serv.getGraphData(type).subscribe({
      next: (res: IGraphData) => {
        this.graphData = res;
        this.updateChart(); // Initialize the chart based on default value
        this.errorMessage = null; // Clear previous errors
      },
      error: (err) => {
        this.errorMessage = 'Failed to load data. Please try again later.';
        console.error('Error:', err);
      },
    });
  }

  onGraphButtonClick(
    type: 'day' | 'week' | 'month' | 'YTD' | 'year' | 'threeYears'
  ) {
    console.log('clicked ', type);
    this.strr = type;
    this.fetchGraphData(type);
  }

  // get the data points
  extractDataPoints(g: IGraphData) {
    if (g && 'data' in g) {
      return (g as IGraphData).data.graph_indices[0].graph.IndiceArray.map(
        (point) => {
          const timestamp = new Date(point.time).getTime();
          return [timestamp, point.y];
        }
      );
    }
    return []; // Return empty array if no valid data
  }

  updateChart() {
    if (
      !this.graphData ||
      !this.graphData.data ||
      !this.graphData.data.graph_indices ||
      this.graphData.data.graph_indices.length === 0
    ) {
      console.error('Invalid graph data');
      return;
    }

    const dataPoints = this.extractDataPoints(this.graphData);
    const previousClose = this.graphData.data.graph_indices[0].PreviousClose;

    // Sort data points by timestamp
    dataPoints.sort((a, b) => a[0] - b[0]);

    const minY = Math.min(...dataPoints.map(([_, y]) => y));
    const maxY = Math.max(...dataPoints.map(([_, y]) => y));

    let currentSeries: { data: [number, number][]; color: string }[] = [];
    let currentSegment: [number, number][] = [];
    let currentColor =
      dataPoints[0][1] >= previousClose ? '#4CAF50' : '#FF6666';

    const addSegment = () => {
      if (currentSegment.length > 0) {
        currentSeries.push({
          data: [...currentSegment],
          color: currentColor,
        });
        currentSegment = [];
      }
    };

    dataPoints.forEach(([timestamp, value], index) => {
      if (index === 0) {
        currentSegment.push([timestamp, value]);
        return;
      }

      const prevValue = dataPoints[index - 1][1];

      if (
        (prevValue >= previousClose && value < previousClose) ||
        (prevValue < previousClose && value >= previousClose)
      ) {
        // Intersection point
        const intersectionX = timestamp;
        const intersectionY = previousClose;

        currentSegment.push([intersectionX, intersectionY]);
        addSegment();

        currentColor = value >= previousClose ? '#4CAF50' : '#FF6666';
        currentSegment.push([intersectionX, intersectionY]);
      }

      currentSegment.push([timestamp, value]);
    });

    addSegment(); // Add the last segment

    this.areaChart = new Chart({
      accessibility: { enabled: false },
      chart: { type: 'area' },
      title: { text: '' },
      credits: { enabled: false },
      xAxis: {
        type: 'datetime',
        tickLength: 0,
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
        plotLines: [
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
        ],
      },
      series: currentSeries.map((series) => ({
        type: 'area',
        name: 'Stock Data',
        data: series.data,
        color: series.color,
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, Highcharts.color(series.color).setOpacity(0.6).get('rgba')],
            [1, Highcharts.color(series.color).setOpacity(0.2).get('rgba')],
          ],
        },
        lineWidth: 1,
        marker: { enabled: false, radius: 2 },
        tooltip: { valueDecimals: 2 },
        threshold: previousClose,
      })) as Highcharts.SeriesOptionsType[],
    });
  }

  getDotProperties(hero: IGraphData) {
    return this.dot.getDotPropertiesService(
      hero.data.graph_indices[0].WEEK_POINTER_52,
      this.maxValue
    );
  }
}
