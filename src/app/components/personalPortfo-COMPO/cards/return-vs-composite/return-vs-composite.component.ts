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
  ViewChild,
} from '@angular/core';
import { retry, tap, catchError, of } from 'rxjs';
import {
  ICompareReturnPopup,
  ICompareReturnPopup_data,
} from 'src/app/models/pp/compareReturnPopup';
import { IRetcompo, IScorecard } from 'src/app/models/pp/return';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';
import { DirClrDefaultPipe } from "../../../../pipes/dir-clr-default.pipe";

@Component({
  selector: 'app-return-vs-composite',
  templateUrl: './return-vs-composite.component.html',
  styleUrls: ['./return-vs-composite.component.css'],
  standalone: true,
  imports: [CommonModule, RoundOffPipe, TwoCommasPipe, DirClrDefaultPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReturnVsCompositeComponent implements OnInit {
  constructor(
    private serv: GetPersonalPFService,
    public fun: PpFunctionsService,
    private cdr: ChangeDetectorRef
  ) { }

  @Input() data_retcompo: IRetcompo | undefined;
  @Input() data_scorecard: IScorecard | undefined;

  compare_return_data: ICompareReturnPopup_data | undefined;

  @Input() HEAD: string | undefined; //props
  @Input() SHOW_BUTTON: Boolean = true;

  @ViewChild('childDiv') childDiv: ElementRef<HTMLDivElement> | undefined;
  @Output() sendElement = new EventEmitter<HTMLDivElement>();
  @Output() sendClick_State = new EventEmitter<boolean>(); //for input value
  @Output() send_head = new EventEmitter<string>(); //for

  isCollapseRetCompo: boolean = true;


  clonedElement: HTMLDivElement | undefined;

  isLoading: boolean = false;
  clickedOnce: boolean = false;
  error: string | null = null;
  isFetched: boolean = false; // Flag to track fetch status


  ngOnInit(): void {
    // this.fetchData();
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

    this.serv.getCompareReturn()
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
        next: (res: ICompareReturnPopup) => {
          if (res && res.data) {
            this.compare_return_data = res.data;

            console.log(" the hehe is : ", this.compare_return_data)

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
    if (this.childDiv && this.compare_return_data) {
      console.log('Emitting data:', this.compare_return_data); // Log the data being emitted
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



  getPeriods(categoryData: { [period: string]: any }): string[] {
    return Object.keys(categoryData);
  }
}
