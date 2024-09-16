import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockerInvestmentsRoutingModule } from './stocker-investments-routing.module';
import { TablesComponent } from '../tables/tables.component';
import { DemoComponent } from '../../demos/demo/demo.component';
import { SwiperDemoComponent } from '../../demos/swiper-demo/swiper-demo.component';
import { SwiperReturnAnalysisComponent } from '../swipers/swiper-return-analysis/swiper-return-analysis.component';
import { Scorecard2Component } from '../cards/scorecard2/scorecard2.component';




@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    StockerInvestmentsRoutingModule,
    TablesComponent,
    SwiperDemoComponent,
    DemoComponent


  ],
})
export class StockerInvestmentsModule {}
