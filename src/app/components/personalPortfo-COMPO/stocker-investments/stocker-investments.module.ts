import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockerInvestmentsRoutingModule } from './stocker-investments-routing.module';
import { TablesComponent } from '../tables/tables.component';
import { DemoComponent } from '../../demos/demo/demo.component';
import { SwiperDemoComponent } from '../../demos/swiper-demo/swiper-demo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    StockerInvestmentsRoutingModule,
    TablesComponent,
    SwiperDemoComponent,
    DemoComponent,
    ReactiveFormsModule,
    FormsModule


  ],
})
export class StockerInvestmentsModule {}
