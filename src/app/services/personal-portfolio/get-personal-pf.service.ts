import { Injectable } from '@angular/core';
// import { IGetOverview } from '../../models/overview';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPersonalPFService {

  private readonly paths = {
    OVERVIEW: 'assets/pp/getOverview.json',
    HOLDING: 'assets/pp/getHolding.json',
    RISK: 'assets/pp/getRisk.json',
    LIQUIDITY: 'assets/pp/getLiquidity.json'

  };

  constructor(
    private http: HttpClient
  ) { }

  getOverviewStocks(type: 'OVERVIEW' | 'HOLDING'|'RISK'| 'LIQUIDITY') {

    const path = this.paths[type] || this.paths.HOLDING; // default is holding

    console.log("the path in getOS : " , path);

    return this.http.get<any>(path).pipe(

      // delay(1200),
      catchError((err) => {
        console.error('Error fetching overview data', err);
        throw err;
      })
    );
  }

}
