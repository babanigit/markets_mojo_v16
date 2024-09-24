import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SummaryComponent } from '../../cards/summary/summary.component';
import { CommonModule } from '@angular/common';
import { NumberFormatPipe } from 'src/app/pipes/pp/number-format.pipe';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { BreakupComponent } from '../../cards/breakup/breakup.component';
import { IQvfl_Data, IQvfl } from 'src/app/models/pp/qvfl';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';
import { ScorecardComponent } from '../../cards/scorecard/scorecard.component';
import {
  I_List_Holding,
  IHoldings,
  IHoldingsData,
} from 'src/app/models/table/holding';

@Component({
  selector: 'app-swiper-quality',
  templateUrl: './swiper-quality.component.html',
  styleUrls: ['./swiper-quality.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RoundOffPipe,
    TwoCommasPipe,
    BreakupComponent,
    NumberFormatPipe,
    SummaryComponent,
    ScorecardComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperQualityComponent implements OnInit {
  main_data: IHoldingsData | undefined;

  @Output() send_holdingsData = new EventEmitter<IHoldingsData>(); //sending data for those two swipers

  @Input() SHOW_BUTTON: Boolean = true;
  isCollapseTodayContri: boolean = true;

  @Input() score: any;

  @Input() DATA_qvfl: IQvfl_Data | undefined;

  constructor(
    private serv: GetPersonalPFService,
    public fun: PpFunctionsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.serv.getOverviewStocks('HOLDING').subscribe((res: IHoldings) => {
      this.main_data = res.data;
      this.send_holdingsData.emit(this.main_data);
      this.cdr.detectChanges(); // Trigger change detection
    });
  }

}
