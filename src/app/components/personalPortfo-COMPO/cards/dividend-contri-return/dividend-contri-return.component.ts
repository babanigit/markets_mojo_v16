import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  IDivContriPopup,
  IDivContriPopup_data,
} from 'src/app/models/pp/divContriPopup';
import { IDivcontri } from 'src/app/models/pp/return';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';

@Component({
  selector: 'app-dividend-contri-return',
  templateUrl: './dividend-contri-return.component.html',
  styleUrls: ['./dividend-contri-return.component.css'],
  standalone: true,
  imports: [CommonModule, RoundOffPipe, TwoCommasPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividendContriReturnComponent {
  constructor(
    public fun: PpFunctionsService,
    private serv: GetPersonalPFService,
    private cdr: ChangeDetectorRef
  ) {}

  divContriPopup_data: IDivContriPopup_data[] | undefined;

  @Input() data_divcontri: IDivcontri | undefined; //props
  @Input() HEAD: string | undefined; //props
  @Input() SHOW_BUTTON: Boolean = true;

  @ViewChild('childDiv') childDiv: ElementRef<HTMLDivElement> | undefined;
  @Output() sendElement = new EventEmitter<HTMLDivElement>();
  @Output() sendClick_State = new EventEmitter<boolean>(); //for input value
  @Output() send_head = new EventEmitter<string>(); //for

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.serv.getDivContri().subscribe((res: IDivContriPopup) => {
      this.divContriPopup_data = res.data;
      console.log('the divcontripopup is : ', this.divContriPopup_data);
      this.cdr.detectChanges(); // Trigger change detection
    });
  }

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

      if (this.divContriPopup_data!) {
        this.sendElement.emit(clonedElement);
        this.sendClick_State.emit(true);
        this.send_head.emit(this.HEAD);
        console.log('the head is : ', this.HEAD);
      }
    }
  }
}
