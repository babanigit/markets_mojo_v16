import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  TemplateRef,
  OnDestroy,
  OnInit,
  ElementRef,
  ViewChild,
  SimpleChanges,
} from '@angular/core';

// import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

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
  imports: [CommonModule, DemoChildComponent, PopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DemoComponent {
  @ViewChild('sourceDiv') sourceDiv: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('targetDiv') targetDiv: ElementRef<HTMLDivElement> | undefined;

  click_state: boolean = false;

  @ViewChild('parentContainer', { static: false })
  parentContainer!: ElementRef<HTMLDivElement>;

  receiveElement(element: HTMLDivElement) {
    console.log('Received element', element);

    // Use the ViewChild reference to append the element
    setTimeout(() => {
      if (this.parentContainer) {
        console.log('append');
        this.parentContainer.nativeElement.appendChild(element);
      }
    }, 0);
  }
  receiveClickState(state: boolean) {
    this.click_state = state;
  }

  moveElement() {
    if (this.sourceDiv && this.targetDiv) {
      // Get the source div element
      const sourceElement = this.sourceDiv.nativeElement;

      // Check if the source element has a parent node before removing it
      if (sourceElement.parentNode) {
        // Remove the source div element from its current location
        sourceElement.parentNode.removeChild(sourceElement);

        // Append the source div element to the target div
        this.targetDiv.nativeElement.appendChild(sourceElement);
      } else {
        console.log('Source element has no parent node.');
      }
    }
  }
}
