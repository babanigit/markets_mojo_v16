import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { BreakupComponent } from '../../cards/breakup/breakup.component';
import { I_Ixrr_Data, I_Ixrr } from 'src/app/models/pp/ixrr';
import {
  IReturn_Data,
  IScorecard,
  IRetcompo,
  IDivcontri,
  ISector,
  IMcap,
  IHoldings,
  IReturn,
} from 'src/app/models/pp/return';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';
import {
  ILiqui_list,
  ILiquidity,
  ILiquidityData,
} from 'src/app/models/pp/liquidity';
import { NumberFormatPipe } from 'src/app/pipes/pp/number-format.pipe';
import { ILiquidity_qvfl, IQvfl, IQvfl_Data } from 'src/app/models/pp/qvfl';
import { SummaryComponent } from '../../cards/summary/summary.component';
import { ScorecardComponent } from '../../cards/scorecard/scorecard.component';
import { DetailsLiquiComponent } from '../../details-liqui/details-liqui.component';

@Component({
  selector: 'app-swiper-liquidity',
  templateUrl: './swiper-liquidity.component.html',
  styleUrls: ['./swiper-liquidity.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RoundOffPipe,
    TwoCommasPipe,
    BreakupComponent,
    NumberFormatPipe,
    SummaryComponent,
    ScorecardComponent,
    DetailsLiquiComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperLiquidityComponent implements OnInit {

  Liquidity_List: ILiqui_list[] | undefined;
  qvflData: IQvfl_Data | undefined;

  @Input() SHOW_BUTTON: Boolean = true;
  isCollapseTodayContri: boolean = true;

  @Input() score: any;
  @Output() send_QVFLData = new EventEmitter<IQvfl_Data>();

  constructor(
    private serv: GetPersonalPFService,
    public fun: PpFunctionsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  @Output() sendElement = new EventEmitter<HTMLDivElement>();
  @Output() sendClick_State = new EventEmitter<boolean>(); //for input value
  @Output() send_head = new EventEmitter<string>(); //for

  receiveElement(element: HTMLDivElement) {
    this.sendElement.emit(element)
  }
  receiveClickState(state: boolean) {
    this.sendClick_State.emit(state)
  }
  receiveHead(str: string) {
    this.send_head.emit(str);
  }

  fetchData(): void {
    this.serv.getSwitcherDatas('liquidity').subscribe((res: ILiquidity) => {
      this.Liquidity_List = res.data.list;
      this.cdr.detectChanges(); // Trigger change detection
    });

    this.serv.getQVFLData().subscribe((res: IQvfl) => {
      this.qvflData = res.data;
      this.send_QVFLData.emit(this.qvflData);
      this.cdr.detectChanges(); // Trigger change detection
    });
  }
}
