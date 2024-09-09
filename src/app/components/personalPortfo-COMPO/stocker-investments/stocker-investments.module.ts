import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockerInvestmentsRoutingModule } from './stocker-investments-routing.module';
import { TablesComponent } from '../tables/tables.component';
import { SwiperHowAmComponent } from './swipers/swiper-how-am/swiper-how-am.component';
import { SwiperDoingOverallComponent } from './swipers/swiper-doing-overall/swiper-doing-overall.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StockerInvestmentsRoutingModule,
    TablesComponent,
    SwiperHowAmComponent,
    SwiperDoingOverallComponent,
  ],
})
export class StockerInvestmentsModule {}
