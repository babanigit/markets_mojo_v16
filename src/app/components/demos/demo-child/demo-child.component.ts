import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { PopupService } from 'src/app/services/personal-portfolio/popup/popup.service';

@Component({
  selector: 'app-demo-child',
  templateUrl: './demo-child.component.html',
  styleUrls: ['./demo-child.component.css'],
  standalone:true,
  imports:[
    CommonModule
  ]
})
export class DemoChildComponent {
  constructor(private popupService: PopupService) {}

  @ViewChild('childElement') childElement!: ElementRef;
  @Output() elementSent = new EventEmitter<HTMLElement>();

  sendElement() {
    this.elementSent.emit(this.childElement.nativeElement);
  }


  showPopup() {
    this.popupService.showPopup();
  }

}
