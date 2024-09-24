import { CommonModule, NgIf } from '@angular/common';
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
  IDiversifyStocks,
  IDiversifyStocks_Data,
} from 'src/app/models/pp/diversifyStocks';
import { I_News, IMcapClass_Data } from 'src/app/models/pp/today';
import { OrderObjectByPipe } from 'src/app/pipes/pp/orderObjectBy/order-object-by.pipe';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';

@Component({
  selector: 'app-mcap-breakup',
  templateUrl: './mcap-breakup.component.html',
  styleUrls: ['./mcap-breakup.component.css'],
  standalone: true,
  imports: [CommonModule, RoundOffPipe, TwoCommasPipe, OrderObjectByPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class McapBreakupComponent implements OnInit {
  @Input() data_mcap: IMcapClass_Data | undefined; //props
  @Input() HEAD: string | undefined; //props
  @Input() SHOW_BUTTON: Boolean = true;

  @ViewChild('childDiv') childDiv: ElementRef<HTMLDivElement> | undefined;

  @Output() sendElement = new EventEmitter<HTMLDivElement>();
  @Output() sendClick_State = new EventEmitter<boolean>(); //for input value
  @Output() send_head = new EventEmitter<string>(); //for

  diversify_Data: IDiversifyStocks_Data | undefined;

  constructor(
    private serv: GetPersonalPFService,
    public fun: PpFunctionsService,
    private cdr: ChangeDetectorRef

  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.serv.getDiversifyStocks().subscribe((res: IDiversifyStocks) => {
      this.diversify_Data = res.data;
      console.log('the data is : , ', this.diversify_Data);
      this.cdr.detectChanges(); // Trigger change detection
    });
  }

  sendToParent() {
    console.log('clicked');
    if (this.childDiv) {
      // Clone the element to avoid moving it
      const clonedElement = this.childDiv.nativeElement.cloneNode(
        true
      ) as HTMLDivElement;
      console.log('Sending cloned element:', clonedElement);

      // in this the element get disapper
      // this.sendElement.emit(this.childDiv.nativeElement);

      // if(this.diversify_Data != undefined)
      // this.fetchData();

      if (this.diversify_Data!) {
        console.log('emited ...');
        this.sendElement.emit(clonedElement);
        this.sendClick_State.emit(true);
        this.send_head.emit(this.HEAD);
        // console.log('the head is : ', this.HEAD);
      }
    }
  }
}
