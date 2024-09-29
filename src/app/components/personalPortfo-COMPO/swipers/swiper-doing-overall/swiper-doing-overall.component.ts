import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  EventEmitter,
  Output,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { GraphTodayComponent } from '../../graph/graph-today/graph-today.component';
import { CardComponent } from '../../cards/card/card.component';
import { BreakupComponent } from '../../cards/breakup/breakup.component';
import { OverallPortfolioAnalysisComponent } from '../../cards/overall-portfolio-analysis/overall-portfolio-analysis.component';
import { IContri_overallSwiper, IDrag_overallSwiper, IGainer_overallSwiper, ILoser_overallSwiper, IOverall_Data } from 'src/app/models/pp/overall';
@Component({
  selector: 'app-swiper-doing-overall',
  templateUrl: './swiper-doing-overall.component.html',
  styleUrls: ['./swiper-doing-overall.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    TwoCommasPipe,
    RoundOffPipe,
    CardComponent,
    GraphTodayComponent,
    BreakupComponent,
    OverallPortfolioAnalysisComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperDoingOverallComponent implements AfterViewInit, OnInit {
  main_data: IOverall_Data | undefined;

  // data.overall
  data_contri: IContri_overallSwiper | undefined
  data_drags: IDrag_overallSwiper | undefined
  data_gainers: IGainer_overallSwiper | undefined
  data_losers: ILoser_overallSwiper | undefined

  // emit
  @Output() send_element = new EventEmitter<string>(); //for input value
  @Output() send_data = new EventEmitter<IOverall_Data>(); //for input value


  @Input() SHOW_BUTTON: Boolean = true;
  isCollapsePP: boolean = true;

  constructor(
    private serv: GetPersonalPFService,
    public fun: PpFunctionsService,
    private cdr: ChangeDetectorRef
  ) { }

  @Output() sendElement = new EventEmitter<HTMLDivElement>();
  @Output() sendClick_State = new EventEmitter<boolean>(); //for input value
  @Output() send_head = new EventEmitter<string>(); //for

  receiveElement(element: HTMLDivElement) {
    this.sendElement.emit(element)
  }
  receiveClickState(state: boolean) {
    this.sendClick_State.emit(state)
    // this.click_state = state;
  }

  receiveHead(str: string) {
    this.send_head.emit(str);
  }

  recieveElemment(str: string) {
    this.send_element.emit(str)
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.serv.getSwitcherDatas('overall').subscribe((res) => {
      this.main_data = res.data;
      this.data_contri = res.data.overall.contri;
      this.data_drags = res.data.overall.drags;
      this.data_gainers = res.data.overall.gainers;
      this.data_losers = res.data.overall.losers;

      this.send_data.emit(this.main_data)

      this.cdr.detectChanges(); // Trigger change detection
    });
  }

  ngAfterViewInit() {
    Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);
    const swiper = new Swiper('.swiper-6', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

  }

  // Method to get class by color
  getClassByColor(color: string): string {
    console.log('hello');
    // return 'green';
    return this.fun.getClassbyClr(color);
  }

  // Method to get direction color default
  getDirClrDefault(value: string | number, defaultColor: string): string {
    // console.log('hello');
    return this.fun.getDirClrDefault(value, defaultColor);
  }

  trackByFn(index: number, item: any): any {
    return item.dotsum.sid; // Use a unique identifier if possible
  }
}
