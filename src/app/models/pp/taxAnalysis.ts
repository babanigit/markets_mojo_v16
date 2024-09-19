export interface ItaxAnalysis {
  code:    string;
  message: string;
  data:    ITax_Analysis_Data;
}

export interface ITax_Analysis_Data {
  expire:   Expire;
  lval:     number;
  ptv:      number;
  sttax:    number;
  lttax:    number;
  totaltax: number;
  dir:      Dir;
  ptvtxt:   string;
  agetxt:   string;
  list:     List[];
}

export interface Dir {
  stcapgain: number;
  ltcapgain: number;
  totaltax:  number;
  sttax:     number;
  lttax:     number;
}

export interface Expire {
  error: string;
}

export interface List {
  sid:               number;
  sname:             string;
  short:             string;
  dotsum:            Dotsum;
  indcode:           number;
  indname:           string;
  exch:              string;
  exchcode:          number;
  cmp:               number;
  chg:               number;
  chgp:              number;
  cmpdir:            number;
  prevclose:         number;
  mcap:              string;
  sect_chgp:         number;
  show_mojostock:    string;
  show_fallstock:    string;
  product_icon_list: ProductIconList[];
  more_button:       MoreButton;
  iqty:              number;
  idate:             string;
  stgain:            number;
  ltgain:            number;
  days:              number;
  lval:              number;
  yearhold:          number;
  dayrank:           number;
  day:               number;
  pwt:               number;
}

export interface Dotsum {
  q_rank:                       number;
  stk_sect:                     number;
  q_txt:                        string;
  v_rank:                       number;
  v_txt:                        string;
  f_pts:                        number;
  f_txt:                        string;
  f_clr:                        string;
  sid:                          number;
  f_dir:                        number;
  prev_score:                   number;
  q_dir:                        number | string;
  tech_score:                   number;
  tech_txt:                     string;
  tech_clr:                     string;
  q_clr:                        string;
  v_clr:                        string;
  score:                        number;
  score_date:                   Date;
  scoreText:                    string;
  prevScoreText:                string;
  prevScoreTextDate:            Date;
  prevScore:                    number;
  final_score_grade_41:         string;
  final_score_41_or:            number;
  current_final_score_grade_41: string;
  current_final_score_41:       number;
  mfin_score:                   number;
  scoreTextChange:              number;
  curfscore:                    number;
  s_clr:                        string;
}

export interface MoreButton {
  show: number;
  text: string;
}

export interface ProductIconList {
  name:          string;
  text:          string;
  url:           string;
  product_class: string;
}
