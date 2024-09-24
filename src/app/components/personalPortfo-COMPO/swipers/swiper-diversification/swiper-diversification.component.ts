import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ScorecardComponent } from '../../cards/scorecard/scorecard.component';
import { CommonModule } from '@angular/common';
import { DiversificationComponent } from '../../cards/diversification/diversification.component';
import {
  I_diversi_sector,
  IDiversification,
  IDiversification_Data,
} from 'src/app/models/pp/diversification';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';
import { RoundOffPipe } from '../../../../pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from '../../../../pipes/pp/twoCommas/two-commas.pipe';

@Component({
  selector: 'app-swiper-diversification',
  templateUrl: './swiper-diversification.component.html',
  styleUrls: ['./swiper-diversification.component.css'],
  standalone: true,
  imports: [
    ScorecardComponent,
    CommonModule,
    DiversificationComponent,
    RoundOffPipe,
    TwoCommasPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperDiversificationComponent implements OnInit {
  main_data: IDiversification_Data | undefined;
  data_sector: I_diversi_sector | undefined;
  data_mcap: I_diversi_sector | undefined;
  data_holding: I_diversi_sector | undefined;

  @Input() SHOW_BUTTON: Boolean = true;
  isCollapseTodayContri: boolean = true;

  @Input() score: any;

  constructor(
    private serv: GetPersonalPFService,
    public fun: PpFunctionsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.serv
      .getSwitcherDatas('diversification')
      .subscribe((res: IDiversification) => {
        this.main_data = res.data;
        this.data_sector = res.data.sector;
        this.data_mcap = res.data.mcap;
        this.data_holding = res.data.holding;

        this.cdr.detectChanges(); // Trigger change detection
      });
  }
}
