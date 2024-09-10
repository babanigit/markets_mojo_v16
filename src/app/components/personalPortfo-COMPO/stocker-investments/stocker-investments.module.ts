import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockerInvestmentsRoutingModule } from './stocker-investments-routing.module';
import { TablesComponent } from '../tables/tables.component';
import { SwiperHowAmComponent } from './swipers/swiper-how-am/swiper-how-am.component';
import { SwiperDoingOverallComponent } from './swipers/swiper-doing-overall/swiper-doing-overall.component';
import { SwiperDemoComponent } from '../../swiper-demo/swiper-demo.component';
import { DemoComponent } from '../../demo/demo.component';
import { SwiperReturnAnalysisComponent } from './swipers/swiper-return-analysis/swiper-return-analysis.component';
import { SwiperRiskAnalysisComponent } from './swipers/swiper-risk-analysis/swiper-risk-analysis.component';

@NgModule({
  declarations: [


  ],

  imports: [
    CommonModule,
    StockerInvestmentsRoutingModule,
    TablesComponent,
    SwiperDemoComponent,
    DemoComponent,

    SwiperHowAmComponent,
    SwiperDoingOverallComponent,
    SwiperReturnAnalysisComponent,
    SwiperRiskAnalysisComponent
  ],
})
export class StockerInvestmentsModule {}
