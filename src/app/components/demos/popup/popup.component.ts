import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PopupService } from 'src/app/services/personal-portfolio/popup/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  standalone:true,
  imports: [
    CommonModule
  ]
})
export class PopupComponent {
  constructor(private popupService: PopupService) {}

  closePopup() {
    this.popupService.hidePopup();
  }
}
