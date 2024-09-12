import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { CardComponent } from '../../card/card.component';
import { GraphTodayComponent } from '../../graph/graph-today/graph-today.component';
@Component({
  selector: 'app-swiper-doing-overall',
  templateUrl: './swiper-doing-overall.component.html',
  styleUrls: ['./swiper-doing-overall.component.css'],
  standalone: true,
  imports: [CommonModule, TwoCommasPipe, RoundOffPipe, CardComponent,GraphTodayComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperDoingOverallComponent implements AfterViewInit, OnInit {

  main_data: any = [];

    // data
    data_news: any = [];
    data_corpact: any = [];
    data_summary: any = [];

// data.overall
  data_contri: any = [];
  data_drags: any = [];
  data_gainers:any = [];
  data_losers:any = [];

  constructor(
    private serv: GetPersonalPFService,
    public fun: PpFunctionsService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.serv.getSwitcherDatas('overall').subscribe((res) => {

      this.main_data = res.data;
      console.log('res : ', res.data);

      this.data_contri = res.data.overall.contri;
      console.log('data_contri ', this.data_contri);

      this.data_drags = res.data.overall.drags;
      console.log('data_drags ', this.data_drags);

      this.data_gainers = res.data.overall.gainers;
      console.log('data_gainers ', this.data_gainers);

      this.data_losers = res.data.overall.losers;
      console.log('data_losers ', this.data_losers);


      this.data_summary = res.data.summary;
      console.log('data_summary ', this.data_summary);

      this.data_news = res.data.news;
      console.log('data_news ', this.data_news);

      this.data_corpact = res.data.corpact;
      console.log('data_corpact ', this.data_corpact);

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
