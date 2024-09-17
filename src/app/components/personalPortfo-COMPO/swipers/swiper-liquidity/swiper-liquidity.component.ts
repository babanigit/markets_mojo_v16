import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
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
import { Scorecard2Component } from '../../cards/scorecard2/scorecard2.component';
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
import { IQvfl, IQvfl_Data } from 'src/app/models/pp/qvfl';

@Component({
  selector: 'app-swiper-liquidity',
  templateUrl: './swiper-liquidity.component.html',
  styleUrls: ['./swiper-liquidity.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    Scorecard2Component,
    RoundOffPipe,
    TwoCommasPipe,
    BreakupComponent,
    NumberFormatPipe,
  ],
})

export class SwiperLiquidityComponent implements OnInit {
  main_data: ILiquidityData | undefined;
  Liquidity_List: ILiqui_list[] | undefined;

  qvflData: IQvfl_Data | undefined;

  @Output() send_element = new EventEmitter<string>(); //for input value

  @Input() SHOW_BUTTON: Boolean = true;
  isCollapseTodayContri: boolean = true;

  constructor(
    private serv: GetPersonalPFService,
    public fun: PpFunctionsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {

    this.serv.getSwitcherDatas('liquidity').subscribe((res: ILiquidity) => {
      this.main_data = res.data;
      console.log('main_data : ', res.data);

      this.Liquidity_List = res.data.list;

      this.cdr.detectChanges(); // Trigger change detection
    });

    this.serv.getQVFLData().subscribe((res: IQvfl) => {
      this.qvflData = res.data;
      console.log( 'the qvfl : ', this.qvflData);
    });

  }
}
