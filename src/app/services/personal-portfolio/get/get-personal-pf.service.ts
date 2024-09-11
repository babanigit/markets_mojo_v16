import { Injectable } from '@angular/core';
// import { IGetOverview } from '../../models/overview';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class GetPersonalPFService {
  private readonly paths = {
    OVERVIEW: 'assets/pp/table/getOverview.json',
    // HOLDING: 'https://frapi.marketsmojo.com/portfolioapi_portfolio/getHoldings' || 'assets/pp/table/getHolding.json' ,
    HOLDING: 'assets/pp/table/getHolding.json',
    RISK: 'assets/pp/table/getRisk.json',
    LIQUIDITY: 'assets/pp/table/getLiquidity.json',
    TAX: 'assets/pp/table/getTax.json',
    RATIOS: 'assets/pp/table/getRatio.json',
    FINANCIALS: 'assets/pp/table/getFinancials.json',
    RETURNS: 'assets/pp/table/getReturn.json',
    RESULTS: 'assets/pp/table/getResults.json',
    TOTAL_RETURNS: 'assets/pp/table/getTotalReturns.json',
  };

  private nf_path = 'assets/pp/networkFactor/getNetworkFactor.json';

  private readonly paths2 = {
    today: 'assets/pp/swiper/today.json',
    overall: 'assets/pp/swiper/overall.json',
    return: 'assets/pp/swiper/return.json',
    // LIQUIDITY: 'assets/pp/table/getLiquidity.json',
    // TAX: 'assets/pp/table/getTax.json',
    // RATIOS: 'assets/pp/table/getRatio.json',
    // FINANCIALS: 'assets/pp/table/getFinancials.json',
    // RETURNS: 'assets/pp/table/getReturn.json',
    // RESULTS: 'assets/pp/table/getResults.json',
    // TOTAL_RETURNS: 'assets/pp/table/getTotalReturns.json',
  };

  constructor(private http: HttpClient) {}

  getOverviewStocks(
    type:
      | 'OVERVIEW'
      | 'HOLDING'
      | 'RISK'
      | 'LIQUIDITY'
      | 'TAX'
      | 'RATIOS'
      | 'FINANCIALS'
      | 'RETURNS'
      | 'RESULTS'
      | 'TOTAL_RETURNS'
  ) {
    const path = this.paths[type] || this.paths.HOLDING; // default is holding
    console.log('the path in getOS : ', path);

    return this.http.get<any>(path).pipe(
      catchError((err) => {
        console.error('Error fetching data for type:', type);
        console.error('Error details:', err);
        throw err;
      })
    );
  }

  getNetworkFactor(jsonPath: string = this.nf_path) {
    return this.http.get<any>(jsonPath).pipe(
      // delay(1200),
      catchError((err) => {
        console.error('Error fetching nf data', err);
        throw err;
      })
    );
  }

  getSwitcherDatas(
    type: 'today' | 'overall' | 'return'
    // | 'LIQUIDITY'
    // | 'TAX'
    // | 'RATIOS'
    // | 'FINANCIALS'
    // | 'RETURNS'
    // | 'RESULTS'
    // | 'TOTAL_RETURNS'
  ) {
    const path = this.paths2[type] || this.paths2.today; // default is holding

    console.log('the path in getOS : ', path);

    return this.http.get<any>(path).pipe(
      catchError((err) => {
        console.error('Error fetching data for type:', type);
        console.error('Error details:', err);
        throw err;
      })
    );
  }
}
