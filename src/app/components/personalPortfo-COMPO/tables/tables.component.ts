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

// , AfterViewInit
export class TablesComponent implements OnInit {

  return=[
    {
      title: 'M1 ',
      code: 'M1',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    // {
    //   title: 'Net Sales / Int Earned (Rs Cr) ',
    //   code: 'netsale',
    //   hold: '',
    //   defaultValue: '-',
    //   no_extend: true,
    //   footer: false,
    // },
    // {
    //   title: 'Net Sales / Int Earned (Rs Cr) ',
    //   code: 'netsale',
    //   hold: '',
    //   defaultValue: '-',
    //   no_extend: true,
    //   footer: false,
    // },
    // {
    //   title: 'Net Sales / Int Earned (Rs Cr) ',
    //   code: 'netsale',
    //   hold: '',
    //   defaultValue: '-',
    //   no_extend: true,
    //   footer: false,
    // },
    // {
    //   title: 'Net Sales / Int Earned (Rs Cr) ',
    //   code: 'netsale',
    //   hold: '',
    //   defaultValue: '-',
    //   no_extend: true,
    //   footer: false,
    // },
    // {
    //   title: 'Net Sales / Int Earned (Rs Cr) ',
    //   code: 'netsale',
    //   hold: '',
    //   defaultValue: '-',
    //   no_extend: true,
    //   footer: false,
    // },
    // {
    //   title: 'Net Sales / Int Earned (Rs Cr) ',
    //   code: 'netsale',
    //   hold: '',
    //   defaultValue: '-',
    //   no_extend: true,
    //   footer: false,
    // },
    // {
    //   title: 'Net Sales / Int Earned (Rs Cr) ',
    //   code: 'netsale',
    //   hold: '',
    //   defaultValue: '-',
    //   no_extend: true,
    //   footer: false,
    // },
    // {
    //   title: 'Net Sales / Int Earned (Rs Cr) ',
    //   code: 'netsale',
    //   hold: '',
    //   defaultValue: '-',
    //   no_extend: true,
    //   footer: false,
    // },


  ]

  solo = [

    //financials
    {
      title: 'Net Sales / Int Earned (Rs Cr) ',
      code: 'netsale',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Other Income (Rs Cr) ',
      code: 'othinc',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Operating Profit (Rs Cr) ',
      code: 'opprof',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Interest Paid (Rs Cr) ',
      code: 'intpaid',
      hold: '%',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Tax Ratio (%)',
      code: 'tax',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Net Profit (Rs Cr) ',
      code: 'netprof',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'EPS (Rs)',
      code: 'eps',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },

    // ratios
    {
      title: 'Price to Book (P/BV)',
      code: 'pbv',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Return on Equity (ROE)',
      code: 'roe',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Debt to Equity Ratio',
      code: 'debeq',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Dividend Yield (%)',
      code: 'divy',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    // risk
    {
      title: 'volatility',
      code: 'volatility',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    {
      title: ' Risk Adj Returns',
      code: 'riskadj',
      hold: '',
      defaultValue: '0.00',
      no_extend: true,
      footer: false,
    },

    {
      title: 'Beta (Adjusted)',
      code: 'beta',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    {
      title: 'Value At Risk',
      code: 'riskval',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    // price
    {
      title: "Day's High",
      code: 'dh',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: true,
    },
    {
      title: "Day's Low",
      code: 'dl',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: true,
    },

    // contribution
    {
      title: 'Unrealized Gain Contribution',
      code: 'unrgaincontri',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: true,
    },
    {
      title: 'Portfolio Weight',
      code: 'pwt',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    //dividend
    {
      title: 'Dividend Received',
      code: 'div',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    // tax
    {
      title: '31 Jan 2018',
      code: 'jan31price',
      hold: '',
      defaultValue: '0.00',
      no_extend: false,
      footer: false,
    },
    {
      title: ' Avg Holding (Yrs)',
      code: 'avghold',
      hold: '',
      defaultValue: '0.00',
      no_extend: false,
      footer: true,
    },
    {
      title: ' ST Tax (If Sold)',
      code: 'sttax',
      hold: '',
      defaultValue: '-',
      no_extend: false,
      footer: true,
    },
    {
      title: 'Days left for ST Tax',
      code: 'dayleft',
      hold: '',
      defaultValue: 'Tax Free',
      no_extend: false,
      footer: false,
    },
    {
      title: ' LT Tax (If Sold)',
      code: 'lttax',
      hold: '',
      defaultValue: '-',
      no_extend: false,
      footer: true,
    },
    {
      title: ' Post Tax Value',
      code: 'ptv',
      hold: '',
      defaultValue: '-',
      no_extend: false,
      footer: true,
    },
  ];

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
    | 'RETURNS'
    | 'RESULTS'
    | 'TOTAL_RETURNS' = 'HOLDING';

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
    'RETURNS',
    'RESULTS',
    'TOTAL_RETURNS',
  ];

  private fetchStocks(
    type:
      | 'OVERVIEW'
      | 'HOLDING'
      | 'RISK'
      | 'LIQUIDITY'
      | 'TAX'
      | 'RATIOS'
      | 'FINANCIALS'
      | 'RETURNS'
      | 'RESULTS'
      | 'TOTAL_RETURNS'
  ) {

    // if (this.dataCache[type]) {
    //   // console.log('the data cache is : ', this.dataCache[type]);
    //   this.updateStocks(type);
    //   return;
    // }

    this.serv.getOverviewStocks(type).subscribe({
      next: (response) => {


        let elements;
        if (type === 'RISK' || type === 'RATIOS' || type === 'FINANCIALS' || type === 'RETURNS' ) {
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
      | 'LIQUIDITY'
      | 'TAX'
      | 'RATIOS'
      | 'FINANCIALS'
      | 'RETURNS'
      | 'RESULTS'
      | 'TOTAL_RETURNS'
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
      | 'LIQUIDITY'
      | 'TAX'
      | 'RATIOS'
      | 'FINANCIALS'
      | 'RETURNS'
      | 'RESULTS'
      | 'TOTAL_RETURNS'
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
          // 'unrgain',
          'f_txt',
          'tech_txt',
          'pwt',
          'lval',
        ];
        break;
      case 'RISK':
        this.displayedColumns = [
          'short',
          'score',
          'cmp',
          'mcap',
          'Y1',
          'volatility',
          'riskadj',
          'beta',
          'riskval',
        ];
        break;
      case 'LIQUIDITY':
        this.displayedColumns = [
          'short',
          'score',
          'cmp',
          // 'q_txt',
          'qty',
          'd5avgvol',
          'd5delivol',
          'risk',
          'lval',
        ];
        break;
      case 'TAX':
        this.displayedColumns = [
          'short',
          'score',
          'cmp',
          'jan31price',
          'qty',
          'avghold',
          'sttax',
          'dayleft',
          'lttax',
          'lval',
          'ptv',
        ];
        break;
      case 'RATIOS':
        this.displayedColumns = [
          'short',
          'score',
          'cmp',
          'mcap',
          'divy',
          'pe',
          'roe',
          'debeq',
          'pbv',
        ];
        break;
      case 'FINANCIALS':
        this.displayedColumns = [
          'short',
          'score',
          'cmp',
          'year',
          'netsale',
          'othinc',
          'opprof',
          'intpaid',
          'tax',
          'netprof',
          'eps',
        ];
        break;

      case 'RETURNS':
        this.displayedColumns = ['short', 'score', 'cmp'
          // , 'D1'
        ];
        break;
      case 'RESULTS':
        this.displayedColumns = ['short', 'score', 'cmp'];
        break;
      case 'TOTAL_RETURNS':
        this.displayedColumns = ['short', 'score', 'cmp'];
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
      | 'LIQUIDITY'
      | 'TAX'
      | 'RATIOS'
      | 'FINANCIALS'
      | 'RETURNS'
      | 'RESULTS'
      | 'TOTAL_RETURNS'
  ): void {
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

  private sortData(sortState: Sort) {

    console.log('sortData called ...', sortState);

    // Create a copy of the data to sort
    const data = this.dataSource2.data.slice();

    // If no sorting is active or the direction is empty, return the unsorted data
    if (!sortState.active || sortState.direction === '') {
      this.dataSource2.data = data;
      return;
    }

    const isAsc = sortState.direction === 'asc';

    // Sort the data based on the dynamic property
    this.dataSource2.data = data.sort((a, b) => {
      let valueA: number | string;
      let valueB: number | string;

      // for dotsum elements
      valueA = +a.dotsum[sortState.active] || 0;
      valueB = +b.dotsum[sortState.active] || 0;

      // Split the property path (e.g., 'Y1.val')
      const [propertyPath] = sortState.active.split('.');

      // if RISK
      if (this.TYPE === 'RISK') {
        if (sortState.active === 'Y1') {
          valueA = a[propertyPath]?.val;
          valueB = b[propertyPath]?.val;
        }
      }

      if ( (this.TYPE !== 'RISK') && (sortState.active === 'D1' || sortState.active === 'Y1')) {
        valueA = a.returns?.[sortState.active]?.val;
        valueB = b.returns?.[sortState.active]?.val;
      } else if (a.dotsum && b.dotsum) {
        valueA = +a.dotsum[sortState.active] || 0;
        valueB = +b.dotsum[sortState.active] || 0;
      } else {
        // Default case
        valueA = a[sortState.active];
        valueB = b[sortState.active];
      }

      // Convert to numbers if possible, else keep as strings
      const numA = isNaN(+valueA) ? valueA : +valueA;
      const numB = isNaN(+valueB) ? valueB : +valueB;

      return this.compare(numA, numB, isAsc);
    });
  }

  // Utility method to compare values
  private compare(
    valueA: number | string,
    valueB: number | string,
    isAsc: boolean
  ): number {
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return isAsc
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }
    // For numbers or mixed comparisons
    return isAsc
      ? (valueA as number) - (valueB as number)
      : (valueB as number) - (valueA as number);
  }

  // specially for latest price cause it has two data inside and angular material dot suppport this.
  sortBy(property: string) {
    console.log('sortBy clicked :- ', property);
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

  getBgColor(str: string): string {
    // Check for specific string values
    if (str === 'green' || str === 'Green') {
      return '#ccffcc';
    } else if (str === 'red' || str === 'Red') {
      return '#ffcccc';
    } else if (str === 'orange' || str === 'Orange') {
      return '#ffcc99';
    }

    // Attempt to parse the string as a number
    const value = parseFloat(str);

    if (isNaN(value)) {
      return '#e0e0e0';
    }

    if (value === 0) {
      return '#ffffff';
    }

    // Colors for negative and positive values
    return value < 0 ? '#ffcccc' : '#ccffcc';
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

  // get total of the coloums
  getTotal(propertyPath: string): number {
    let total = 0;
    // Function to access nested properties
    const getNestedValue = (obj: any, path: string) => {
      return path.split('.').reduce((acc, key) => acc && acc[key], obj);
    };

    for (let i = 0; i < this.dataSource2.data.length; i++) {
      const value = getNestedValue(this.dataSource2.data[i], propertyPath);

      let val = Number(value) || 0;
      if (val === -999999) {
        val = 0;
      }
      total += val; // Convert the value to a number and default to 0 if NaN
    }

    return total;
  }

  // Method to format number with commas
  formatNumberWithCommas(value: string | number): string {
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;

    if (numericValue === -999999) {
      return '-';
    }

    if (isNaN(numericValue)) {
      return '';
    }
    return new Intl.NumberFormat('en-US').format(numericValue);
  }

  getExpandedHeight(element: any): number {
    if (element.details && element.details.length > 0) {
      let height = 80;
      if (this.TYPE === 'TAX') {
        height = 60;
      }
      return element.details.length * height;
    }
    return 0;
  }
}
