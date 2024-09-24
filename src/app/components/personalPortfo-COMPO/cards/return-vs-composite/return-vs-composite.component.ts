import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  ICompareReturnPopup,
  ICompareReturnPopup_data,
} from 'src/app/models/pp/compareReturnPopup';
import { IRetcompo, IScorecard } from 'src/app/models/pp/return';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';

@Component({
  selector: 'app-return-vs-composite',
  templateUrl: './return-vs-composite.component.html',
  styleUrls: ['./return-vs-composite.component.css'],
  standalone: true,
  imports: [CommonModule, RoundOffPipe, TwoCommasPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReturnVsCompositeComponent implements OnInit {
  constructor(
    private serv: GetPersonalPFService,
    public fun: PpFunctionsService,
    private cdr: ChangeDetectorRef
  ) {}

  @Input() data_retcompo: IRetcompo | undefined;
  @Input() data_scorecard: IScorecard | undefined;

  compare_return_data: ICompareReturnPopup_data | undefined;

  @Input() HEAD: string | undefined; //props
  @Input() SHOW_BUTTON: Boolean = true;

  @ViewChild('childDiv') childDiv: ElementRef<HTMLDivElement> | undefined;
  @Output() sendElement = new EventEmitter<HTMLDivElement>();
  @Output() sendClick_State = new EventEmitter<boolean>(); //for input value
  @Output() send_head = new EventEmitter<string>(); //for

  clonedElement: HTMLDivElement | undefined;

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.serv.getCompareReturn().subscribe((res: ICompareReturnPopup) => {
      this.compare_return_data = res.data;
      console.log('the compare return is : , ', this.compare_return_data);
      this.cdr.detectChanges(); // Trigger change detection
    });
  }

  sendToParent() {
    // if(!this.compare_return_data){
    // this.fetchData();
    // }

    if (this.childDiv) {
      console.log('clicked');

      // Clone the element to avoid moving it
      this.clonedElement = this.childDiv.nativeElement.cloneNode(
        true
      ) as HTMLDivElement;
      console.log('Sending cloned element:', this.clonedElement);

      if (this.compare_return_data!) {
        this.sendElement.emit(this.clonedElement);
        this.sendClick_State.emit(true);
        this.send_head.emit(this.HEAD);
      }

      console.log('the head is : ', this.HEAD);
    }

    // this.cdr.detectChanges(); // Trigger change detection
  }

  getPeriods(categoryData: { [period: string]: any }): string[] {
    return Object.keys(categoryData);
  }
}
