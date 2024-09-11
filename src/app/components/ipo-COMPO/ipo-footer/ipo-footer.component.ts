import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DemoComponent } from '../../demos/demo/demo.component';


@Component({
  selector: 'app-ipo-footer',
  templateUrl: './ipo-footer.component.html',
  styleUrls: ['./ipo-footer.component.css'],
  // styleUrl: './ipo-footer.component.css',
  standalone: true,
  imports: [CommonModule, DemoComponent],
  encapsulation: ViewEncapsulation.None // Disable encapsulation
})
export class IpoFooterComponent implements OnInit {
  images = [
    'https://i.marketsmojo.com/logo/axis-securities-logo.png',
    'https://i.marketsmojo.com/logo/smc-logo.png',
    'https://i.marketsmojo.com/logo/gj-logo.png',
    'https://i.marketsmojo.com/logo/angel-logo-v1.png',
    'https://i.marketsmojo.com/logo/integrated-logo-v1.png'
  ];

  constructor() {}

  ngOnInit(): void {}

  stockLetters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  getStockLink(letter: string): string {
    return `/stocks-analysis/getstocksbyname?n=${letter}`;
  }

  links = [
    { text: 'Careers', url: '/mojo/career' },
    { text: 'Contact Us', url: '/mojo/feedback' },
    { text: 'Disclaimer', url: '/mojo/disclaimer' },
    { text: 'Privacy Policy', url: '/mojo/privacypolicy' },
    { text: 'Refund Policy', url: '/mojo/refundpolicy' },
    { text: 'Terms and Conditions', url: '/mojo/termsofuse' },
    { text: 'Process Disclosure', url: '/mojo/processdisclosure' },
    { text: 'Regulatory Information', url: '/mojo/complaints' }
  ];
}
