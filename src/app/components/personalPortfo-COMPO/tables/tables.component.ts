import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  inject,
  signal,
} from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import {
  // MatFooterCell,
  // MatFooterCellDef,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
// import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { GetPersonalPFService } from '../../../services/personal-portfolio/get-personal-pf.service';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { PopupComponent } from '../../others/popup/popup.component';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  standalone: true,
  imports: [
    MatSortModule,
    MatTableModule,

    // removed after v16

    // MatFooterCell,
    // MatFooterCellDef,
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    PopupComponent,
  ],
})
export class TablesComponent implements OnInit, AfterViewInit {
  // private _liveAnnouncer = inject(LiveAnnouncer);
  private serv = inject(GetPersonalPFService);

  displayedColumns: string[] = [];
  dataSource2 = new MatTableDataSource<any>([]);

  TOTAL_DATA: any;

  @ViewChild(MatSort) sort!: MatSort;

  // type
  TYPE:
    | 'OVERVIEW'
    | 'HOLDING'
    | 'PRICE'
    | 'CONTRIBUTION'
    | 'DIVIDEND'
    | 'MOJO'
    | 'RISK'
    | 'LIQUIDITY'
    | 'TAX'
    | 'RATIOS'
    | 'FINANCIALS'
    | 'RETURN'
    | 'RESULT'
    | 'TOTAL RETURNS' = 'HOLDING';

  private dataCache: { [key: string]: any[] | undefined } = {};

  ngOnInit() {
    this.getColums('HOLDING');
    this.fetchStocks('HOLDING');
  }

  ngAfterViewInit() {
    if (this.sort) {
      this.dataSource2.sort = this.sort;
      this.sort.sortChange.subscribe((sortState: Sort) => {
        // console.log('The sort state is:', sortState);
        if (sortState.active) {
          this.sortData(sortState);
        }
      });
    } else {
      console.error('MatSort is not available');
    }
  }

  // List of items to display on navbar buttons
  items: any = [
    'OVERVIEW',
    'HOLDING',
    'PRICE',
    'CONTRIBUTION',
    'DIVIDEND',
    'MOJO',
    'RISK',
    'LIQUIDITY',
    'TAX',
    'RATIOS',
    'FINANCIALS',
    'RETURN',
    'RESULT',
    'TOTAL RETURNS',
  ];

  private fetchStocks(type: 'OVERVIEW' | 'HOLDING' | 'RISK') {

    if (this.dataCache[type]) {
      // console.log('the data cache is : ', this.dataCache[type]);
      this.updateStocks(type);
      return;
    }

    this.serv.getOverviewStocks(type).subscribe({

      next: (response) => {
        let elements;
        if (type === 'RISK') {
          elements = Object.values(response.data);
        } else {
          elements = Object.values(response.data.list);
        }

        this.dataCache[type] = elements;
        this.updateStocks(type);
        console.log('Fetched data:', this.dataCache[type]);
      },
      error: (err) => {
        console.error('Failed to load data', err);
      },

    });
  }

  updateStocks(
    type:
      | 'OVERVIEW'
      | 'HOLDING'
      | 'PRICE'
      | 'CONTRIBUTION'
      | 'DIVIDEND'
      | 'RISK'
  ): void {
    this.dataSource2.data = this.dataCache[type] || [];
    // console.log('Updated data:', this.dataSource2);
  }

  getColums(
    type:
      | 'OVERVIEW'
      | 'HOLDING'
      | 'PRICE'
      | 'CONTRIBUTION'
      | 'DIVIDEND'
      | 'MOJO'
      | 'RISK'
  ): void {
    switch (type) {
      case 'OVERVIEW':
        this.displayedColumns = [
          'short',
          'score',
          'cmp_price',
          'vol',
          'unrgain',
          'tech_txt',
          'f_txt',
          'tusk',
        ];
        break;
      case 'HOLDING':
        this.displayedColumns = [
          'short',
          'score',
          'cmp',
          'iprice',
          'ival',
          'dgain',
          'unrgain',
          'lval',
        ];
        break;
      case 'PRICE':
        this.displayedColumns = [
          'short',
          'score',
          'cmp',
          'cvol',
          'dh',
          'dl',
          'wk52h',
          'wk52l',
          'ath',
          'atl',
        ];
        break;
      case 'CONTRIBUTION':
        this.displayedColumns = [
          'short',
          'score',
          'cmp',
          'mcap',
          'unrgain',
          'unrgaincontri',
          'pwt',
          'lval',
        ];
        break;
      case 'DIVIDEND':
        this.displayedColumns = [
          'short',
          'score',
          'cmp',
          'div',
          'unrgain',
          'tret',
          'lval',
        ];
        break;
      case 'MOJO':
        this.displayedColumns = [
          'short',
          'score',
          'cmp',
          'q_txt',
          'v_txt',
          'unrgain',
          'f_txt',
          'tech_txt',
          'pwt',
          'lval',
        ];
        break;
      case 'RISK':
        this.displayedColumns = ['short', 'score', 'cmp', 'mcap'];
        break;
    }
  }

  onClick(
    type:
      | 'OVERVIEW'
      | 'HOLDING'
      | 'PRICE'
      | 'CONTRIBUTION'
      | 'DIVIDEND'
      | 'MOJO'
      | 'RISK'
    // | 'LIQUIDITY'
    // | 'TAX'
    // | 'RATIOS'
    // | 'FINANCIALS'
    // | 'RETURN'
    // | 'RESULT'
    // | 'TOTAL RETURNS'
  ): void {
    // this.activeItem = type;

    this.TYPE = type;
    this.getColums(type);

    if (
      type === 'PRICE' ||
      type === 'CONTRIBUTION' ||
      type === 'DIVIDEND' ||
      type === 'MOJO'
    ) {
      type = 'HOLDING';
    }

    if (!this.dataCache[type]) {
      this.fetchStocks(type);
    } else {
      this.updateStocks(type);
    }
  }

  // announceSortChange(sortState: Sort) {
  //   if (sortState.direction) {
  //     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  //   } else {
  //     this._liveAnnouncer.announce('Sorting cleared');
  //   }
  // }

  private sortData(sortState: Sort) {
    const data = this.dataSource2.data.slice();
    if (!sortState.active || sortState.direction === '') {
      this.dataSource2.data = data;
      return;
    }

    const isAsc = sortState.direction === 'asc';

    this.dataSource2.data = data.sort((a, b) => {
      let valueA: number;
      let valueB: number;

      valueA = +a.dotsum[sortState.active] || 0;
      valueB = +b.dotsum[sortState.active] || 0;

      console.log(
        `Comparing ${valueA} with ${valueB} for column ${sortState.active}`
      );
      return compare(valueA, valueB, isAsc);
    });
  }

  // specially for latest price cause it has two data inside and angular material dot suppport this.
  sortBy(property: string) {
    const sortState: Sort = {
      active: property,
      direction: this.sort.direction === 'asc' ? 'desc' : 'asc',
    };
    this.sort.active = property;
    this.sort.direction = sortState.direction;

    this.dataSource2.data = this.dataSource2.data.sort((a, b) => {
      const isAsc = sortState.direction === 'asc';
      if (a[property] < b[property]) {
        return isAsc ? -1 : 1;
      }
      if (a[property] > b[property]) {
        return isAsc ? 1 : -1;
      }
      return 0;
    });

    // this.announceSortChange(sortState);
  }

  isSortActive(column: string): boolean {
    return this.sort?.active === column && this.sort?.direction !== '';
  }

  getSortIconClass(column: string): string {
    if (this.sort?.active === column) {
      return this.sort?.direction === 'asc' ? 'arrow_upward' : 'arrow_downward';
    }
    return '';
  }

  // get colors and bg colors
  getColor(listedgl: string): string {
    const value = parseFloat(listedgl);
    if (isNaN(value)) {
      return 'black'; // Fallback color if value is not a number
    }
    if (value === 0) {
      return ''; // Neutral color for 0
    }
    return isNaN(value) || value < 0 ? 'red' : 'green';
  }

  getBgColor(listedgl: string): string {
    const value = parseFloat(listedgl);
    if (isNaN(value)) {
      return '#e0e0e0'; // Fallback background color if value is not a number
    }
    if (value === 0) {
      return ''; // Neutral background color for 0
    }
    return value < 0 ? '#ffcccc' : '#ccffcc'; // Colors for negative and positive values
  }

  // mat-expansion-panel (expand element state)
  readonly panelOpenState = signal(false);
  expandedElement: any;
  togglePanel(element: any) {
    // Toggle the panel
    if (this.expandedElement === element) {
      this.expandedElement = null;
    } else {
      this.expandedElement = element;
    }
  }

  // score containts

  // Method to extract color name from the input string
  extractColor(input: string): string {
    let value;
    // Check if the input string ends with '-tag' and remove it
    if (input.endsWith('-tag')) {
      value = input.substring(0, input.length - 4); // Remove the last 4 characters ('-tag')

      if (value === 'som') return 'green';
      else {
        return value;
      }
    }

    return input; // Return the original input if '-tag' is not found
  }

  // toggle popup
  showPopup = false;

  togglePopup(): void {
    this.showPopup = !this.showPopup;
  }

  closePopup(): void {
    this.showPopup = false;
  }

  // trial
  getTotal(propertyPath: string): number {
    let total = 0;

    // Function to access nested properties
    const getNestedValue = (obj: any, path: string) => {
      return path.split('.').reduce((acc, key) => acc && acc[key], obj);
    };

    for (let i = 0; i < this.dataSource2.data.length; i++) {
      const value = getNestedValue(this.dataSource2.data[i], propertyPath);
      total += Number(value) || 0; // Convert the value to a number and default to 0 if NaN
    }

    return total;
  }

  getFooter() {
    console.log(this.dataSource2.data);
    // hello = this.dataSource2.
  }
}

// Utility function to compare numbers
function compare(a: number, b: number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
