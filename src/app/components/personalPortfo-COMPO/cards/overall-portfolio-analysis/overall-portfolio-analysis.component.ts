import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IOverall_Data } from 'src/app/models/pp/overall';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { DirClrDefaultPipe } from "../../../../pipes/dir-clr-default.pipe";

@Component({
  selector: 'app-overall-portfolio-analysis',
  templateUrl: './overall-portfolio-analysis.component.html',
  styleUrls: ['./overall-portfolio-analysis.component.css'],
  standalone: true,
  imports: [CommonModule, RoundOffPipe, TwoCommasPipe, DirClrDefaultPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverallPortfolioAnalysisComponent implements OnChanges {

  @Input() DATA: IOverall_Data | undefined; //props
  @Input() HEAD: string | undefined; //props
  // show button
  @Input() SHOW_BUTTON: Boolean = true;

  // emit
  @Output() send_element = new EventEmitter<string>(); //for input value

  constructor(public fun: PpFunctionsService) {}

  jumpToElement(str:string) {
    this.send_element.emit(str)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['DATA']) {
      // console.log('DATA changed:', changes['DATA'].currentValue);
    }
  }

  isCollapse: boolean = true;

  // Method to get class by color
  getClassByColor(color: string): string {
    return this.fun.getClassbyClr(color);
  }

  // Method to get direction color default
  
  trackByFn(index: number, item: any): any {
    return item.dotsum.sid; // Use a unique identifier if possible
  }
}
