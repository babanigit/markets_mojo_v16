import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IOverall_Data } from 'src/app/models/pp/overall';
import { IReturn_Data } from 'src/app/models/pp/return';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';

@Component({
  selector: 'app-breakup',
  templateUrl: './breakup.component.html',
  styleUrls: ['./breakup.component.css'],
  standalone:true,
  imports: [CommonModule, RoundOffPipe, TwoCommasPipe],
})
export class BreakupComponent {
  @Input() DATA: IOverall_Data | undefined; //props
  @Input() HEAD!: string; //props

  // show button
  @Input() SHOW_BUTTON: Boolean=true


  constructor(public fun: PpFunctionsService) {}

  isCollapseTodayContri:boolean=true

}
