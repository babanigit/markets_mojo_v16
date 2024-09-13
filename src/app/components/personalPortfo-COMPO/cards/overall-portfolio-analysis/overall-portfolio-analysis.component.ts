import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IOverall_Data } from 'src/app/models/pp/overall';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';

@Component({
  selector: 'app-overall-portfolio-analysis',
  templateUrl: './overall-portfolio-analysis.component.html',
  styleUrls: ['./overall-portfolio-analysis.component.css'],
  standalone: true,
  imports: [CommonModule, RoundOffPipe, TwoCommasPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverallPortfolioAnalysisComponent  implements OnChanges {

  @Input() DATA: IOverall_Data | undefined ; //props
  @Input() HEAD: string | undefined; //props
  // show button
  @Input() SHOW_BUTTON: Boolean = true;

  constructor(
    private fun: PpFunctionsService,
  ) {}

//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['DATA']) {
//         console.log('DATA changed: ', this.DATA);
//     }
//     if (changes['HEAD']) {
//         console.log('HEAD changed: ', this.HEAD);
//     }
// }

ngOnChanges(changes: SimpleChanges): void {
  if (changes['DATA']) {
    console.log('DATA changed:', changes['DATA'].currentValue);
  }
}

  isCollapseTodayContri: boolean = true;

  // Method to get class by color
  getClassByColor(color: string): string {

    return this.fun.getClassbyClr(color);
  }

  // Method to get direction color default
  getDirClrDefault(value: string, defaultColor: string): string {
    return this.fun.getDirClrDefault(value, defaultColor);
  }

  trackByFn(index: number, item: any): any {
    return item.dotsum.sid; // Use a unique identifier if possible
  }
}
