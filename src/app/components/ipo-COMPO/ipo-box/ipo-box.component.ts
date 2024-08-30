import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GetDotFunctionsService } from '../../../services/ipo/get-dot-functions.service';

@Component({
  selector: 'app-ipo-box',
  templateUrl: './ipo-box.component.html',
  styleUrls: ['./ipo-box.component.css'],
  // styleUrl: './ipo-box.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class IpoBoxComponent {
  @Input() hello!: any; //props
  maxValue=200

  constructor(private dot: GetDotFunctionsService) {}

  getDotProperties(hero: any) {
    return this.dot.getDotPropertiesService(hero.mojocall.sub_point, this.maxValue);
  }
}
