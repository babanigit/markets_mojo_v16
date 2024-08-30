import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalPortfoliosRoutingModule } from './personal-portfolios-routing.module';
import { PersonalPortfoliosComponent } from './personal-portfolios.component';
import { StockerInvestmentsComponent } from '../../components/personalPortfo-COMPO/stocker-investments/stocker-investments.component';
import { MutualFundsInvestmentsComponent } from '../../components/personalPortfo-COMPO/mutual-funds-investments/mutual-funds-investments.component';
import { PfPriceMsgComponent } from '../../components/personalPortfo-COMPO/pf-price-msg/pf-price-msg.component';
import { DemoComponent } from '../../components/demo/demo.component';
import { TablesComponent } from '../../components/personalPortfo-COMPO/tables/tables.component';
import { IpoFooterComponent } from 'src/app/components/ipo-COMPO/ipo-footer/ipo-footer.component';

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
    IpoFooterComponent
  ],
})
export class PersonalPortfoliosModule {}
