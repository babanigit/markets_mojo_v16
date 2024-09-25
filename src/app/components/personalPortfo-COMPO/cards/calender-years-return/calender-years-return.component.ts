import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { NewsComponent } from '../news/news.component';
import { ICalendar_data } from 'src/app/models/pp/return';
import { BarGraphComponent } from '../../graph/bar-graph/bar-graph.component';
import { OrderObjectByPipe } from 'src/app/pipes/pp/orderObjectBy/order-object-by.pipe';

@Component({
  selector: 'app-calender-years-return',
  templateUrl: './calender-years-return.component.html',
  styleUrls: ['./calender-years-return.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    TwoCommasPipe,
    RoundOffPipe,
    NewsComponent,
    BarGraphComponent,
    OrderObjectByPipe
  ],
})
export class CalenderYearsReturnComponent {
  @Input() data_calender: ICalendar_data | undefined; //props
  @Input() HEAD: string | undefined; //props
  @Input() SHOW_BUTTON: Boolean = true;

  @ViewChild('childDiv') childDiv: ElementRef<HTMLDivElement> | undefined;
  @Output() sendElement = new EventEmitter<HTMLDivElement>();
  @Output() sendClick_State = new EventEmitter<boolean>(); //for input value
  @Output() send_head = new EventEmitter<string>(); //for

  sendToParent() {
    if (this.childDiv) {
      console.log('clicked');

      // Clone the element to avoid moving it
      const clonedElement = this.childDiv.nativeElement.cloneNode(
        true
      ) as HTMLDivElement;
      console.log('Sending cloned element:', clonedElement);

      // in this the element get disapper
      // this.sendElement.emit(this.childDiv.nativeElement);

      this.sendElement.emit(clonedElement);
      this.sendClick_State.emit(true);
      this.send_head.emit(this.HEAD);
      console.log('the head is : ', this.HEAD);
    }
  }
}
