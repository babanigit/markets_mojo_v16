import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IVolatility } from 'src/app/models/pp/risk';
import { IRisk_Data_Datum, IRiskPopup } from 'src/app/models/pp/RiskPopup';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';
import { LineGraphComponent } from '../../graph/line-graph/line-graph.component';
import { retry, tap, catchError, of } from 'rxjs';

@Component({
  selector: 'app-volatility',
  templateUrl: './volatility.component.html',
  styleUrls: ['./volatility.component.css'],
  standalone: true,
  imports: [CommonModule, RoundOffPipe, TwoCommasPipe, LineGraphComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class VolatilityComponent implements OnInit {


  @Input() volatility: IVolatility | undefined; //props
  @Input() HEAD: string | undefined; //props
  @Input() SHOW_BUTTON: Boolean = true;

  @ViewChild('childDiv') childDiv: ElementRef<HTMLDivElement> | undefined;
  @Output() sendElement = new EventEmitter<HTMLDivElement>();
  @Output() sendClick_State = new EventEmitter<boolean>(); //for input value
  @Output() send_head = new EventEmitter<string>(); //for
  riskPopup_data: { [key: string]: IRisk_Data_Datum } | undefined;
  isLoading: boolean = false;
  clickedOnce: boolean = false;
  error: string | null = null;
  isFetched: boolean = false; // Flag to track fetch status

  constructor(
    public fun: PpFunctionsService,
    private serv: GetPersonalPFService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
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

    if (true) {
      this.fetch();
    } else {
      this.error = 'fetch_text is not defined';
      console.error(this.error);
      this.cdr.markForCheck();
    }
  }

  private fetch() {
    this.isFetched = true
    this.isLoading = true;
    this.error = null;
    this.cdr.markForCheck();

    this.serv.getRiskPopup()
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
            // this.detail_data = res.data;
            this.riskPopup_data = res.data;
            // console.log('The details data is:', this.fetch_text, this.detail_data);
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
    if (this.childDiv && this.riskPopup_data) {
      console.log('Emitting data:', this.riskPopup_data); // Log the data being emitted
      const clonedElement = this.childDiv.nativeElement.cloneNode(true) as HTMLDivElement;
      this.sendElement.emit(clonedElement);
      this.sendClick_State.emit(true);
      this.send_head.emit(this.HEAD);
      console.log('Data emitted');
    } else {
      this.error = 'Unable to emit data: ' +
        (this.childDiv ? '' : 'childDiv is undefined. ')
      console.error(this.error);
    }
  }
}
