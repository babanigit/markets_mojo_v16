import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { I_diversi_sector } from 'src/app/models/pp/diversification';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { graph_Data2, map_Details } from 'src/app/models/pp/risk';
import { series_Data_pie } from 'src/app/models/pp/pie';
import { RadiusChartComponent } from '../../graph/radius-chart/radius-chart.component';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';
import { LineGraphComponent } from '../../graph/line-graph/line-graph.component';
import { catchError, retry, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DirClrDefaultPipe } from "../../../../pipes/dir-clr-default.pipe";

@Component({
  selector: 'app-diversification',
  templateUrl: './diversification.component.html',
  styleUrls: ['./diversification.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RadiusChartComponent,
    RoundOffPipe,
    TwoCommasPipe,
    LineGraphComponent,
    DirClrDefaultPipe
],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiversificationComponent implements OnInit {
  @Input() DATA: I_diversi_sector | undefined;
  @Input() HEAD!: string;
  @Input() SHOW_BUTTON: Boolean = true;
  @Input() TEXT!: string;
  @Input() fetch_text: 'Sector' | 'Mcap' | 'Holdings' | undefined;
  pieFromat: series_Data_pie[] | undefined;
  detail_data: map_Details | undefined;
  isLoading: boolean = false;
  clickedOnce: boolean = false;
  error: string | null = null;
  isFetched: boolean = false; // Flag to track fetch status

  isCollapseDiversSector=true

  @ViewChild('childDiv') childDiv: ElementRef<HTMLDivElement> | undefined;
  @Output() sendElement = new EventEmitter<HTMLDivElement>();
  @Output() sendClick_State = new EventEmitter<boolean>();
  @Output() send_head = new EventEmitter<string>();

  constructor(
    public fun: PpFunctionsService,
    private serv: GetPersonalPFService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['DATA'] && this.DATA) {
      this.getPieFromat(this.DATA.graph);
    }
  }

  getPieFromat(data: graph_Data2) {
    const seriesData_pie: any = Object.entries(data).map(([name, y]) => ({
      name,
      y,
    }));
    this.pieFromat = seriesData_pie;
    this.cdr.markForCheck();
  }

  sendToParent() {
    this.clickedOnce = true;

     // Check if data has already been fetched
     if (this.isFetched) {
      this.emitData();
      console.log('Data has already been fetched. Skipping fetch.');
      return;
    }

    if (this.isLoading) {
      console.log('Data is still loading. Please wait.');
      return;
    }

    if (this.fetch_text) {
      this.fetch();
    } else {
      this.error = 'fetch_text is not defined';
      console.error(this.error);
      this.cdr.markForCheck();
    }
  }

  private fetch() {
    this.isFetched=true
    this.isLoading = true;
    this.error = null;
    this.cdr.markForCheck();

    this.serv.getDiversifyPopupData(this.fetch_text!)
      .pipe(
        retry(3), // Retry up to 3 times
        tap(res => {
          console.log('Raw response:', res); // Log the raw response
        }),
        catchError(err => {
          console.error('Error in fetch:', err);
          this.error = 'Failed to load data. Please try again.';
          return of(null); // Return an observable with null to continue the stream
        })
      )
      .subscribe({
        next: (res: any) => {
          if (res && res.data) {
            this.detail_data = res.data;
            console.log('The details data is:', this.fetch_text, this.detail_data);
            setTimeout(() => {
              this.emitData();
            }, 0);
          } else {
            this.error = 'No data received from the server.';
            console.error(this.error);
          }
        },
        complete: () => {
          this.isLoading = false;
          this.cdr.markForCheck();
        }
      });
  }

  private emitData() {
    if (this.childDiv && this.detail_data) {
      console.log('Emitting data:', this.detail_data); // Log the data being emitted
      const clonedElement = this.childDiv.nativeElement.cloneNode(true) as HTMLDivElement;
      this.sendElement.emit(clonedElement);
      this.sendClick_State.emit(true);
      this.send_head.emit(this.HEAD);
      console.log('Data emitted');
    } else {
      this.error = 'Unable to emit data: ' +
        (this.childDiv ? '' : 'childDiv is undefined. ') +
        (this.detail_data ? '' : 'detail_data is not loaded.');
      console.error(this.error);
    }
  }
}
