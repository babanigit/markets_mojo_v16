import { Injectable } from '@angular/core';
// import { IGetOverview } from '../../models/overview';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetPersonalPFService {
  private readonly paths = {
    OVERVIEW: 'assets/pp/getOverview.json',
    HOLDING: 'assets/pp/getHolding.json',
    RISK: 'assets/pp/getRisk.json',
    LIQUIDITY: 'assets/pp/getLiquidity.json',
    TAX: 'assets/pp/getTax.json',
    RATIOS: 'assets/pp/getRatio.json',
    // FINANCIALS: 'assets/pp/getFinancials.json',
    // RETURN: 'assets/pp/getReturn.json',
    // RESULT: 'assets/pp/getResult.json',
    // TOTALRETURNS: 'assets/pp/getTotalReturns.json',

  };

  constructor(private http: HttpClient) {}

  getOverviewStocks(type: 'OVERVIEW' | 'HOLDING' | 'RISK' | 'LIQUIDITY' | 'TAX' | 'RATIOS') {

    const path = this.paths[type] || this.paths.HOLDING; // default is holding

    console.log('the path in getOS : ', path);

    return this.http.get<any>(path).pipe(
      // delay(1200),
      catchError((err) => {
        console.error('Error fetching overview data', err);
        throw err;
      })
    );
  }
}
