import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IQvfl_Data, IQvfl } from 'src/app/models/pp/qvfl';
import { NumberFormatPipe } from 'src/app/pipes/pp/number-format.pipe';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';
import { BreakupComponent } from '../../cards/breakup/breakup.component';
import { SummaryComponent } from '../../cards/summary/summary.component';
import { ScorecardComponent } from '../../cards/scorecard/scorecard.component';
import { IHoldingsData } from 'src/app/models/table/holding';

@Component({
  selector: 'app-swiper-valuation',
  templateUrl: './swiper-valuation.component.html',
  styleUrls: ['./swiper-valuation.component.css'],
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
export class SwiperValuationComponent {
  // qvflData: IQvfl_Data | undefined;

  @Input() SHOW_BUTTON: Boolean = true;
  isCollapseTodayContri: boolean = true;

  @Input() score: any;

  @Input() DATA_holding: IHoldingsData | undefined;
  @Input() DATA_qvfl: IQvfl_Data | undefined;

  constructor(
    private serv: GetPersonalPFService,
    public fun: PpFunctionsService,
    private cdr: ChangeDetectorRef
  ) {}
}
