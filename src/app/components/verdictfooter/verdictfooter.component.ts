import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-verdictfooter',
  standalone: true,
  imports: [
CommonModule
  ],
  templateUrl: './verdictfooter.component.html',
  styleUrls: ['./verdictfooter.component.css']
  // styleUrl: './verdictfooter.component.css'
})
export class VerdictfooterComponent {


  stockLetters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  getStockLink(letter: string): string {
    return `/stocks-analysis/getstocksbyname?n=${letter}`;
  }

}
