import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
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

  @ViewChild('childDiv') childDiv: ElementRef<HTMLDivElement> |undefined;
  @Output() sendElement = new EventEmitter<HTMLDivElement>();
  @Output() sendClick_State = new EventEmitter<boolean>(); //for input value

  sendToParent() {
    if (this.childDiv) {
      // Clone the element to avoid moving it
      const clonedElement = this.childDiv.nativeElement.cloneNode(true) as HTMLDivElement;
      console.log("Sending cloned element:", clonedElement);
      this.sendElement.emit(clonedElement);
      this.sendClick_State.emit(true);
    }

  }

}
