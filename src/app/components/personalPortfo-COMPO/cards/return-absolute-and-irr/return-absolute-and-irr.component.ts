import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { I_Ixrr_Data } from 'src/app/models/pp/ixrr';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { DirClrDefaultPipe } from "../../../../pipes/dir-clr-default.pipe";

@Component({
  selector: 'app-return-absolute-and-irr',
  templateUrl: './return-absolute-and-irr.component.html',
  styleUrls: ['./return-absolute-and-irr.component.css'],
  standalone: true,
  imports: [CommonModule, RoundOffPipe, TwoCommasPipe, DirClrDefaultPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReturnAbsoluteAndIrrComponent {
  constructor(public fun: PpFunctionsService) { }

  @Input() ixrrData: I_Ixrr_Data | undefined;
  @Input() HEAD: string | undefined;
  @Input() SHOW_BUTTON: Boolean = true;

  @ViewChild('childDiv') childDiv: ElementRef<HTMLDivElement> | undefined;
  @Output() sendElement = new EventEmitter<HTMLDivElement>();
  @Output() sendClick_State = new EventEmitter<boolean>(); //for input value
  @Output() send_head = new EventEmitter<string>(); //for

  sendToParent() {
    if (this.childDiv && this.ixrrData) {
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
