import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
@Component({
  selector: 'app-swiper-doing-overall',
  templateUrl: './swiper-doing-overall.component.html',
  styleUrls: ['./swiper-doing-overall.component.css'],
  standalone: true,
  imports: []
})
export class SwiperDoingOverallComponent {



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

    console.log('Swiper instance:', swiper);
  }

}
