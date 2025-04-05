export interface IRiskPopup {
  code:    string;
  message: string;
  data:    { [key: string]: IRisk_Data_Datum };
}

export interface IRisk_Data_Datum {
  sid:               number;
  sname:             string;
  short:             string;
  dotsum:            Dotsum;
  indcode:           number;
  indname:           string;
  exch:              Exch;
  exchcode:          number;
  cmp:               number;
  chg:               number;
  chgp:              number;
  cmpdir:            number;
  prevclose:         number;
  mcap:              number;
  sect_chgp:         number;
  show_mojostock:    ShowStock;
  show_fallstock:    ShowStock;
  product_icon_list: ProductIconList[];
  more_button:       MoreButton;
  mcapcls:           Mcapcls;
  Y1:                Y1;
  quart:             Quart;
  quartr:            QuartrClass | Quart;
  volatility:        number | Quart;
  riskadj:           number | Quart;
  beta:              number;
  riskval:           Quart | number;
  orgbeta:           number | Quart;
  lval:              number;
}

 interface Y1 {
  val: number | Quart;
  dir: Quart | number;
}

 enum Quart {
  Na = "NA",
  The1StQuartile = "1st Quartile",
  The2NdQuartile = "2nd Quartile",
}

 interface Dotsum {
  q_rank:                       number | string;
  stk_sect:                     number | string;
  q_txt:                        string;
  v_rank:                       number | string;
  v_txt:                        string;
  f_pts:                        number | null;
  f_txt:                        null | string;
  f_clr:                        CLR;
  sid:                          number;
  f_dir:                        Quart | number;
  prev_score:                   number | string;
  q_dir:                        Quart | number;
  tech_score:                   number;
  tech_txt:                     TechTxt;
  tech_clr:                     TechCLR;
  q_clr:                        CLR;
  v_clr:                        CLR;
  score:                        number;
  score_date:                   Date;
  scoreText:                    string;
  prevScoreText:                string;
  prevScoreTextDate:            Date;
  prevScore:                    number | string;
  final_score_grade_41:         string;
  final_score_41_or:            number;
  current_final_score_grade_41: string;
  current_final_score_41:       number | string;
  mfin_score:                   number | string;
  scoreTextChange:              number;
  curfscore:                    number | string;
  s_clr:                        string;
}

 enum CLR {
  Green = "green",
  Grey = "grey",
  Orange = "orange",
  Red = "red",
}

 enum TechCLR {
  Green = "Green",
  Red = "Red",
}

 enum TechTxt {
  Bullish = "Bullish",
  MildlyBearish = "Mildly Bearish",
  MildlyBullish = "Mildly Bullish",
}

 enum Exch {
  Bse = "BSE",
  Nse = "NSE",
}

 enum Mcapcls {
  LargeCap = "Large Cap",
  MicroCap = "Micro Cap",
  MidCap = "Mid Cap",
  SmallCap = "Small Cap",
}

 interface MoreButton {
  show: number;
  text: Text;
}

 enum Text {
  Empty = "",
  The1More = "+1 More",
}

 interface ProductIconList {
  name:          string;
  text:          string;
  url:           string;
  product_class: string;
}

 interface QuartrClass {
  from: number;
  to:   number;
}

 enum ShowStock {
  No = "no",
  Yes = "yes",
}
