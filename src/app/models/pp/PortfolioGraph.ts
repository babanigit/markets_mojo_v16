 export interface IPortfolioGraph {
  code:    string;
  message: string;
  data:    IPortfolioGraph_Data
}

 export interface IPortfolioGraph_Data {
  "1M":      The1_M;
  "3M":      The1_M;
  "6M":      The1_M;
  YTD:       The1_M;
  "1Y":      The1_M;
  "3Y":      The1_M;
  inception: The1_M;
}

 interface The1_M {
  port_prevclose: number;
  idx_prevclose:  number;
  sensex:         number;
  portret:        number;
  compret:        number;
  sensexdir:      number;
  portdir:        number;
  compdir:        number;
  low:            number;
  high:           number;
  plotgraph:      Plotgraph[];
}

 interface Plotgraph {
  dt:        Date;
  disdt:     string;
  port:      number;
  portcolor: Color;
  idxcolor:  Color;
  portidx:   number;
}

 enum Color {
  Dd7470 = "#DD7470",
  The3Fc499 = "#3FC499",
}