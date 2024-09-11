import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/getTableAndNetFactor/get-personal-pf.service';
@Component({
  selector: 'app-swiper-doing-overall',
  templateUrl: './swiper-doing-overall.component.html',
  styleUrls: ['./swiper-doing-overall.component.css'],
  standalone: true,
  imports: [],
})
export class SwiperDoingOverallComponent implements OnInit {

  DATA: any = [];
  constructor(private serv: GetPersonalPFService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.serv.getSwitcherDatas('overall').subscribe((data) => {
      console.log('the overall switcher : ', data);
      this.DATA = data;
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
