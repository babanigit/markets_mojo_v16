import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalPortfoliosRoutingModule } from './personal-portfolios-routing.module';
import { PersonalPortfoliosComponent } from './personal-portfolios.component';
import { StockerInvestmentsComponent } from '../../components/personalPortfo-COMPO/stocker-investments/stocker-investments.component';
import { MutualFundsInvestmentsComponent } from '../../components/personalPortfo-COMPO/mutual-funds-investments/mutual-funds-investments.component';

import { TablesComponent } from '../../components/personalPortfo-COMPO/tables/tables.component';
import { IpoFooterNewComponent } from 'src/app/components/ipo-COMPO/ipo-footer-new/ipo-footer-new.component';

import { SwiperHowAmComponent } from 'src/app/components/personalPortfo-COMPO/swipers/swiper-how-am/swiper-how-am.component';
import { SwiperDoingOverallComponent } from 'src/app/components/personalPortfo-COMPO/swipers/swiper-doing-overall/swiper-doing-overall.component';
import { SwiperReturnAnalysisComponent } from 'src/app/components/personalPortfo-COMPO/swipers/swiper-return-analysis/swiper-return-analysis.component';
import { SwiperRiskAnalysisComponent } from 'src/app/components/personalPortfo-COMPO/swipers/swiper-risk-analysis/swiper-risk-analysis.component';
import { SwiperDemoComponent } from 'src/app/components/demos/swiper-demo/swiper-demo.component';
import { SwiperDiversificationComponent } from 'src/app/components/personalPortfo-COMPO/swipers/swiper-diversification/swiper-diversification.component';
import { SwiperFinancialTrendComponent } from 'src/app/components/personalPortfo-COMPO/swipers/swiper-financial-trend/swiper-financial-trend.component';
import { SwiperLiquidityComponent } from 'src/app/components/personalPortfo-COMPO/swipers/swiper-liquidity/swiper-liquidity.component';
import { SwiperQualityComponent } from 'src/app/components/personalPortfo-COMPO/swipers/swiper-quality/swiper-quality.component';
import { SwiperTaxComponent } from 'src/app/components/personalPortfo-COMPO/swipers/swiper-tax/swiper-tax.component';
import { SwiperValuationComponent } from 'src/app/components/personalPortfo-COMPO/swipers/swiper-valuation/swiper-valuation.component';
import { PfPriceMsgComponent } from 'src/app/components/personalPortfo-COMPO/pf-price-msg/pf-price-msg.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

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

    TablesComponent,
    IpoFooterNewComponent,

    SwiperDemoComponent,

    SwiperHowAmComponent,
    SwiperDoingOverallComponent,
    SwiperReturnAnalysisComponent,
    SwiperRiskAnalysisComponent,
    SwiperDiversificationComponent,
    SwiperQualityComponent,
    SwiperValuationComponent,
    SwiperFinancialTrendComponent,
    SwiperTaxComponent,
    SwiperLiquidityComponent,


  ],
})
export class PersonalPortfoliosModule {}
