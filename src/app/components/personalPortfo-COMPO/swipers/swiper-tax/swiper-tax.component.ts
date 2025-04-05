import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  ITax_Analysis_Data,
  ItaxAnalysis,
} from 'src/app/models/pp/taxAnalysis';
import { ITax_HistroyData, ITaxHistory } from 'src/app/models/pp/taxHistory';
import { NumberFormatPipe } from 'src/app/pipes/pp/number-format.pipe';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';
import { AverageAgeComponent } from '../../cards/average-age/average-age.component';
import { HistoryTaxComponent } from '../../cards/history-tax/history-tax.component';
import { PostTaxValueComponent } from '../../cards/post-tax-value/post-tax-value.component';
import { ShortTermCapitalComponent } from '../../cards/short-term-capital/short-term-capital.component';
import { ItaxHistroyPopup_data } from 'src/app/models/pp/taxHistoryPopup';

@Component({
  selector: 'app-swiper-tax',
  templateUrl: './swiper-tax.component.html',
  styleUrls: ['./swiper-tax.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RoundOffPipe,
    TwoCommasPipe,
    NumberFormatPipe,
    PostTaxValueComponent,
    HistoryTaxComponent,
    ShortTermCapitalComponent,
    AverageAgeComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperTaxComponent implements OnInit {
  data_taxAnalysis: ITax_Analysis_Data | undefined;
  data_taxHistory: ITax_HistroyData | undefined;

  @Input() SHOW_BUTTON: Boolean = true;
  isCollapseTodayContri: boolean = true;

  constructor(
    private serv: GetPersonalPFService,
    public fun: PpFunctionsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  @Output() sendElement = new EventEmitter<HTMLDivElement>();
  @Output() sendClick_State = new EventEmitter<boolean>(); //for input value
  @Output() send_head = new EventEmitter<string>(); //for
  @Output() taxPopup_data = new EventEmitter<ItaxHistroyPopup_data>()

  receiveTaxPopupData(hello: ItaxHistroyPopup_data ){
    this.taxPopup_data.emit(hello);
  }

  receiveElement(element: HTMLDivElement) {
    this.sendElement.emit(element);
  }
  receiveClickState(state: boolean) {
    this.sendClick_State.emit(state);
  }
  receiveHead(str: string) {
    this.send_head.emit(str);
  }

  fetchData(): void {
    this.serv.getSwitcherDatas('taxAnalysis').subscribe((res: ItaxAnalysis) => {
      this.data_taxAnalysis = res.data;
      this.cdr.detectChanges(); // Trigger change detection
    });

    this.serv.getSwitcherDatas('taxHistory').subscribe((res: ITaxHistory) => {
      this.data_taxHistory = res.data;
      this.cdr.detectChanges(); // Trigger change detection
    });
  }
}
