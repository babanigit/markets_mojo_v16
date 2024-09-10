import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
// import { GlobalService } from '@common/global';
// import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) {
  }
  public call(url:string, params:object,type='') {
    let ctype='application/x-www-form-urlencoded';
    if(type=='formdata'){
      ctype='multipart/form-data';
    } else if (type == 'json') {
      ctype='application/json';
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': ctype,
        'Accept': 'application/json'
      }),
      withCredentials: true
    };

    return this.http.post(url, params, httpOptions);

  }
  public callFormdata(url:string, params:object,type='') {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }),
      withCredentials: true
    };

    return this.http.post<any>(url, params, { withCredentials: true});

  }
  public getCall(url:string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
      withCredentials: true,
    };

    return this.http.get(url,httpOptions);

  }
}
