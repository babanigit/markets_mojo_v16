import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { I_diversi_sector } from 'src/app/models/pp/diversification';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { RadiusChartComponent } from '../radius-chart/radius-chart.component';
import { graph_Data2 } from 'src/app/models/pp/risk';
import { series_Data_pie } from 'src/app/models/pp/pie';

@Component({
  selector: 'app-diversification',
  templateUrl: './diversification.component.html',
  styleUrls: ['./diversification.component.css'],
  standalone: true,
  imports: [CommonModule, RadiusChartComponent],
})
export class DiversificationComponent implements OnInit {
  @Input() DATA: I_diversi_sector | undefined; //props
  @Input() HEAD!: string; //props
  // show button
  @Input() SHOW_BUTTON: Boolean = true;

  @Input() TEXT!: string; //props

  pieFromat: series_Data_pie[] | undefined;

  constructor(private fun: PpFunctionsService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['DATA']) {
      this.getPieFromat(this.DATA!.graph);
    }
  }

  // to format
  getPieFromat(data: graph_Data2) {
    const seriesData_pie: any = Object.entries(data).map(([name, y]) => ({
      name,
      y,
    }));
    // console.log('hey bro summary : ', seriesData_pie);
    this.pieFromat = seriesData_pie;
  }
}
