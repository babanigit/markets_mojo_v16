import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-stocker-investments',
  templateUrl: './stocker-investments.component.html',
  styleUrls: ['./stocker-investments.component.css'],
})
export class StockerInvestmentsComponent implements AfterViewInit {
  constructor(private cdr: ChangeDetectorRef) {}

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
}
