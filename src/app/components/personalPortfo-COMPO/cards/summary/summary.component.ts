import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import {
  IFinTrend_qvfl,
  ILiquidity_qvfl,
  IQuality_qvfl,
  IQvfl,
  IQvfl_Data,
  IValuation_qvfl,
} from 'src/app/models/pp/qvfl';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { RadiusChartComponent } from '../radius-chart/radius-chart.component';
import { graph_Data2 } from 'src/app/models/pp/risk';
import { series_Data_pie } from 'src/app/models/pp/pie';
import { ModelOpenComponent } from '../../model-open/model-open.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RoundOffPipe,
    TwoCommasPipe,
    RadiusChartComponent,
    ModelOpenComponent,
  ],
})
export class SummaryComponent {
  @Input() DATA: IQvfl_Data | undefined;
  @Input() HEAD: string | undefined; //props
  // show button
  @Input() SHOW_BUTTON: Boolean = true;

  pieFromat: series_Data_pie[] | undefined;

  MAIN:
    | ILiquidity_qvfl
    | IFinTrend_qvfl
    | IValuation_qvfl
    | IQuality_qvfl
    | any
    | undefined;

  constructor(public fun: PpFunctionsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['DATA']) {
      // console.log('DATA changed card: ', this.DATA);

      if (this.HEAD === 'Liquidity' && this.DATA!) {
        this.MAIN = this.DATA.liquidity;
        // console.log('the main is  ', this.HEAD, '  ::::', this.MAIN);
        this.getPieFromat(this.MAIN.graph);
      } else if (this.HEAD === 'Quality' && this.DATA!) {
        this.MAIN = this.DATA.quality;
        // console.log('the main is  ', this.HEAD, '  ::::', this.MAIN);
        this.getPieFromat(this.MAIN.graph);
      } else if (this.HEAD === 'Valuation' && this.DATA!) {
        this.MAIN = this.DATA.valuation;
        // console.log('the main is  ', this.HEAD, '  ::::', this.MAIN);
        this.getPieFromat(this.MAIN.graph);
      } else if (this.HEAD === 'Financial' && this.DATA!) {
        this.MAIN = this.DATA.fin_trend;
        // console.log('the main is  ', this.HEAD, '  ::::', this.MAIN);
        this.getPieFromat(this.MAIN.graph);
      }
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
