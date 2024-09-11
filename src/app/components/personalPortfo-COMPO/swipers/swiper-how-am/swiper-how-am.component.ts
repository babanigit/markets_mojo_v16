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
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';

@Component({
  selector: 'app-swiper-how-am',
  templateUrl: './swiper-how-am.component.html',
  styleUrls: ['./swiper-how-am.component.css'],
  standalone: true,
  imports: [CommonModule,
    TwoCommasPipe,
    RoundOffPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperHowAmComponent implements AfterViewInit, OnInit {
  main_data: any = [];
  data_summary: any = [];
  data_contri: any = [];
  data_drags: any = [];
  data_news:any=[];

  constructor(
    private serv: GetPersonalPFService,
    public fun: PpFunctionsService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.serv.getSwitcherDatas('today').subscribe((res) => {

      this.main_data = res;
      console.log('res : ', res);

      this.data_summary = res.data.summary;
      console.log('data_summary ', this.data_summary);

      this.data_contri = res.data.overall.contri;
      console.log('data_contri ', this.data_contri);

      this.data_drags = res.data.overall.drags;
      console.log('data_drags ', this.data_drags);

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
  yee(str:any){
   return this.fun.getClassbyClr(str)
  }
}
