import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ISwitcherReportsAndOptions } from '../../../models/switcherReportsAndOption';
import { JsonDataService } from '../../../services/json-data.service';
import { Fun1Pipe } from '../../../pipes/switcher/fun1.pipe';
import { Fun2Pipe } from '../../../pipes/switcher/fun2.pipe';

import { ISwitcherResult } from '../../../models/switcherResult';

@Component({
  selector: 'app-switch-other-choices',
  templateUrl: './switch-other-choices.component.html',
  styleUrls: ['./switch-other-choices.component.css'],
  // styleUrl: './switch-other-choices.component.css',
  standalone: true,
  imports: [CommonModule, Fun1Pipe, Fun2Pipe],
})
export class SwitchOtherChoicesComponent implements OnInit, AfterViewChecked {
  @Input() ID_CHOICE_VALUE!: string | undefined;
  @Input() ID_INPUT_STRING!: string | undefined;

  @Input() reportData!: ISwitcherResult;

  switcherReportsAndOptions: ISwitcherReportsAndOptions[] = [];
  id: number | undefined;


  constructor(private cdr: ChangeDetectorRef, private serv: JsonDataService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.fetchGetSwitcherReportandOptions();
    }, 0);
  }

  ngAfterViewChecked(): void {}

  fetchGetSwitcherReportandOptions() {
    this.serv
      .getSwitcherReportandOptionsData2()
      .subscribe((res: ISwitcherReportsAndOptions[]) => {
        console.log('the other choices are : ', res);
        this.switcherReportsAndOptions = res;
      });
  }

  // // Method to count the number of choices
  // getNumberOfChoices(): number {
  //   const choices = this.switcherReportsAndOptions | fun1 : this.ID_CHOICE_VALUE;
  //   return choices ? Object.keys(choices).length : 0;
  // }
}
