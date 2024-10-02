import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { retry, tap, catchError, of } from 'rxjs';
import { IRisk_Data_Datum } from 'src/app/models/pp/RiskPopup';
import { ITax_Analysis_Data } from 'src/app/models/pp/taxAnalysis';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';
import { TwoCommasPipe } from "../../../../pipes/pp/twoCommas/two-commas.pipe";
import { RoundOffPipe } from "../../../../pipes/pp/roundOff/round-off.pipe";
import { ITaxAnalysisPopup, ITaxAnalysisPopup_data } from 'src/app/models/pp/taxAnalysisPopup';
import { DirClrDefaultPipe } from "../../../../pipes/dir-clr-default.pipe";

@Component({
  selector: 'app-post-tax-value',
  templateUrl: './post-tax-value.component.html',
  styleUrls: ['./post-tax-value.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    TwoCommasPipe,
    RoundOffPipe,
    DirClrDefaultPipe
],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PostTaxValueComponent implements OnInit {
  @Input() data_taxAnalysis: ITax_Analysis_Data | undefined;
  @Input() HEAD: string | undefined; //props
  @Input() SHOW_BUTTON: Boolean = true;

  @ViewChild('childDiv') childDiv: ElementRef<HTMLDivElement> | undefined;
  @Output() sendElement = new EventEmitter<HTMLDivElement>();
  @Output() sendClick_State = new EventEmitter<boolean>(); //for input value
  @Output() send_head = new EventEmitter<string>(); //for
  // riskPopup_data: { [key: string]: IRisk_Data_Datum } | undefined;
  taxAnalysisPopup_data: ITaxAnalysisPopup_data | undefined;

  @Output() loading_state = new EventEmitter<boolean>(false); //for


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
    this.loading_state.emit(true)


    this.error = null;
    this.cdr.markForCheck();

    this.serv.getTaxPopup('detail')
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
        next: (res: ITaxAnalysisPopup) => {
          if (res && res.data) {
            // this.detail_data = res.data;
            this.taxAnalysisPopup_data = res.data;
            console.log('The popup data is :  ', this.taxAnalysisPopup_data);
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
          this.loading_state.emit(false)

          this.cdr.markForCheck();
        }
      });
  }

  private emitData() {
    if (this.childDiv && this.taxAnalysisPopup_data) {
      console.log('Emitting data:', this.taxAnalysisPopup_data); // Log the data being emitted
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

