import { Injectable } from '@angular/core';
import { GlobalService } from '@common/global';
import { ApiService } from '@services/api.service';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private _global: GlobalService, private api: ApiService) { }
  usersubscribe(email: string, src = '') {
    if (src == '')
      return this.api.getCall(environment.FRAPI_URL + "/common_commonservices/subscribe_user?email_id=" + email);
    else
      return this.api.getCall(environment.FRAPI_URL + "/common_commonservices/subscribe_user?email_id=" + email + "&src=" + src);
  }
  scriptSearch(str='') {
    return this.api.getCall(environment.MOJO_URL + 'common_services/searchScrips?SearchPhrase='+encodeURIComponent(str));
  }
  showCartData() {
    return this.api.getCall(this._global.FRAPI_URL + 'mutualfunds/showCartData');
  }
  fetchMojostocks() {
    return this.api.getCall(this._global.FRAPI_URL + 'stocks_mojostocks/getTopMojoStockCapWise');
  }
  startFreeTrial(obj: any = {}) {
    return this.api.call(environment.MOJO_URL + 'premium/freeTrialStockFeed', obj);
  }
  getNarratives(obj: any = {}) {
    return this.api.call(environment.FRAPI_URL + 'Usermessaging/marketing', obj);
  }
  addMojostockInWatchlist(obj: any = {}) {
    return this.api.call(environment.FRAPI_URL + 'newsalert/addMojoStockInWatchList', obj);
  }
  mojoStockList(obj: any = {}) {
    return this.api.call(environment.FRAPI_URL + 'stocks_mojostocks/mojoStockList', obj);
  }
  mojoStockHistory(obj: any = {}) {
    return this.api.call(environment.FRAPI_URL + 'stocks_mojostocks/mojoStockHistory?page=1', obj);
  }
  fetchResultCornerData(page: number) {
    return this.api.getCall(environment.FRAPI_URL + `screener_Resultcornerfinancialtrend/resultCornerNew?page=${page}`);
  } 
  getScreenerStockProduct(obj:any={}) {
    return this.api.call(environment.FRAPI_URL + 'screener_StockProduct/screenerBaseStockProduct',obj);
  }
  checkStrategyPages(obj:any={}) {
    return this.api.call(environment.FRAPI_URL + 'screener_StockProduct/checkStrategyPages',obj);
  }
  watchlistAdd(obj:any={}) {
    return this.api.call(environment.FRAPI_URL + 'watchlistapi_interactions/add',obj);
  }
  addStock(obj:any={}) {
    return this.api.call(environment.FRAPI_URL + 'portfolioplus_portfoliomanager/addStock',obj);
  }
  useraccountlist(obj:any={}) {
    return this.api.call(environment.FRAPI_URL + 'portfolioplus_account/useraccountlist',obj);
  }
  stockPriceOnDate(obj:any={}) {
    return this.api.call(environment.FRAPI_URL + 'common_stockservices/stockPriceOnDate',obj);
  }
  getStrategyGraphs(obj:any={}) {
    return this.api.call(environment.FRAPI_URL + 'screener_StockProduct/getStrategyGraphs',obj);
  }
  huddiDetails(obj:any={}) {
    return this.api.call(environment.FRAPI_URL + 'screener_stockproduct/huddiDetails',obj);
  }
  getHuddiUserDetails(obj:any={}) {
    return this.api.call(environment.FRAPI_URL + 'screener_stockproduct/getHuddiUserDetails',obj);
  }
  getAllPortfolioAccountList() {
    return this.api.getCall(environment.FRAPI_URL + 'portfolioapiv2_portfolio/getAllPortfolioAccounts');
  }
  getAllValue(obj:any={}) {
    return this.api.call(environment.FRAPI_URL + 'mojoportfolio/getAllvalue',obj);
  }
  getTopvalue(obj:any={}) {
    return this.api.call(environment.FRAPI_URL + 'mojoportfolio/getTopvalue',obj);
  }
  deleteAccount(obj: any = {}) {
    return this.api.call(environment.FRAPI_URL + 'portfolioplus_account/removeaccount', obj)
  }
  stopTrackingPortfolio(obj: any = {}) {
    return this.api.call(environment.FRAPI_URL + 'modelportfolio_fundtech/fullwithdraw', obj)
  }
  changeAccount(accId: any) {
    return this.api.getCall(environment.FRAPI_URL + `portfolioapiv2_portfolio/changeAccountNormal?acc_id=${accId}`);
  }
  getOneViewHoldings(accId: any) {
    return this.api.getCall(environment.FRAPI_URL + `portfolioapi_portfolio/getHoldings`);
  }
  getRatio() {
    return this.api.getCall(environment.FRAPI_URL + 'portfolioapi_portfolio/getRatio');
  }
  getFinancials() {
    return this.api.getCall(environment.FRAPI_URL + 'portfolioapi_portfolio/getFinancial');
  }
  getReturns() {
    return this.api.getCall(environment.FRAPI_URL + 'portfolioapi_portfolio/getReturns');
  }
  getResults() {
    return this.api.getCall(environment.FRAPI_URL + 'portfolioapi_portfolio/getResult');
  }
  totalReturns() {
    return this.api.getCall(environment.FRAPI_URL + 'portfolioapi_portfolio/totalReturns');
  }
  getOverview() {
    return this.api.getCall(environment.FRAPI_URL + 'portfolioapi_portfolio/getOverview');
  }
  getRisk() {
    return this.api.getCall(environment.FRAPI_URL + 'portfolioapi_portfolio/getRisk');
  }
  getLiquidity() {
    return this.api.getCall(environment.FRAPI_URL + 'portfolioapiv2_portfolio/getLiquidity');
  }
  getTax() {
    return this.api.getCall(environment.FRAPI_URL + 'portfolioapiv2_portfolio/getTax');
  }
  getirr(accid:any, months:any) {
    return this.api.getCall(environment.FRAPI_URL + 'mojoportfolio/getirr/' + accid + "/" + months );
  }
  getReturnDot() {
    return this.api.getCall(environment.FRAPI_URL + 'portfolioapiv2_portfolio/getReturnDot');
  }
  saveLeadForm(obj:any={}) {
    return this.api.call(environment.FRAPI_URL + 'usermessaging/saveLeadForm',obj);
  }
  getWebinarMail(obj:any) {
    return this.api.call(environment.FRAPI_URL + 'common_commonservices/sentwebinarMail', obj);
  }
  getUserLoginHash() {
    return this.api.getCall(environment.FRAPI_URL + 'Usermessaging/getUserLoginHash');
  }
  lastVisitedSearch() {
    return this.api.getCall(environment.MOJO_URL + 'common_services/searchScripsRecent?domain=mm&u=' + btoa(String(0)));
  }
  getSOTWMapi(obj:any) {
    return this.api.call(environment.FRAPI_URL + "Sotmw_Sotmw/sotmwapi", obj);
  }
  getGenerateOTPSOTWM(obj:any) {
    return this.api.call(environment.FRAPI_URL + "Sotmw_Sotmw/generateOtp", obj);
  }
  getVerifyOTPSOTWM(obj:any) {
    return this.api.call(environment.FRAPI_URL + "Sotmw_Sotmw/verifyOtp", obj);
  }
  tshirtSave(obj: any = {}) {
    return this.api.call(environment.MOJO_URL + 'mojo/add_tshirt_details', obj);
  }
  getTshirtOrderDetails(obj: any = {}) {
    return this.api.call(environment.MOJO_URL + 'mojo/getTshirtOrderDetails', obj);
  }
}
