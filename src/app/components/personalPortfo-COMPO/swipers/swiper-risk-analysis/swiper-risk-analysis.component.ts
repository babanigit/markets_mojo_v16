import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectorRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { I_Ixrr_Data, I_Ixrr } from 'src/app/models/pp/ixrr';

import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';
import {
  graph_Data2,
  IAllocation,
  IBeta,
  IReturn_risk,
  IRisk,
  IRisk_Data,
  IScore_risk,
  IVar,
  IVolatility,
} from 'src/app/models/pp/risk';
import { series_Data_pie } from 'src/app/models/pp/pie';
import { ScorecardComponent } from '../../cards/scorecard/scorecard.component';
import { LineGraphComponent } from '../../graph/line-graph/line-graph.component';
import { RadiusChartComponent } from '../../graph/radius-chart/radius-chart.component';
import { BetaComponent } from '../../cards/beta/beta.component';
import { VolatilityComponent } from '../../cards/volatility/volatility.component';
import { ReturnVarComponent } from '../../cards/return-var/return-var.component';
import { RiskAdjReturnsComponent } from '../../cards/risk-adj-returns/risk-adj-returns.component';
import { AllocRiskComponent } from "../../cards/alloc-risk/alloc-risk.component";

@Component({
  selector: 'app-swiper-risk-analysis',
  templateUrl: './swiper-risk-analysis.component.html',
  styleUrls: ['./swiper-risk-analysis.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RoundOffPipe,
    TwoCommasPipe,
    RadiusChartComponent,
    ScorecardComponent,
    LineGraphComponent,
    BetaComponent,
    VolatilityComponent,
    ReturnVarComponent,
    RiskAdjReturnsComponent,
    AllocRiskComponent
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperRiskAnalysisComponent implements AfterViewInit, OnInit {
  main_data: IRisk_Data | undefined;
  data_scorecard: IScore_risk | undefined;
  data_allocation: IAllocation | undefined;

  beta: IBeta | undefined;
  volatility: IVolatility | undefined;
  var_data: IVar | undefined;
  return_risk_data : IReturn_risk | undefined;

  pieFromat: series_Data_pie[] | undefined;

  ixrrData: I_Ixrr_Data | undefined;

  @Output() send_element = new EventEmitter<string>(); //for input value

  @Input() SHOW_BUTTON: Boolean = true;
  isCollapseTodayContri: boolean = true;

  @Input() score: any;

  constructor(
    private serv: GetPersonalPFService,
    public fun: PpFunctionsService,
    private cdr: ChangeDetectorRef
  ) {}

  recieveElemment(str: string) {
    // console.log('the str is : ', str);

    this.send_element.emit(str);
    // this.fetchGetVerdictReport();
    // this.SNAME_INPUT_STRING = e;
  }

  ngOnInit(): void {
    this.fetchData();
  }

  @Output() sendElement = new EventEmitter<HTMLDivElement>();
  @Output() sendClick_State = new EventEmitter<boolean>(); //for input value
  @Output() send_head = new EventEmitter<string>(); //for
  @Output() loading_state = new EventEmitter<boolean>(false); //for


  receiveElement(element: HTMLDivElement) {
    this.sendElement.emit(element);
  }
  receiveClickState(state: boolean) {
    this.sendClick_State.emit(state);
  }
  receiveHead(str: string) {
    this.send_head.emit(str);
  }
  receiveLoadingState(state:boolean) {
    this.loading_state.emit(state)
  }

  // to format
  getPieFromat(data: graph_Data2) {
    const seriesData_pie: any = Object.entries(data).map(([name, y]) => ({
      name,
      y,
    }));
    // console.log('hey bro : ', seriesData_pie);
    this.pieFromat = seriesData_pie;
  }

  fetchData(): void {
    this.serv.getSwitcherDatas('risk').subscribe((res: IRisk) => {
      this.main_data = res.data;
      // console.log('main_data riks : ', res.data);

      this.data_scorecard = res.data.score;
      // console.log('scorecard riks : ', res.data);

      this.data_allocation = res.data.allocation;
      // console.log('data_allocation riks : ', res.data.allocation);
      this.beta = res.data.beta;
      this.volatility = res.data.volatility;
      this.var_data = res.data.var;
      this.return_risk_data=res.data.return;

      // console.log(
      //   'res.data.allocation.graph.data ',
      //   res.data.allocation.graph.data
      // );

      this.getPieFromat(res.data.allocation.graph.data);

      this.cdr.detectChanges(); // Trigger change detection
    });

    this.serv.getIxrrData().subscribe((res: I_Ixrr) => {
      this.ixrrData = res.data;
      // console.log('ixrrData : ', res);

      this.cdr.detectChanges(); // Trigger change detection
    });
  }

  ngAfterViewInit() {
    Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);
    const swiper = new Swiper('.swiper-6', {
      slidesPerView: 'auto',
      // slidesPerGroup: 3,
      spaceBetween: 30,
      // loop: true,
      // autoplay: {
      //   delay: 1000,
      //   disableOnInteraction: false,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    // console.log('Swiper instance:', swiper);
  }

  modelOpen() {
    console.log('model clicked');
  }
}
