import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerdictpageRoutingModule } from './verdictpage-routing.module';
import { VerdictpageComponent } from './verdictpage.component';
import { ResearchServiceComponent } from '../../components/research-service/research-service.component';
import { Verdict1Component } from '../../components/verdict1/verdict1.component';
import { Verdict2Component } from '../../components/verdict2/verdict2.component';
import { VerdictfooterComponent } from '../../components/verdictfooter/verdictfooter.component';
import { VerdictloadingComponent } from '../../components/others/verdictloading/verdictloading.component';
import { VerdictreportComponent } from '../../components/verdictreport/verdictreport.component';
import { FilterReportPipe } from '../../pipes/verdict/filter-report.pipe';
import { Verdict3newComponent } from "../../components/verdict3new/verdict3new.component";
import { JsonDataService } from '../../services/json-data.service';

@NgModule({
  declarations: [
    VerdictpageComponent
  ],
  imports: [
    CommonModule,
    VerdictpageRoutingModule,
    CommonModule,
    Verdict1Component,
    Verdict2Component,
    ResearchServiceComponent,
    VerdictreportComponent,
    FilterReportPipe,
    VerdictfooterComponent,
    VerdictloadingComponent,
    Verdict3newComponent,

]
})
export class VerdictpageModule {

 }
