import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitcherpageRoutingModule } from './switcherpage-routing.module';
import { SwitcherpageComponent } from './switcherpage.component';
import { Verdict3newComponent } from '../../components/verdict3new/verdict3new.component';
import { Verdict1Component } from '../../components/verdict1/verdict1.component';
import { Verdict2Component } from '../../components/verdict2/verdict2.component';
import { ResearchServiceComponent } from '../../components/research-service/research-service.component';
import { VerdictloadingComponent } from '../../components/others/verdictloading/verdictloading.component';
import { VerdictreportComponent } from '../../components/verdictreport/verdictreport.component';
import { SwitcherReportComponent } from '../../components/switcherReportsComponent/switcher-report/switcher-report.component';
import { FilterSwitcherReportPipe } from '../../pipes/switcher/filter-switcher-report.pipe';
import { SwitchResultComponent } from '../../components/switcherReportsComponent/switch-result/switch-result.component';
import { SwitchOtherChoicesComponent } from '../../components/switcherReportsComponent/switch-other-choices/switch-other-choices.component';
import { SwitchOptionsComponent } from '../../components/switcherReportsComponent/switch-options/switch-options.component';
import { FilterChoiceResultPipe } from '../../pipes/switcher/filter-choice-result.pipe';

import { IpoFooterComponent } from '../../components/ipo-COMPO/ipo-footer/ipo-footer.component';
import { VerdictFooterNComponent } from 'src/app/components/verdict-footer-n/verdict-footer-n.component';
import { DemoComponent } from 'src/app/components/demos/demo/demo.component';


@NgModule({
  declarations: [SwitcherpageComponent],
  imports: [
    CommonModule,
    SwitcherpageRoutingModule,
    Verdict3newComponent,
    Verdict1Component,
    Verdict1Component,
    Verdict2Component,
    ResearchServiceComponent,
    VerdictloadingComponent,
    VerdictreportComponent,
    SwitcherReportComponent,
    FilterSwitcherReportPipe,
    SwitchResultComponent,
    SwitchOtherChoicesComponent,
    SwitchOptionsComponent,
    FilterChoiceResultPipe,
    DemoComponent,
    IpoFooterComponent,
    VerdictFooterNComponent
  ],
})
export class SwitcherpageModule {}
