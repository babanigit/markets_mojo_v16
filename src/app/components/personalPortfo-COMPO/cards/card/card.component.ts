import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';

import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { ModelOpenComponent } from '../../model-open/model-open.component';
import { DemoComponent } from 'src/app/components/demos/demo/demo.component';
import { IContri_overall_today, IDrags_overall_today } from 'src/app/models/pp/today';
// import { ModalModule } from 'ngx-bootstrap/modal';
// import { NgbModal, NgbModalRef, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RoundOffPipe,
    TwoCommasPipe,
    ModelOpenComponent,
    DemoComponent,
    // NgbModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit, OnChanges {
  @Input() DATA: IContri_overall_today[] | IDrags_overall_today[] | any; //props
  @Input() HEAD!: string; //props
  @Input() SHOW_BUTTON: Boolean = true;
  isCollapse: boolean = true;

  // modalRef!: NgbModalRef;

  constructor(
    private fun: PpFunctionsService,
    // private modalService: NgbModal
  ) {}

  @ViewChild('childDiv') childDiv: ElementRef<HTMLDivElement> | undefined;
  @Output() sendElement = new EventEmitter<HTMLDivElement>();
  @Output() sendClick_State = new EventEmitter<boolean>(); //for input value
  @Output() send_head = new EventEmitter<string>(); //for

  sendToParent() {
    if (this.childDiv) {
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
    }
  }

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


  // Method to get class by color
  getClassByColor(color: string): string {
    // console.log('hello');
    // return 'green';
    return this.fun.getClassbyClr(color);
  }

  // Method to get direction color default
  getDirClrDefault(value: string | number, defaultColor: string): string {
    // console.log('hello');
    return this.fun.getDirClrDefault(value, defaultColor);
  }

  trackByFn(index: number, item: any): any {
    return item.dotsum.sid; // Use a unique identifier if possible
  }

  openChart() {
    console.log('hello ');
    // this.modalRef = this.modalService.open(CardComponent, {
    //   size: 'sm',
    //   centered: true,
    //   backdrop: 'static',
    //   windowClass: 'productIconPopup-modal',
    // });
    // You can pass data via the component instance
    // this.modalRef.componentInstance.product_icon_list = this.product_icon_list;
  }
}
