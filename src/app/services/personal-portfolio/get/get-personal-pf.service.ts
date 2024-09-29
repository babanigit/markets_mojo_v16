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
import { ITodayGraph } from 'src/app/models/pp/todayGraph';

@Injectable({
  providedIn: 'root',
})
export class GetPersonalPFService {
  private readonly FROM_EXPRESS_API: boolean = false;
  private readonly Table_paths: { [key in TableType]: string };

  constructor(private http: HttpClient) {
    this.Table_paths = this.FROM_EXPRESS_API
      ? {
        OVERVIEW: 'https://api-marketsmojo-express.onrender.com/api/personalportfolio/overview',
        HOLDING: 'https://api-marketsmojo-express.onrender.com/api/personalportfolio/holding',
        RISK: 'https://api-marketsmojo-express.onrender.com/api/personalportfolio/risk',
        LIQUIDITY: 'https://api-marketsmojo-express.onrender.com/api/personalportfolio/liquidity',
        TAX: 'https://api-marketsmojo-express.onrender.com/api/personalportfolio/tax',
        RATIOS: 'https://api-marketsmojo-express.onrender.com/api/personalportfolio/ratios',
        FINANCIALS: 'https://api-marketsmojo-express.onrender.com/api/personalportfolio/financials',
        RETURNS: 'https://api-marketsmojo-express.onrender.com/api/personalportfolio/returns',
        RESULTS: 'https://api-marketsmojo-express.onrender.com/api/personalportfolio/rsults',
        TOTAL_RETURNS:
          'https://api-marketsmojo-express.onrender.com/api/personalportfolio/totalReturns',
        PRICE: '',
        CONTRIBUTION: '',
        DIVIDEND: '',
        MOJO: '',
      }
      : {
        OVERVIEW: 'assets/pp/table/getOverview.json',
        HOLDING: 'assets/pp/table/getHolding.json',
        RISK: 'assets/pp/table/getRisk.json',
        LIQUIDITY: 'assets/pp/table/getLiquidity.json',
        TAX: 'assets/pp/table/getTax.json',
        RATIOS: 'assets/pp/table/getRatio.json',
        FINANCIALS: 'assets/pp/table/getFinancials.json',
        RETURNS: 'assets/pp/table/getReturn.json',
        RESULTS: 'assets/pp/table/getResults.json',
        TOTAL_RETURNS: 'assets/pp/table/getTotalReturns.json',
        PRICE: '',
        CONTRIBUTION: '',
        DIVIDEND: '',
        MOJO: '',
      };
  }

  private userMesagePath = 'assets/pp/swiper/userMessaging.json';
  getUserMessage(jsonPath: string = this.userMesagePath) {
    return this.http.get<any>(jsonPath).pipe(
      delay(1200),
      catchError((err) => {
        console.error('Error riskpopup data', err);
        throw err;
      })
    );
  }

  getOverviewStocks(type: TableType): Observable<any> {
    const path = this.Table_paths[type] || this.Table_paths.HOLDING; // Default to HOLDING path
    const url = `${path}?start=${0}&limit=${10}`;
    // console.log('Fetching data from:', url);

    return this.http.get<any>(url).pipe(
      delay(1200),
      catchError((err) => {
        console.error('Error fetching data for type:', type);
        console.error('Error details:', err);
        return throwError(err);
      })
    );
  }

  private readonly taxPopupPath = {
    detail: 'assets/pp/swiper/taxAnalysisdetailPopup.json',
    history: 'assets/pp/swiper/taxHistoryPopup.json',
    // Holdings: 'assets/pp/swiper/diversifyHoldings.json',
  };

  getTaxPopup(type: 'detail' | 'history') {
    const path = this.taxPopupPath[type] || this.taxPopupPath.detail;

    return this.http.get<any>(path).pipe(
      delay(1200),
      catchError((err) => {
        console.error('Error fetching data for type:', type);
        console.error('Error details:', err);
        throw err;
      })
    );
  }

  private readonly diversifyPaths = {
    Sector: 'assets/pp/swiper/diversifySector.json',
    Mcap: 'assets/pp/swiper/diversifyMcap.json',
    Holdings: 'assets/pp/swiper/diversifyHoldings.json',
  };

  getDiversifyPopupData(type: 'Sector' | 'Mcap' | 'Holdings') {
    const path = this.diversifyPaths[type] || this.diversifyPaths.Sector;

    return this.http.get<any>(path).pipe(
      delay(1200),
      catchError((err) => {
        console.error('Error fetching data for type:', type);
        console.error('Error details:', err);
        throw err;
      })
    );
  }

  private riskpopuppath = 'assets/pp/swiper/getRiskPopup.json';

  getRiskPopup(jsonPath: string = this.riskpopuppath) {
    return this.http.get<any>(jsonPath).pipe(
      delay(1200),
      catchError((err) => {
        console.error('Error riskpopup data', err);
        throw err;
      })
    );
  }

  private divcontripath = 'assets/pp/swiper/divContriPopup.json';

  getDivContri(jsonPath: string = this.divcontripath) {
    return this.http.get<any>(jsonPath).pipe(
      delay(1200),
      catchError((err) => {
        console.error('Error fetching divcontripath data', err);
        throw err;
      })
    );
  }
  private diversifyPath = 'assets/pp/swiper/diversifyStocks.json';
  getDiversifyStocks(jsonPath: string = this.diversifyPath) {
    return this.http.get<any>(jsonPath).pipe(
      delay(1200),
      catchError((err) => {
        console.error('Error fetching diversifyStocks data', err);
        throw err;
      })
    );
  }

  private cr = 'assets/pp/swiper/compareReturnPopup.json';
  getCompareReturn(jsonPath: string = this.cr) {
    return this.http.get<any>(jsonPath).pipe(
      delay(1200),
      catchError((err) => {
        console.error('Error fetching diversifyStocks data', err);
        throw err;
      })
    );
  }

  private nf_path = 'assets/pp/networkFactor/getNetworkFactor.json';
  getNetworkFactor(jsonPath: string = this.nf_path) {
    return this.http.get<any>(jsonPath).pipe(
      delay(1200),
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
    risk: 'assets/pp/swiper/risk.json',
    liquidity: 'assets/pp/swiper/liquidity.json',
    diversification: 'assets/pp/swiper/diversification.json',
    taxAnalysis: 'assets/pp/swiper/taxAnalysis.json',
    taxHistory: 'assets/pp/swiper/taxHistory.json',
  };

  getSwitcherDatas(
    type:
      | 'today'
      | 'overall'
      | 'return'
      | 'risk'
      | 'liquidity'
      | 'diversification'
      | 'taxAnalysis'
      | 'taxHistory'
  ) {
    const path = this.paths2[type] || this.paths2.today;

    return this.http.get<any>(path).pipe(
      delay(1200),
      catchError((err) => {
        console.error('Error fetching data for type:', type);
        console.error('Error details:', err);
        throw err;
      })
    );
  }

  private ixrrpath = 'assets/pp/swiper/getIXIRRData.json';
  getIxrrData() {
    return this.http.get<any>(this.ixrrpath).pipe(
      delay(1200),
      catchError((err) => {
        console.error('Error fetching ixrr :', err);
        throw err;
      })
    );
  }

  private qvflpath = 'assets/pp/swiper/getQVFLData.json';
  getQVFLData() {
    return this.http.get<any>(this.qvflpath).pipe(
      delay(1200),
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

  getGraphToday(): Observable<ITodayGraph> {
    const path = ' assets/pp/graph/getPortfolioGraph.json';
    this.loadingSubject.next(true); // Set loading to true

    return this.http.get<ITodayGraph>(path).pipe(
      delay(1200),
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
