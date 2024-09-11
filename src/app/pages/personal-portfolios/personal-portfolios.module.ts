import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalPortfoliosRoutingModule } from './personal-portfolios-routing.module';
import { PersonalPortfoliosComponent } from './personal-portfolios.component';
import { StockerInvestmentsComponent } from '../../components/personalPortfo-COMPO/stocker-investments/stocker-investments.component';
import { MutualFundsInvestmentsComponent } from '../../components/personalPortfo-COMPO/mutual-funds-investments/mutual-funds-investments.component';
import { PfPriceMsgComponent } from '../../components/personalPortfo-COMPO/pf-price-msg/pf-price-msg.component';

import { TablesComponent } from '../../components/personalPortfo-COMPO/tables/tables.component';
import { IpoFooterComponent } from 'src/app/components/ipo-COMPO/ipo-footer/ipo-footer.component';


import { IpoFooterNewComponent } from 'src/app/components/ipo-COMPO/ipo-footer-new/ipo-footer-new.component';
import { SwiperHowAmComponent } from 'src/app/components/personalPortfo-COMPO/swipers/swiper-how-am/swiper-how-am.component';
import { SwiperDoingOverallComponent } from 'src/app/components/personalPortfo-COMPO/swipers/swiper-doing-overall/swiper-doing-overall.component';
import { SwiperReturnAnalysisComponent } from 'src/app/components/personalPortfo-COMPO/swipers/swiper-return-analysis/swiper-return-analysis.component';
import { SwiperRiskAnalysisComponent } from 'src/app/components/personalPortfo-COMPO/swipers/swiper-risk-analysis/swiper-risk-analysis.component';
import { DemoComponent } from 'src/app/components/demos/demo/demo.component';
import { GraphDemoComponent } from 'src/app/components/demos/graph-demo/graph-demo.component';
import { SwiperDemoComponent } from 'src/app/components/demos/swiper-demo/swiper-demo.component';

@NgModule({
  declarations: [
    PersonalPortfoliosComponent,

    // childerns
    StockerInvestmentsComponent,
    MutualFundsInvestmentsComponent,
  ],
  imports: [
    CommonModule,
    PersonalPortfoliosRoutingModule,
    PfPriceMsgComponent,
    DemoComponent,
    TablesComponent,
    IpoFooterComponent,
    IpoFooterNewComponent,

    GraphDemoComponent,
    SwiperHowAmComponent,
    SwiperDemoComponent,
    SwiperDoingOverallComponent,
    SwiperReturnAnalysisComponent,
    SwiperRiskAnalysisComponent,
],
})
export class PersonalPortfoliosModule {}
