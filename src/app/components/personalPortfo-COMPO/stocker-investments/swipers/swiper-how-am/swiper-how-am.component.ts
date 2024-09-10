import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

@Component({
  selector: 'app-swiper-how-am',
  templateUrl: './swiper-how-am.component.html',
  styleUrls: ['./swiper-how-am.component.css'],
  standalone:true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperHowAmComponent  implements AfterViewInit {


  ngAfterViewInit() {
    Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);
    const swiper = new Swiper('.swiper-2', {
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
