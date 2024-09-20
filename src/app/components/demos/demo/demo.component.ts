import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  TemplateRef,
} from '@angular/core';

import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

import { CommonModule } from '@angular/common';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  standalone: true,
  imports: [CommonModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DemoComponent  {

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef?.hide();
  }

}
