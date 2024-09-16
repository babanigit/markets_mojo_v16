import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

import { Observable } from 'rxjs';
import { IGraphData } from 'src/app/models/graphData';
import { GetDotFunctionsService } from 'src/app/services/ipo/get-dot-functions.service';
import { GraphDataService } from 'src/app/services/ipo/graph-data.service';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';

@Component({
  selector: 'app-graph-today',
  templateUrl: './graph-today.component.html',
  styleUrls: ['./graph-today.component.css'],
  standalone: true,
  imports: [ChartModule, CommonModule],
})

export class GraphTodayComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

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
    private dot: GetDotFunctionsService,
    private serv2 :GetPersonalPFService
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
        this.errorMessage = 'Failed to load graph data. Please try again later.';
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
          // console.log( "extracted data is : ", [timestamp, point.y] )
          return [timestamp, point.y];
        }
      );
    }
    return []; // Return empty array if no valid data
  }

  //start

  updateChart() {

    if (
      !this.graphData
    ) {
      console.error('Invalid graph data');
      return;
    }

    const dataPoints = this.extractDataPoints(this.graphData);
    const previousClose = this.graphData.data.graph_indices[0].PreviousClose;

    dataPoints.sort((a, b) => a[0] - b[0]);

    // to get the min and max of the y axix
    const minY = Math.min(...dataPoints.map(([_, y]) => y));
    const maxY = Math.max(...dataPoints.map(([_, y]) => y));

    console.log("minY: " + minY);
    console.log("maxY: " + maxY);


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
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, '#4CAF50'],
              [1, '#FF6666']
            ]
          },
          threshold: null
        }
      },
      series: [
        {
          type: 'area',
          name: 'Stock Data',
          data: dataPoints,
          color: '#000000', // Set a default line color
          lineWidth: 1,
          marker: { enabled: false, radius: 2 },
          tooltip: { valueDecimals: 2 },
          zones: [
            {
              value: previousClose,
              color: '#FF6666',
            },
            {
              color: '#4CAF50',
            },
          ],
        },
      ] as Highcharts.SeriesOptionsType[],
    });


  }

  // end
  getDotProperties(hero: IGraphData) {
    return this.dot.getDotPropertiesService(
      hero.data.graph_indices[0].WEEK_POINTER_52,
      this.maxValue
    );
  }
}
