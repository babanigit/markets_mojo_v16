import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { GraphTodayComponent } from '../../graph/graph-today/graph-today.component';
import { CardComponent } from '../../cards/card/card.component';
import { IMcapClass_Data, IToday, IToday_data } from 'src/app/models/pp/today';

@Component({
  selector: 'app-swiper-how-am',
  templateUrl: './swiper-how-am.component.html',
  styleUrls: ['./swiper-how-am.component.css'],
  standalone: true,
  imports: [CommonModule, TwoCommasPipe, RoundOffPipe, CardComponent,GraphTodayComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperHowAmComponent implements AfterViewInit, OnInit {
  data_summary: any = [];
  data_contri: any = [];
  data_drags: any = [];
  data_news: any = [];
  data_corpact: any = [];
  data_gainers:any = [];
  data_losers:any = [];
  data_mcap:IMcapClass_Data |undefined


  constructor(
    private serv: GetPersonalPFService,
    public fun: PpFunctionsService,
    private cdr: ChangeDetectorRef

  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.serv.getSwitcherDatas('today').subscribe((res: IToday) => {


      this.data_summary = res.data.summary;
      // console.log('data_summary ', this.data_summary);

      this.data_contri = res.data.overall.contri;
      // console.log('data_contri ', this.data_contri);

      this.data_drags = res.data.overall.drags;
      // console.log('data_drags ', this.data_drags);

      this.data_news = res.data.news;
      // console.log('data_news ', this.data_news);

      this.data_corpact = res.data.corpact;
      // console.log('data_corpact ', this.data_corpact);

      this.data_gainers = res.data.overall.gainers;
      // console.log('data_gainers ', this.data_gainers);

      this.data_losers = res.data.overall.losers;
      // console.log('data_losers ', this.data_losers);
      this.data_mcap =res.data.mcap

      this.cdr.detectChanges(); // Trigger change detection

    });
  }
  ngAfterViewInit() {
    Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);
    const swiper = new Swiper('.swiper-1', {
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
  modelopen(){
    console.log('Modelopen');
  }
}
