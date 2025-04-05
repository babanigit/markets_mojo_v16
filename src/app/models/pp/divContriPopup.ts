export interface IDivContriPopup {
  code:    string;
  message: string;
  data:    IDivContriPopup_data[];
}

export interface IDivContriPopup_data {
  sid:      number;
  date:     string;
  rawdt:    Date;
  sname:    string;
  dividend: number;
}
