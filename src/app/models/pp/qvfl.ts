 export interface IQvfl {
  code: string;
  message: string;
  data: IQvfl_Data;
}

export interface IQvfl_Data {
  quality: Quality;
  valuation: Valuation;
  fin_trend: FinTrend;
  liquidity: Liquidity;
}

 interface Quality {
  summary: Summary;
  summary_txt: string;
  graph: Graph;
  score: Score;
}

 interface Summary {
  avg: string[];
  excel: string[];
}

 interface Graph {
  [key: string]: number;
}

 interface Score {
  color: string;
  text: string;
}

 interface Valuation {
  summary: Summary2;
  summary_txt: string;
  graph: Graph2;
  score: Score2;
}

 interface Summary2 {
  expen: string[];
  attr: string[];
}

 interface Graph2 {
  [key: string]: number;
}

 interface Score2 {
  color: string;
  text: string;
}

 interface FinTrend {
  summary: Summary3;
  summary_txt: string;
  graph: Graph3;
  score: Score3;
}

 interface Summary3 {
  negative: string[];
  positive: string[];
}

 interface Graph3 {
  [key: string]: number;
}

 interface Score3 {
  color: string;
  text: string;
}

 interface Liquidity {
  summary: Summary4;
  summary_txt: string;
  graph: Graph4;
  score: Score4;
  issue_due_txt: string[];
}

 interface Summary4 {
  lissue: string[];
}

 interface Graph4 {
  [key: string]: number;
}

 interface Score4 {
  color: string;
  c_text: string;
  text: string;
}
