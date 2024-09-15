
import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { ScorecardComponent } from '../../cards/scorecard/scorecard.component';
import { IRetcompo, IReturn, IReturn_Data, IScorecard } from 'src/app/models/pp/return';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { BreakupComponent } from '../../cards/breakup/breakup.component';
import { I_Ixrr, I_Ixrr_Data } from 'src/app/models/pp/ixrr';

@Component({
  selector: 'app-swiper-return-analysis',
  templateUrl: './swiper-return-analysis.component.html',
  styleUrls: ['./swiper-return-analysis.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ScorecardComponent,
    RoundOffPipe,
    TwoCommasPipe,
    BreakupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperReturnAnalysisComponent  implements AfterViewInit, OnInit {

  main_data: IReturn_Data | undefined;
  data_scorecard:IScorecard |undefined
  data_retcompo: IRetcompo | undefined;

  ixrrData:I_Ixrr_Data | undefined;

  @Output() send_element = new EventEmitter<string>(); //for input value

  @Input() SHOW_BUTTON: Boolean = true;
  isCollapseTodayContri: boolean = true;


  constructor(
    private serv: GetPersonalPFService,
    public fun: PpFunctionsService,
    private cdr: ChangeDetectorRef
  ) {}

  recieveElemment(str: string) {
    console.log("the str is : " , str)

    this.send_element.emit(str)
    // this.fetchGetVerdictReport();
    // this.SNAME_INPUT_STRING = e;
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.serv.getSwitcherDatas('return').subscribe((res:IReturn) => {

      this.main_data = res.data;
      console.log('main_data : ', res.data);

      this.data_scorecard=res.data.scorecard;
      this.data_retcompo=res.data.retcompo;

      this.cdr.detectChanges(); // Trigger change detection
    });

    this.serv.getIxrrData().subscribe((res:I_Ixrr) => {
      this.ixrrData=res.data
      console.log('ixrrData : ', res);

      this.cdr.detectChanges(); // Trigger change detection

    })
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
