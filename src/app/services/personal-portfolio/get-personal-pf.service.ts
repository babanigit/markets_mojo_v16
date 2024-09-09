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
        console.error('Error fetching overview data', err);
        throw err;
      })
    );
  }
}
