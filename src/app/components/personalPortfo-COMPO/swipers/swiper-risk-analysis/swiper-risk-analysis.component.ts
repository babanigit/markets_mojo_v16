import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectorRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

import { ScorecardComponent } from '../../cards/scorecard/scorecard.component';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { I_Ixrr_Data, I_Ixrr } from 'src/app/models/pp/ixrr';
import {
  IReturn_Data,
  IScorecard,
  IRetcompo,
  IDivcontri,
  ISector,
  IMcap,
  IHoldings,
  IReturn,
} from 'src/app/models/pp/return';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';
import { IRisk, IRisk_Data, IScore_risk } from 'src/app/models/pp/risk';
import { Scorecard2Component } from '../../cards/scorecard2/scorecard2.component';

@Component({
  selector: 'app-swiper-risk-analysis',
  templateUrl: './swiper-risk-analysis.component.html',
  styleUrls: ['./swiper-risk-analysis.component.css'],
  standalone: true,
  imports: [CommonModule, Scorecard2Component, RoundOffPipe, TwoCommasPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperRiskAnalysisComponent implements AfterViewInit, OnInit {
  main_data: IRisk_Data | undefined;
  data_scorecard: IScore_risk | undefined;

  // data_retcompo: IRetcompo | undefined;
  // data_divcontri: IDivcontri | undefined;
  // data_sector: ISector | undefined;
  // data_Mcap: IMcap | undefined;
  // data_holding: IHoldings | undefined;

  ixrrData: I_Ixrr_Data | undefined;

  @Output() send_element = new EventEmitter<string>(); //for input value

  @Input() SHOW_BUTTON: Boolean = true;
  isCollapseTodayContri: boolean = true;

  constructor(
    private serv: GetPersonalPFService,
    public fun: PpFunctionsService,
    private cdr: ChangeDetectorRef
  ) {}

  recieveElemment(str: string) {
    console.log('the str is : ', str);

    this.send_element.emit(str);
    // this.fetchGetVerdictReport();
    // this.SNAME_INPUT_STRING = e;
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.serv.getSwitcherDatas('risk').subscribe((res: IRisk) => {
      this.main_data = res.data;
      console.log('main_data riks : ', res.data);

      this.data_scorecard = res.data.score;
       console.log('scorecard riks : ', res.data);

      // this.data_retcompo = res.data.retcompo;
      // this.data_divcontri = res.data.divcontri;
      // this.data_sector = res.data.sector;
      // this.data_Mcap = res.data.mcap;
      // this.data_holding =res.data.holdings;

      this.cdr.detectChanges(); // Trigger change detection
    });

    this.serv.getIxrrData().subscribe((res: I_Ixrr) => {
      this.ixrrData = res.data;
      console.log('ixrrData : ', res);

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
}
