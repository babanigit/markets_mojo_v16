import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockerInvestmentsRoutingModule } from './stocker-investments-routing.module';
import { TablesComponent } from '../tables/tables.component';
import { DemoComponent } from '../../demos/demo/demo.component';
import { SwiperDemoComponent } from '../../demos/swiper-demo/swiper-demo.component';
import { OrderObjectByPipe } from 'src/app/pipes/pp/orderObjectBy/order-object-by.pipe';
import { HighestObjPipe } from 'src/app/pipes/pp/highest-obj.pipe';

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    StockerInvestmentsRoutingModule,
    TablesComponent,
    SwiperDemoComponent,
    DemoComponent,
    OrderObjectByPipe,
    HighestObjPipe

  ],
})
export class StockerInvestmentsModule { }
