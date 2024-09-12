import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { RoundOffPipe } from '../../../pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from '../../../pipes/pp/twoCommas/two-commas.pipe';

import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [CommonModule, RoundOffPipe, TwoCommasPipe],
})
export class CardComponent {
  @Input() DATA: any; //props
  @Input() HEAD!: string; //props

  constructor(public fun: PpFunctionsService) {}

  isCollapseTodayContri:boolean=true

}
