export interface ICompareReturnPopup {
  code:    string;
  message: string;
  data:    ICompareReturnPopup_data;
}

export interface ICompareReturnPopup_data {
  absret:   Absret;
  divrec:   Absret;
  return:   Absret;
  comp:     Absret;
  sensex:   Absret;
  midcap:   Absret;
  smallcap: Absret;
}

 interface Absret {
  W1:     M1;
  M1:     M1;
  M3:     M1;
  M6:     M1;
  YTD:    M1;
  Y1:     M1;
  Y2:     M1;
  Y3:     M1;
  incept: M1;
}

 interface M1 {
  val: number;
  dir: number;
}
