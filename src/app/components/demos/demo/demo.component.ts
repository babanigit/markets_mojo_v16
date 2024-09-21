import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  TemplateRef,
  OnDestroy,
  OnInit,
  ElementRef,
} from '@angular/core';

import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

import { CommonModule } from '@angular/common';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { DemoChildComponent } from '../demo-child/demo-child.component';
import { PopupService } from 'src/app/services/personal-portfolio/popup/popup.service';
import { Subscription } from 'rxjs';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  standalone: true,
  imports: [CommonModule,
    DemoChildComponent,
    PopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DemoComponent  implements OnInit, OnDestroy {
  showPopup = false;
  private subscription: Subscription | undefined;

  constructor(private popupService: PopupService) {}


  ngOnInit() {
    this.subscription = this.popupService.showPopup$.subscribe(
      show => this.showPopup = show
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
