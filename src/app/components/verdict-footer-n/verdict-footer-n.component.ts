import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-verdict-footer-n',
  templateUrl: './verdict-footer-n.component.html',
  // styleUrls: ['./verdict-footer-n.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class VerdictFooterNComponent {
  stockLetters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  getStockLink(letter: string): string {
    return `/stocks-analysis/getstocksbyname?n=${letter}`;
  }
}
