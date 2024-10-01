import { Component, OnInit, ViewChild, AfterViewInit, signal, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { PopupComponent } from '../../others/popup/popup.component';
import { columns } from './Columns';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';
import { IColumns } from 'src/app/models/pp/column';
import { BehaviorSubject, Observable, tap, map } from 'rxjs';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';

export type TableType = 'OVERVIEW' | 'HOLDING' | 'PRICE' | 'CONTRIBUTION' | 'DIVIDEND' | 'MOJO' | 'RISK' | 'LIQUIDITY' | 'TAX' | 'RATIOS' | 'FINANCIALS' | 'RETURNS' | 'RESULTS' | 'TOTAL_RETURNS';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  standalone: true,
  imports: [MatSortModule, MatTableModule, CommonModule, MatIconModule, MatExpansionModule, PopupComponent, ScrollingModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablesComponent implements OnInit, AfterViewInit {
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;

  private dataSubject = new BehaviorSubject<any[]>([]);
  data$: Observable<any[]>;
  
  displayedColumns: string[] = [];
  private dataCache: { [key in TableType]?: any[] } = {};

  col: IColumns = columns;
  TYPE: TableType = 'HOLDING';
  
  itemSize = 50; // Height of each row in pixels
  pageSize = 10; // Number of items to load at once
  bufferSize = 5; // Number of items to buffer

  readonly NAVBAR_ITEMS: TableType[] = ['OVERVIEW', 'HOLDING', 'PRICE', 'CONTRIBUTION', 'DIVIDEND', 'MOJO', 'RISK', 'LIQUIDITY', 'TAX', 'RATIOS', 'FINANCIALS', 'RETURNS', 'RESULTS', 'TOTAL_RETURNS'];
  readonly panelOpenState = signal(false);
  expandedElement: any;
  showPopup = false;

  private readonly columnMap: { [key in TableType]: string[] } = {
    OVERVIEW: ['short', 'score', 'cmp_price', 'vol', 'unrgain', 'tech_txt', 'f_txt', 'tusk'],
    HOLDING: ['short', 'score', 'cmp', 'iprice', 'ival', 'dgain', 'unrgain', 'lval'],
    PRICE: ['short', 'score', 'cmp', 'cvol', 'dh', 'dl', 'wk52h', 'wk52l', 'ath', 'atl'],
    CONTRIBUTION: ['short', 'score', 'cmp', 'mcap', 'unrgain', 'unrgaincontri', 'pwt', 'lval'],
    DIVIDEND: ['short', 'score', 'cmp', 'div', 'unrgain', 'tret', 'lval'],
    MOJO: ['short', 'score', 'cmp', 'q_txt', 'v_txt', 'f_txt', 'tech_txt', 'pwt', 'lval'],
    RISK: ['short', 'score', 'cmp', 'mcap', 'volatility', 'riskadj', 'beta', 'riskval'],
    LIQUIDITY: ['short', 'score', 'cmp', 'qty', 'd5avgvol', 'd5delivol', 'risk', 'lval'],
    TAX: ['short', 'score', 'cmp', 'jan31price', 'qty', 'avghold', 'sttax', 'dayleft', 'lttax', 'lval', 'ptv'],
    RATIOS: ['short', 'score', 'cmp', 'mcap', 'divy', 'pe', 'roe', 'debeq', 'pbv'],
    FINANCIALS: ['short', 'score', 'cmp', 'year', 'netsale', 'othinc', 'opprof', 'intpaid', 'tax', 'netprof', 'eps'],
    RETURNS: ['short', 'score', 'cmp', 'D1', 'W1', 'M1', 'M3', 'Y1', 'Y3', 'Y5'],
    RESULTS: ['short', 'score', 'cmp', 'resdt', 'f_txt', 'rescomm', 'resultdt', 'pv'],
    TOTAL_RETURNS: ['short', 'score', 'cmp', 'qty', 'rgain', 'unrgain', 'tgain', 'tgainp'],
  };
  
  constructor(private serv: GetPersonalPFService, 
    public fun : PpFunctionsService,
    private cdr: ChangeDetectorRef) {
    this.data$ = this.dataSubject.asObservable();
  }

  getDirClrDefault(value: string | number, def: string): string {
    console.log("fun getDirClrDefault called ")
    // Convert value to a number if it is a string
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;

    // Determine the color based on the numeric value
    if (numericValue === 0) {
      return def; // Use the default value if provided and value is zero
    } else if (numericValue < 0) {
      return 'red';
    } else {
      return 'green';
    }
  }

  ngOnInit() {
    this.getColumns('HOLDING');
    this.fetchStocks('HOLDING');
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.sortData());
    this.cdr.detectChanges();

    this.viewport.scrolledIndexChange.pipe(
      tap(index => {
        const end = this.viewport.getRenderedRange().end;
        const total = this.viewport.getDataLength();
        if (end === total) {
          this.fetchMore();
        }
      })
    ).subscribe();
  }

  onClick(type: TableType): void {
    this.TYPE = type;
    this.getColumns(type);
    const fetchType: TableType = ['PRICE', 'CONTRIBUTION', 'DIVIDEND', 'MOJO'].includes(type) ? 'HOLDING' : type;
    this.dataCache[fetchType] ? this.updateStocks(fetchType) : this.fetchStocks(fetchType);
  }

  private fetchStocks(type: TableType) {
    if (this.dataCache[type]) {
      this.updateStocks(type);
      return;
    }

    const fetchType: TableType = ['PRICE', 'CONTRIBUTION', 'DIVIDEND', 'MOJO'].includes(type) ? 'HOLDING' : type;

    this.serv.getOverviewStocks(fetchType).subscribe({
      next: (response) => {
        const elements = ['RISK', 'RATIOS', 'FINANCIALS', 'RETURNS'].includes(fetchType)
          ? Object.values(response.data)
          : Object.values(response.data.list);
        this.dataCache[fetchType] = elements;
        this.updateStocks(fetchType);
      },
      error: (err) => console.error('Failed to load data', err),
    });
  }

  private updateStocks(type: TableType): void {
    const data = this.dataCache[type] || [];
    this.dataSubject.next(data.slice(0, this.pageSize));
    this.sortData();
    this.cdr.detectChanges();
  }

  private fetchMore() {
    const currentLength = this.dataSubject.value.length;
    const nextBatch = this.dataCache[this.TYPE]?.slice(currentLength, currentLength + this.pageSize) || [];
    this.dataSubject.next([...this.dataSubject.value, ...nextBatch]);
  }

  private getColumns(type: TableType): void {
    this.displayedColumns = this.columnMap[type] || [];
  }

  sortData() {
    if (this.sort.active && this.sort.direction !== '') {
      this.data$ = this.dataSubject.pipe(
        map(data => {
          return data.slice().sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            return this.compare(this.getPropertyValue(a, this.sort.active), this.getPropertyValue(b, this.sort.active), isAsc);
          });
        })
      );
    } else {
      this.data$ = this.dataSubject.asObservable();
    }
  }

  private compare(a: any, b: any, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  sortBy(property: string) {
    if (this.sort.active === property) {
      this.sort.direction = this.sort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.sort.active = property;
      this.sort.direction = 'asc';
    }
    this.sortData();
  }

  isSortActive(column: string): boolean {
    return this.sort?.active === column && this.sort?.direction !== '';
  }

  getSortIconClass(column: string): string {
    return this.sort?.active === column ? (this.sort.direction === 'asc' ? 'arrow_upward' : 'arrow_downward') : '';
  }

  getColor(value: string): string {
    const numValue = parseFloat(value);
    return isNaN(numValue) ? 'black' : numValue === 0 ? '' : numValue < 0 ? 'red' : 'green';
  }

  getBgColor(value: string): string {
    const colorMap: { [key: string]: string } = { green: '#ccffcc', Green: '#ccffcc', red: '#ffcccc', Red: '#ffcccc', orange: '#ffcc99', Orange: '#ffcc99' };
    if (colorMap[value]) return colorMap[value];
    const numValue = parseFloat(value);
    return isNaN(numValue) ? 'white' : numValue === 0 ? 'white' : numValue < 0 ? '#ffcccc' : '#ccffcc';
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
    return this.dataSubject.value.reduce((total, item) => {
      const value = this.getPropertyValue(item, propertyPath);
      const numValue = Number(value) || 0;
      return total + (numValue === -999999 ? 0 : numValue);
    }, 0);
  }

  formatNumberWithCommas(value: string | number): string {
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    return numValue === -999999 ? '-' : isNaN(numValue) ? '' : new Intl.NumberFormat('en-US').format(numValue);
  }

  getExpandedHeight(element: any): number {
    return element.details?.length ? element.details.length * (this.TYPE === 'TAX' ? 60 : 80) : 0;
  }

  trackByIndex(index: number): number {
    return index;
  }

  private getPropertyValue(item: any, property: string): any {
    if (['D1', 'W1', 'M1', 'M3', 'Y1', 'Y3', 'Y5'].includes(property)) {
      return item.returns?.[property]?.val;
    }
    return property.split('.').reduce((obj, key) => obj?.[key], item);
  }
}