  import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    OnInit,
    Output,
    ViewChild,
  } from '@angular/core';

  import { ChangeDetectorRef } from '@angular/core';
  import { IOverall_Data } from 'src/app/models/pp/overall';
  import { IQvfl_Data } from 'src/app/models/pp/qvfl';
  import { IHoldingsData } from 'src/app/models/table/holding';
  import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
  import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';

  import { FormBuilder, FormGroup } from '@angular/forms';
  import { ItaxHistroyPopup_data } from 'src/app/models/pp/taxHistoryPopup';

  interface TaxHistory {
    fy: string;
    label: string;
  }

  @Component({
    selector: 'app-stocker-investments',
    templateUrl: './stocker-investments.component.html',
    styleUrls: ['./stocker-investments.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class StockerInvestmentsComponent {


    component2Loaded = true;
    component3Loaded = false;
    // Add flags for other components

    loadComponent2() {
      this.component2Loaded = true;
    }

    loadComponent3() {
      this.component3Loaded = true;
    }


  taxHistory_data: any | undefined;
  // recive tax data
  receiveTaxPopupData(hello: ItaxHistroyPopup_data) {
    console.log('hello Tax histroy data : ', hello);
    this.taxHistory_data = hello;
    console.log(this.taxHistory_data.total[this.year]);

  }

  year = '2016-17';
  sendClick(str: string) {
    console.log('sendClick ', str);
    this.year = str;
  }

  overallData: IOverall_Data | undefined;
  holdingData: IHoldingsData | undefined;
  qvflData: IQvfl_Data | undefined;

  ngOnInit() {}

  constructor(
    private serv: GetPersonalPFService,
    public fun: PpFunctionsService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) {}

  @ViewChild('element1') element1!: ElementRef;
  @ViewChild('element2') element2!: ElementRef;
  @ViewChild('element3') element3!: ElementRef;
  @ViewChild('element4') element4!: ElementRef;
  @ViewChild('element5') element5!: ElementRef;
  @ViewChild('element6') element6!: ElementRef;
  @ViewChild('element7') element7!: ElementRef;
  @ViewChild('element8') element8!: ElementRef;
  @ViewChild('element9') element9!: ElementRef;
  @ViewChild('element10') element10!: ElementRef;
  TYPE = 'Tracker';

  // List of items to display on navbar buttons
  items: any = [
    'Tracker',
    'Overall Analysis',
    'Returns',
    'Risk',
    'Liquidity',
    'Diversification',
    'Quality',
    'Valuation',
    'Financial Trend',
    'Tax',
  ];

  ngAfterViewInit() {}

  @ViewChild('parentContainer', { static: false })
  parentContainer!: ElementRef<HTMLDivElement>;

  click_state: boolean = false;
  getHead: string | undefined;

  receiveElement(element: HTMLDivElement) {
    console.log('Received element', element);
    // Use the ViewChild reference to append the element
    setTimeout(() => {
      if (this.parentContainer) {
        console.log('append');
        this.parentContainer.nativeElement.appendChild(element);
      }
    }, 0);
  }
  receiveClickState(state: boolean) {
    this.click_state = state;
  }

  receiveHead(str: string) {
    this.getHead = str;
  }

  loadingState: boolean = false;
  receiveLoadingState(state: boolean) {
    this.loadingState = state;
  }

  TO_SHOW: Boolean = false;
  showMore(): void {
    this.TO_SHOW = true;
  }

  onClick(item: string) {
    if (item !== 'Tracker') {
      this.TO_SHOW = true;
    }
    this.TYPE = item;
    console.log(this.TYPE);
    setTimeout(() => {
      this.scrollToElement(item);
    }, 0);
  }

  scrollToElement(item: string) {
    const elementId = this.getElementId(item);
    const element = document.getElementById(elementId);

    console.log('Element ID:', elementId);
    console.log('Element:', element);

    if (element) {
      this.cdr.detectChanges();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private getElementId(item: string): string {
    switch (item) {
      case 'Tracker':
        return 'element1';
      case 'Overall Analysis':
        return 'element2';
      case 'Returns':
        return 'element3';
      case 'Risk':
        return 'element4';
      case 'Liquidity':
        return 'element5';
      case 'Diversification':
        return 'element6';
      case 'Quality':
        return 'element7';
      case 'Valuation':
        return 'element8';
      case 'Financial Trend':
        return 'element9';
      case 'Tax':
        return 'element10';
      default:
        return '';
    }
  }

  recievedDataEvent(str: string) {
    this.scrollToElement(str);
  }

  recieveData(data: IOverall_Data) {
    this.overallData = data;
  }

  recieve_HoldingData(data: IHoldingsData) {
    this.holdingData = data;
  }

  recieve_QvflData(data: IQvfl_Data) {
    this.qvflData = data;
  }
}
