
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
import { IReturn, IReturn_Data, IScorecard } from 'src/app/models/pp/return';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';

@Component({
  selector: 'app-swiper-return-analysis',
  templateUrl: './swiper-return-analysis.component.html',
  styleUrls: ['./swiper-return-analysis.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ScorecardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperReturnAnalysisComponent  implements AfterViewInit, OnInit {

  main_data: IReturn_Data | undefined;

  data_scorecard:IScorecard |undefined

  // data.overall
  data_contri: any = [];
  data_drags: any = [];
  data_gainers: any = [];
  data_losers: any = [];

  // data
  data_news: any = [];
  data_corpact: any = [];
  data_summary: any = [];

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

      this.data_scorecard=res.data.scorecard

      // this.data_contri = res.data.overall.contri;
      // console.log('data_contri ', this.data_contri);

      // this.data_drags = res.data.overall.drags;
      // console.log('data_drags ', this.data_drags);

      // this.data_gainers = res.data.overall.gainers;
      // console.log('data_gainers ', this.data_gainers);

      // this.data_losers = res.data.overall.losers;
      // console.log('data_losers ', this.data_losers);

      // this.data_summary = res.data.summary;
      // console.log('data_summary ', this.data_summary);

      // this.data_news = res.data.news;
      // console.log('data_news ', this.data_news);

      // this.data_corpact = res.data.corpact;
      // console.log('data_corpact ', this.data_corpact);

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
