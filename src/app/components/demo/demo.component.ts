import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DemoComponent implements AfterViewInit {
  images = [
    'https://i.marketsmojo.com/logo/axis-securities-logo.png',
    'https://i.marketsmojo.com/logo/smc-logo.png',
    'https://i.marketsmojo.com/logo/gj-logo.png',
    'https://i.marketsmojo.com/logo/angel-logo-v1.png',
    'https://i.marketsmojo.com/logo/integrated-logo-v1.png',
  ];


  ngAfterViewInit() {
    Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);
    const swiper = new Swiper('.swiper-container', {
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

  getRandomWidth() {
    return Math.floor(Math.random() * 200) + 100; // Random width between 100px and 300px
  }
}
