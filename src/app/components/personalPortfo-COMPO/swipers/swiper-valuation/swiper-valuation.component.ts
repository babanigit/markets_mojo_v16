import { CommonModule } from '@angular/common';
import {
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
import { Scorecard2Component } from '../../cards/scorecard2/scorecard2.component';
import { SummaryComponent } from '../../cards/summary/summary.component';

@Component({
  selector: 'app-swiper-valuation',
  templateUrl: './swiper-valuation.component.html',
  styleUrls: ['./swiper-valuation.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    Scorecard2Component,
    RoundOffPipe,
    TwoCommasPipe,
    BreakupComponent,
    NumberFormatPipe,
    SummaryComponent,
  ],
})
export class SwiperValuationComponent implements OnInit {
  // main_data: ILiquidityData | undefined;
  // Liquidity_List: ILiqui_list[] | undefined;

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
    // this.serv.getSwitcherDatas('liquidity').subscribe((res: ILiquidity) => {
    //   this.main_data = res.data;
    //   console.log('main_data : ', res.data);

    //   this.Liquidity_List = res.data.list;

    // });

    this.serv.getQVFLData().subscribe((res: IQvfl) => {
      this.qvflData = res.data;
      this.cdr.detectChanges(); // Trigger change detection
    });
  }
}
