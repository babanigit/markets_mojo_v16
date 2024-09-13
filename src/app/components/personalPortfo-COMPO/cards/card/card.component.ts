import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IContri, IOverall_sub } from 'src/app/models/pp/overall';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';

import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [CommonModule, RoundOffPipe, TwoCommasPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit  ,OnChanges{

  @Input() DATA?: IContri[] | undefined; //props
  @Input() HEAD!: string; //props
  // show button
  @Input() SHOW_BUTTON: Boolean = true;

  constructor(private fun: PpFunctionsService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // console.log(this.HEAD, " = " , this.DATA)
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['DATA']) {
    //     console.log('DATA changed card: ', this.DATA);
    // }
    // if (changes['HEAD']) {
    //     console.log('HEAD changed card: ', this.HEAD);
    // }
}


  isCollapseTodayContri: boolean = true;

  // Method to get class by color
  getClassByColor(color: string): string {
    console.log('hello');
    // return 'green';
    return this.fun.getClassbyClr(color);
  }

  // Method to get direction color default
  getDirClrDefault(value: string| number, defaultColor: string): string {
    // console.log('hello');
    return this.fun.getDirClrDefault(value, defaultColor);
  }

  trackByFn(index: number, item: any): any {
    return item.dotsum.sid; // Use a unique identifier if possible
  }
}
