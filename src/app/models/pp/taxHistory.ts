export interface ITaxHistory {
  code:    string;
  message: string;
  data:    ITax_HistroyData;
}

export interface ITax_HistroyData {
  advtax: { [key: string]: Advtax };
  total:  { [key: string]: Total };
}

export interface Advtax {
  date:    string;
  rawdate: Date;
  stgain:  string;
  ltgain:  string;
  sttax:   string;
  lttax:   string;
  advtax:  string;
}

export interface Total {
  fy:       string;
  status:   number;
  rgain:    number;
  sttax:    number;
  lttax:    number;
  totaltax: number;
  capgain:  number;
}
