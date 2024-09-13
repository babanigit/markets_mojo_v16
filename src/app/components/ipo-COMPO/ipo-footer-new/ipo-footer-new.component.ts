import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
@Component({
  selector: 'app-ipo-footer-new',
  templateUrl: './ipo-footer-new.component.html',
  styleUrls: ['./ipo-footer-new.component.css'],
  standalone:true,
  imports: [],
})
export class IpoFooterNewComponent   implements AfterViewInit {

  ngAfterViewInit() {
    Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);
    const swiper = new Swiper('.swiper-container-new', {
      slidesPerView: 'auto',
      slidesPerGroup: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination-footer',
        clickable: true,
      },
    });

    // console.log('Swiper instance:', swiper);
  }
}
