export interface IDiversifyStocks {
  code: string;
  message: string;
  data: IDiversifyStocks_Data;
}

export interface IDiversifyStocks_Data {
  'Large Cap': LargeCap;
  'Mid Cap': MidCap;
  'Small Cap': SmallCap;
  'Micro Cap': MicroCap;
}

 interface LargeCap {
  name: Name;
  details: { [key: string]: LargeCapDetail };
  total: { [key: string]: number };
}

 interface LargeCapDetail {
  short: string;
  indcode: number;
  indname: string;
  mcap: Name;
  sect_chgp: number;
  chgp: number;
  unrgain: number;
  unrgaindir: number;
  dgain: number;
  dgainpdir: number;
  dgainp: number;
  stockprevval: number;
  y1ret: number;
  quartile: number | string;
  pwt: number;
  contri: number;
}

 enum Name {
  LargeCap = 'Large Cap',
  MicroCap = 'Micro Cap',
  MidCap = 'Mid Cap',
  SmallCap = 'Small Cap',
}

 interface MicroCap {
  name: Name;
  details: { [key: string]: MicroCapDetail };
  total: { [key: string]: number };
}

 interface MicroCapDetail {
  short: string;
  indcode: number;
  indname: string;
  mcap: Name;
  sect_chgp: number;
  chgp: number;
  unrgain: number;
  unrgaindir: number;
  dgain: number;
  dgainpdir: number;
  dgainp: number;
  stockprevval: number;
  y1ret: number | string;
  quartile: number | string;
  pwt: number;
  contri: number;
}

 interface MidCap {
  name: Name;
  details: { [key: string]: The454045_Value };
  total: { [key: string]: number };
}

 interface The454045_Value {
  short: string;
  indcode: number;
  indname: string;
  mcap: Name;
  sect_chgp: number;
  chgp: number;
  unrgain: number;
  unrgaindir: number;
  dgain: number;
  dgainpdir: number;
  dgainp: number;
  stockprevval: number;
  y1ret: number;
  quartile: number;
  pwt: number;
  contri: number;
}

 interface SmallCap {
  name: Name;
  details: Details;
  total: { [key: string]: number };
}

 interface Details {
  '454045': The454045_Value;
}
