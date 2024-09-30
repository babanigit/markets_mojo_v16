import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,

} from '@angular/core';
import { IContri_overallSwiper } from 'src/app/models/pp/overall';
import { IScorecard } from 'src/app/models/pp/return';
import {  IScore_risk } from 'src/app/models/pp/risk';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css'],
  standalone: true,
  imports: [CommonModule, RoundOffPipe, TwoCommasPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScorecardComponent {

  @Input() DATA: any //props
  @Input() HEAD!: string; //props

  // show button
  @Input() SHOW_BUTTON: Boolean = true;

  constructor(private fun: PpFunctionsService) {}

  isCollapseTodayContri: boolean = true;

  // Method to get class by color
  getClassByColor(color: string): string {
    console.log('hello');
    // return 'green';
    return this.fun.getClassbyClr(color);
  }

  // Method to get direction color default
  getDirClrDefault(value: string | number, defaultColor: string): string {
    return this.fun.getDirClrDefault(value, defaultColor);
  }

  trackByFn(index: number, item: any): any {
    return item.dotsum.sid; // Use a unique identifier if possible
  }
}
