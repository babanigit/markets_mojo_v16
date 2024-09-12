import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';

@Component({
  selector: 'app-overall-portfolio-analysis',
  templateUrl: './overall-portfolio-analysis.component.html',
  styleUrls: ['./overall-portfolio-analysis.component.css'],
  standalone:true,
  imports: [CommonModule, RoundOffPipe, TwoCommasPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverallPortfolioAnalysisComponent implements OnInit {
  @Input() DATA: any; //props
  @Input() HEAD!: string; //props
  // show button
  @Input() SHOW_BUTTON: Boolean = true;

  constructor(private fun: PpFunctionsService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log( "DATA is : ", this.DATA)
  }

  isCollapseTodayContri: boolean = true;

  // Method to get class by color
  getClassByColor(color: string): string {
    console.log('hello');
    // return 'green';
    return this.fun.getClassbyClr(color);
  }

  // Method to get direction color default
  getDirClrDefault(value: string, defaultColor: string): string {
    // console.log('hello');
    return this.fun.getDirClrDefault(value, defaultColor);
  }

  trackByFn(index: number, item: any): any {
    return item.dotsum.sid; // Use a unique identifier if possible
  }
}
