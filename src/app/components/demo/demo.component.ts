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
  imports: [
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DemoComponent implements AfterViewInit {
  slides = [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
    { title: 'Section 4', content: 'Content for section 4' },
    { title: 'Section 5', content: 'Content for section 5' },
    { title: 'Section 6', content: 'Content for section 6' },
    { title: 'Section 7', content: 'Content for section 7' },
    { title: 'Section 8', content: 'Content for section 8' },
  ];

  ngAfterViewInit() {
    Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
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
