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
import { IReturn_risk } from 'src/app/models/pp/risk';
import { IRisk_Data_Datum, IRiskPopup } from 'src/app/models/pp/RiskPopup';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';
import { LineGraphComponent } from '../../graph/line-graph/line-graph.component';

@Component({
  selector: 'app-risk-adj-returns',
  templateUrl: './risk-adj-returns.component.html',
  styleUrls: ['./risk-adj-returns.component.css'],
  standalone: true,
  imports: [CommonModule, RoundOffPipe, TwoCommasPipe, LineGraphComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RiskAdjReturnsComponent implements OnInit {
  riskPopup_data: { [key: string]: IRisk_Data_Datum } | undefined;

  constructor(
    public fun: PpFunctionsService,
    private serv: GetPersonalPFService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fetch();
  }

  fetch() {
    this.serv.getRiskPopup().subscribe((res: IRiskPopup) => {
      this.riskPopup_data = res.data;
      console.log('the riskPopup vol is : ', this.riskPopup_data);
      this.cdr.detectChanges(); // Trigger change detection
    });
  }

  @Input() return_risk: IReturn_risk | undefined; //props
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

      if (this.riskPopup_data!) {
        this.sendElement.emit(clonedElement);
        this.sendClick_State.emit(true);
        this.send_head.emit(this.HEAD);
        console.log('hehehheheh');
        // console.log('the head is : ', this.HEAD);
      }
    }
  }
}
