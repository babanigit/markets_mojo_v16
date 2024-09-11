import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  signal,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { GetPersonalPFService } from '../../../services/personal-portfolio/get-personal-pf.service';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { PopupComponent } from '../../others/popup/popup.component';
import { columns, IColumns } from './Columns';

import {
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';

type TableType =
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
  | 'TOTAL_RETURNS';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  standalone: true,
  imports: [
    MatSortModule,
    MatTableModule,
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    PopupComponent,

    ScrollingModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(CdkVirtualScrollViewport) viewport:
    | CdkVirtualScrollViewport
    | undefined;

  displayedColumns: string[] = [];
  // dataSource = new MatTableDataSource<any>([]);
  dataSource: MyDataSource;

  private dataCache: { [key in TableType]?: any[] } = {};
  col: IColumns = columns;
  TYPE: TableType = 'HOLDING';
  readonly NAVBAR_ITEMS: TableType[] = [
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
  readonly panelOpenState = signal(false);
  expandedElement: any;
  showPopup = false;

  constructor(
    private serv: GetPersonalPFService,
    private cdr: ChangeDetectorRef
  ) {
    this.dataSource = new MyDataSource();

  }

  ngOnInit() {
    this.getColumns('HOLDING');
    this.fetchStocks('HOLDING');
  }

  ngAfterViewInit() {
    if (this.sort) {
      this.dataSource.sort = this.sort;
      this.sort.sortChange.subscribe(this.sortData.bind(this));

      this.cdr.detectChanges();
    }
  }

  private fetchStocks(type: TableType) {
    if (this.dataCache[type]) {
      console.log('If dataCache : ', this.dataCache[type]);
      this.updateStocks(type);
      return;
    }

    if (
      type === 'PRICE' ||
      type === 'CONTRIBUTION' ||
      type === 'DIVIDEND' ||
      type === 'MOJO'
    ) {
      type = 'HOLDING';
    }

    this.serv.getOverviewStocks(type).subscribe({
      next: (response) => {
        const elements = ['RISK', 'RATIOS', 'FINANCIALS', 'RETURNS'].includes(
          type
        )
          ? Object.values(response.data)
          : Object.values(response.data.list);
        this.dataCache[type] = elements;
        this.updateStocks(type);
      },
      error: (err) => console.error('Failed to load data', err),
    });
  }

  private updateStocks(type: TableType): void {
    // this.dataSource.data = this.dataCache[type] || [];
    this.dataSource.setData(this.dataCache[type] || []);


    // console.log('updated dataSource is : ', this.dataSource.data);
  }

  private getColumns(type: TableType): void {
    const columnMap: { [key in TableType]: string[] } = {
      OVERVIEW: [
        'short',
        'score',
        'cmp_price',
        'vol',
        'unrgain',
        'tech_txt',
        'f_txt',
        'tusk',
      ],
      HOLDING: [
        'short',
        'score',
        'cmp',
        'iprice',
        'ival',
        'dgain',
        'unrgain',
        'lval',
      ],
      PRICE: [
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
      ],
      CONTRIBUTION: [
        'short',
        'score',
        'cmp',
        'mcap',
        'unrgain',
        'unrgaincontri',
        'pwt',
        'lval',
      ],
      DIVIDEND: ['short', 'score', 'cmp', 'div', 'unrgain', 'tret', 'lval'],
      MOJO: [
        'short',
        'score',
        'cmp',
        'q_txt',
        'v_txt',
        'f_txt',
        'tech_txt',
        'pwt',
        'lval',
      ],
      RISK: [
        'short',
        'score',
        'cmp',
        'mcap',
        'volatility',
        'riskadj',
        'beta',
        'riskval',
      ],
      LIQUIDITY: [
        'short',
        'score',
        'cmp',
        'qty',
        'd5avgvol',
        'd5delivol',
        'risk',
        'lval',
      ],
      TAX: [
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
      ],
      RATIOS: [
        'short',
        'score',
        'cmp',
        'mcap',
        'divy',
        'pe',
        'roe',
        'debeq',
        'pbv',
      ],
      FINANCIALS: [
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
      ],
      RETURNS: [
        'short',
        'score',
        'cmp',
        'D1',
        'W1',
        'M1',
        'M3',
        'Y1',
        'Y3',
        'Y5',
      ],
      RESULTS: [
        'short',
        'score',
        'cmp',
        'resdt',
        'f_txt',
        'rescomm',
        'resultdt',
        'pv',
      ],
      TOTAL_RETURNS: [
        'short',
        'score',
        'cmp',
        'qty',
        'rgain',
        'unrgain',
        'tgain',
        'tgainp',
      ],
    };

    this.displayedColumns = columnMap[type] || [];
  }

  onClick(type: TableType): void {
    this.TYPE = type;
    this.getColumns(type);

    const fetchType: TableType = [
      'PRICE',
      'CONTRIBUTION',
      'DIVIDEND',
      'MOJO',
    ].includes(type)
      ? 'HOLDING'
      : type;

    this.dataCache[fetchType]
      ? this.updateStocks(fetchType)
      : this.fetchStocks(fetchType);
  }

  private sortData(sort: Sort) {
    // const data = this.dataSource.data.slice();
    // if (!sort.active || sort.direction === '') {
    //   this.dataSource.data = data;
    //   return;
    // }

    const data = this.dataSource.getData().slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.setData(data);
      return;
    }

    const sortedData = data.sort((a, b) =>
      this.compare(
        this.getPropertyValue(a, sort.active),
        this.getPropertyValue(b, sort.active),
        sort.direction === 'asc'
      )
    );

    // this.dataSource = new MatTableDataSource(sortedData);
    // this.dataSource.sort = this.sort;

    this.dataSource.setData(sortedData);
    this.cdr.detectChanges();

  }

  private getPropertyValue(item: any, property: string): any {
    if (['D1', 'W1', 'M1', 'M3', 'Y1', 'Y3', 'Y5'].includes(property)) {
      return item.returns?.[property]?.val;
    }
    return property.split('.').reduce((obj, key) => obj?.[key], item);
  }

  private compare(a: any, b: any, isAsc: boolean): number {
    if (a === b) return 0;
    if (typeof a === 'string' && typeof b === 'string')
      return isAsc ? a.localeCompare(b) : b.localeCompare(a);
    return isAsc ? a - b : b - a;
  }

  sortBy(property: string) {
    const sortState: Sort = {
      active: property,
      direction: this.sort.direction === 'asc' ? 'desc' : 'asc',
    };
    this.sort.active = property;
    this.sort.direction = sortState.direction;
    this.sortData(sortState);
  }

  isSortActive(column: string): boolean {
    return this.sort?.active === column && this.sort?.direction !== '';
  }

  getSortIconClass(column: string): string {
    return this.sort?.active === column
      ? this.sort.direction === 'asc'
        ? 'arrow_upward'
        : 'arrow_downward'
      : '';
  }

  getColor(value: string): string {
    const numValue = parseFloat(value);
    return isNaN(numValue)
      ? 'black'
      : numValue === 0
      ? ''
      : numValue < 0
      ? 'red'
      : 'green';
  }

  getBgColor(value: string): string {
    const colorMap: { [key: string]: string } = {
      green: '#ccffcc',
      Green: '#ccffcc',
      red: '#ffcccc',
      Red: '#ffcccc',
      orange: '#ffcc99',
      Orange: '#ffcc99',
    };
    if (colorMap[value]) return colorMap[value];
    const numValue = parseFloat(value);
    return isNaN(numValue)
      ? 'white'
      : numValue === 0
      ? 'white'
      : numValue < 0
      ? '#ffcccc'
      : '#ccffcc';
  }

  togglePanel(element: any) {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

  extractColor(input: string): string {
    if (input.endsWith('-tag')) {
      const value = input.slice(0, -4);
      return value === 'som' ? 'green' : value;
    }
    return input;
  }

  togglePopup(): void {
    this.showPopup = !this.showPopup;
  }

  closePopup(): void {
    this.showPopup = false;
  }

  getTotal(propertyPath: string): number {
    // return this.dataSource.data.reduce((total, item) => {
    //   const value = this.getPropertyValue(item, propertyPath);
    //   const numValue = Number(value) || 0;
    //   return total + (numValue === -999999 ? 0 : numValue);
    // }, 0);
    return 0;
  }

  formatNumberWithCommas(value: string | number): string {
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    return numValue === -999999
      ? '-'
      : isNaN(numValue)
      ? ''
      : new Intl.NumberFormat('en-US').format(numValue);
  }

  getExpandedHeight(element: any): number {
    return element.details?.length
      ? element.details.length * (this.TYPE === 'TAX' ? 60 : 80)
      : 0;
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}



// Custom DataSource to work with virtual scrolling
export class MyDataSource extends DataSource<any> {
  private _dataStream = new BehaviorSubject<any[]>([]);
  private _data: any[] = [];
  sort: MatSort | null = null;

  constructor() {
    super();
  }

  connect(): Observable<any[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: any[]) {
    this._data = data;
    this._dataStream.next(data);
  }

  getData(): any[] {
    return this._data;
  }
}
