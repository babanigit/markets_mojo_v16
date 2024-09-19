import { Injectable } from '@angular/core';
// import { IGetOverview } from '../../models/overview';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  delay,
  finalize,
  Observable,
  throwError,
} from 'rxjs';
import { IGraphData } from 'src/app/models/graphData';
import { TableType } from 'src/app/components/personalPortfo-COMPO/tables/tables.component';

@Injectable({
  providedIn: 'root',
})
export class GetPersonalPFService {

  private readonly paths: { [key in TableType]: string } = {
    OVERVIEW: 'assets/pp/table/getOverview.json',
    HOLDING: 'http://localhost:3000/holding',
    RISK: 'assets/pp/table/getRisk.json',
    LIQUIDITY: 'assets/pp/table/getLiquidity.json',
    TAX: 'assets/pp/table/getTax.json',
    RATIOS: 'assets/pp/table/getRatio.json',
    FINANCIALS: 'assets/pp/table/getFinancials.json',
    RETURNS: 'assets/pp/table/getReturn.json',
    RESULTS: 'assets/pp/table/getResults.json',
    TOTAL_RETURNS: 'http://localhost:3000/totalReturn',
    PRICE: '',
    CONTRIBUTION: '',
    DIVIDEND: '',
    MOJO: ''
  };
  constructor(private http: HttpClient) {}

  getOverviewStocks(
    type: TableType,

  ): Observable<any> {
    const path = this.paths[type] || this.paths.HOLDING; // Default to HOLDING path
    const url = `${path}?start=${0}&limit=${10}`;
    console.log('Fetching data from:', url);

    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error('Error fetching data for type:', type);
        console.error('Error details:', err);
        return throwError(err);
      })
    );
  }

  private nf_path = 'assets/pp/networkFactor/getNetworkFactor.json';

  getNetworkFactor(jsonPath: string = this.nf_path) {
    return this.http.get<any>(jsonPath).pipe(
      // delay(1200),
      catchError((err) => {
        console.error('Error fetching nf data', err);
        throw err;
      })
    );
  }

  private readonly paths2 = {
    today: 'assets/pp/swiper/today.json',
    overall: 'assets/pp/swiper/overall.json',
    return: 'assets/pp/swiper/return.json',
    risk:'assets/pp/swiper/risk.json',
    liquidity: 'assets/pp/swiper/liquidity.json',
    diversification: 'assets/pp/swiper/diversification.json',
    taxAnalysis: 'assets/pp/swiper/taxAnalysis.json',
    taxHistory: 'assets/pp/swiper/taxHistory.json',
  };

  getSwitcherDatas(
    type: 'today' | 'overall' | 'return' |'risk' | 'liquidity' | 'diversification' | 'taxAnalysis' | 'taxHistory'

  ) {
    const path = this.paths2[type] || this.paths2.today;

    return this.http.get<any>(path).pipe(
      catchError((err) => {
        console.error('Error fetching data for type:', type);
        console.error('Error details:', err);
        throw err;
      })
    );
  }

  private ixrrpath = 'assets/pp/swiper/getIXIRRData.json';
  getIxrrData(){
    return this.http.get<any>(this.ixrrpath).pipe(
      catchError((err) => {
        console.error('Error fetching ixrr :', err);
        throw err;
      })
    );
  }

  private qvflpath = 'assets/pp/swiper/getQVFLData.json';
  getQVFLData(){
    return this.http.get<any>(this.qvflpath).pipe(
      catchError((err) => {
        console.error('Error fetching qvfl :', err);
        throw err;
      })
    );
  }

  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);

  loading$ = this.loadingSubject.asObservable();
  error$ = this.errorSubject.asObservable();

  getGraphToday(): Observable<IGraphData> {
    const path = ' assets/pp/graph/getPortfolioGraph.json';
    this.loadingSubject.next(true); // Set loading to true

    return this.http.get<IGraphData>(path).pipe(
      // delay(1000),
      catchError((err) => {
        this.loadingSubject.next(false); // Set loading to false on error
        this.errorSubject.next('Error fetching graph data'); // Set error message
        // console.error('Error fetching graph data', err);
        return throwError(err); // Return an observable error
      }),
      finalize(() => this.loadingSubject.next(false)) // Emit loading false after HTTP request
    );
  }
}
