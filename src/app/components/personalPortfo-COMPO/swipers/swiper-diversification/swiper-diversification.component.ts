import { Component, Input } from '@angular/core';
import { ScorecardComponent } from "../../cards/scorecard/scorecard.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-swiper-diversification',
  templateUrl: './swiper-diversification.component.html',
  styleUrls: ['./swiper-diversification.component.css'],
  standalone:true,
  imports: [ScorecardComponent, CommonModule]
})
export class SwiperDiversificationComponent {
  @Input() score: any;


}
