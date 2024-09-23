import {
  Component,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
  ViewContainerRef,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get/get-personal-pf.service';
import { PpFunctionsService } from 'src/app/services/personal-portfolio/fun/pp-functions.service';
import { TwoCommasPipe } from 'src/app/pipes/pp/twoCommas/two-commas.pipe';
import { RoundOffPipe } from 'src/app/pipes/pp/roundOff/round-off.pipe';
import { GraphTodayComponent } from '../../graph/graph-today/graph-today.component';
import { CardComponent } from '../../cards/card/card.component';
import { IMcapClass_Data, IToday, IToday_data } from 'src/app/models/pp/today';
import { ModelOpenComponent } from '../../model-open/model-open.component';
import {
  IPortfolioGraph,
  IPortfolioGraph_Data,
} from 'src/app/models/pp/PortfolioGraph';
import { IGraphData } from 'src/app/models/graphData';

type PortfolioKeys = keyof IPortfolioGraph_Data;

@Component({
  selector: 'app-swiper-how-am',
  templateUrl: './swiper-how-am.component.html',
  styleUrls: ['./swiper-how-am.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    TwoCommasPipe,
    RoundOffPipe,
    CardComponent,
    GraphTodayComponent,
    ModelOpenComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperHowAmComponent implements AfterViewInit, OnInit {
  data_summary: any = [];
  data_contri: any = [];
  data_drags: any = [];
  data_news: any = [];
  data_corpact: any = [];
  data_gainers: any = [];
  data_losers: any = [];
  data_mcap: IMcapClass_Data | undefined;

  graphToday_Data: IPortfolioGraph_Data | undefined;

  // @Output() send_graphToday = new EventEmitter<IPortfolioGraph_Data>(); //for input value
  // @Output() send_button = new EventEmitter<string>(); //for input value

  send_graphToday: IPortfolioGraph_Data | undefined;
  send_button: PortfolioKeys = '1M'; // Ensure send_button is one of the valid keys
  switch_button: string = 'adj';

  constructor(
    private serv: GetPersonalPFService,
    public fun: PpFunctionsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  click_state: boolean = false;

  @ViewChild('parentContainer', { static: false })
  parentContainer!: ElementRef<HTMLDivElement>;

  receiveElement(element: HTMLDivElement) {
    console.log('Received element', element);

    // Use the ViewChild reference to append the element
    setTimeout(() => {
      if (this.parentContainer) {
        console.log('append');
        this.parentContainer.nativeElement.appendChild(element);
      }
    }, 0);
  }
  receiveClickState(state: boolean) {
    this.click_state = state;
  }

  getHead: string | undefined;
  receiveHead(str: string) {
    this.getHead = str;
  }

  buttonClicked(str: PortfolioKeys) {
    this.send_button = str;
  }

  switchFun(str: string) {
    this.switch_button = str;
  }

  fetchData(): void {
    this.serv.getSwitcherDatas('today').subscribe((res: IToday) => {
      this.data_summary = res.data.summary;
      this.data_contri = res.data.overall.contri;
      this.data_drags = res.data.overall.drags;
      this.data_news = res.data.news;
      this.data_corpact = res.data.corpact;
      this.data_gainers = res.data.overall.gainers;
      this.data_losers = res.data.overall.losers;
      this.data_mcap = res.data.mcap;

      this.cdr.detectChanges(); // Trigger change detection
    });

    this.serv.getGraphToday().subscribe((res: IPortfolioGraph) => {
      this.graphToday_Data = res.data;
      console.log('graphToday data is : ', this.graphToday_Data);

      this.cdr.detectChanges(); // Trigger change detection
    });
  }

  ngAfterViewInit() {
    Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);
    const swiper = new Swiper('.swiper-1', {
      slidesPerView: 'auto',
      // slidesPerGroup: 3,
      spaceBetween: 30,
      // loop: true,
      // autoplay: {
      //   delay: 1000,
      //   disableOnInteraction: false,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    // console.log('Swiper instance:', swiper);
  }
}
