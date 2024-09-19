export interface IHoldings {
  code: string;
  message: string;
  data: IHoldingsData
}

export interface IHoldingsData {
  list: { [key: string]: I_List_Holding };
  higestreturn: Higestreturn;
  topgainer: Topgainer;
  total: Total;
  header: Header;
  other: Other;
  pf_score: PfScore;
  sceniaros_txt: SceniarosTxt;
  opti_profile: string;
}

 interface Header {
  dgain: number;
  dgainp: number;
  dgaindir: number;
}

 interface Higestreturn {
  gain: number;
  gainp: number;
  sid: number;
  sname: string;
}

export interface I_List_Holding {
  sid: number;
  sname: string;
  short: string;
  dotsum: Dotsum;
  indcode: number;
  indname: string;
  exch: Exch;
  exchcode: number;
  cmp: number;
  chg: number;
  chgp: number;
  cmpdir: number;
  prevclose: number;
  mcap: number;
  sect_chgp: number;
  show_mojostock: ShowStock;
  show_fallstock: ShowStock;
  product_icon_list: ProductIconList[];
  more_button: MoreButton;
  dl: number;
  dh: number;
  wk52l: number;
  wk52ldt: Date;
  wk52h: number;
  wk52hdt: Date;
  atl: number;
  atldt: Date;
  ath: number;
  athdt: Date;
  cvol: number;
  cvolp: number;
  cvoldir: number;
  mcapcls: string;
  div: number;
  var: number;
  iprice: number;
  ival: number;
  dgain: number;
  dgainp: number;
  dgaindir: number;
  unrgain: number;
  unrgainp: number;
  unrgaindir: number;
  lval: number;
  iqty: number;
  tret: number;
  tretp: number;
  tretdir: number;
  corpadj: number;
  risk: Risk;
  details?: Detail[];
  pwt: number;
  unrgaincontri: number;
  idate?: string;
}

 interface Detail {
  sid: number;
  tranxtype: number;
  tranxtxt: string;
  iprice: number;
  iqty: number;
  qtyunadj: number;
  ival: number;
  idate: string;
  dt: Date;
  rawdate: Date;
  dgain: number;
  dgainp: number;
  dgaindir: number;
  unrgain: number;
  unrgainp: number;
  unrgaindir: number;
  lval: number;
  rgain: number;
}

 interface Dotsum {
  q_rank: number | string;
  stk_sect: number | string;
  q_txt: string;
  v_rank: number | string;
  v_txt: string;
  f_pts: number | null;
  f_txt: null | string;
  f_clr: string;
  sid: number;
  f_dir: number | string;
  prev_score: number | string;
  q_dir: number | string;
  tech_score: number;
  tech_txt: string;
  tech_clr: TechCLR;
  q_clr: string;
  v_clr: CLR;
  score: number;
  score_date: Date;
  scoreText: string;
  prevScoreText: string;
  prevScoreTextDate: Date;
  prevScore: number | string;
  final_score_grade_41: string;
  final_score_41_or: number;
  current_final_score_grade_41: string;
  current_final_score_41: number | string;
  mfin_score: number | string;
  scoreTextChange: number;
  curfscore: number | string;
  s_clr: string;
}

 enum TechCLR {
  Green = 'Green',
  Orange = 'Orange',
  Red = 'Red',
}

 enum CLR {
  Green = 'green',
  Red = 'red',
}

 enum Exch {
  Bse = 'BSE',
  Nse = 'NSE',
}

 interface MoreButton {
  show: number;
  text: Text;
}

 enum Text {
  Empty = '',
  The1More = '+1 More',
}

 interface ProductIconList {
  name: string;
  text: string;
  url: string;
  product_class: string;
}

 enum Risk {
  No = 'No',
}

 enum ShowStock {
  No = 'no',
  Yes = 'yes',
}

 interface Other {
  paid: number;
}

 interface PfScore {
  show: number;
  score: number;
  score_txt: string;
  perc: number;
  grade_arr: Arr;
  cls_arr: Arr;
  pf_clr_txt: string;
  msgtype: string;
  txt: string;
  msg_dir: string;
  footer: string;
  button: string;
  dir_img: string;
  dir_msg: string;
  txt_clr: CLR;
}

 interface Arr {
  Poor: string;
  'Below Average': string;
  Average: string;
  Good: string;
  Excellent: string;
}

 interface SceniarosTxt {
  msgtype: string;
  txt: string;
  msg_dir: string;
  footer: string;
}

 interface Topgainer {
  gainperc: number;
  sid: number;
  sname: string;
}

 interface Total {
  cap: Cap;
  sector: { [key: string]: Large };
  top3: number[];
  tail: number[];
  remain: number[];
  ival: number;
  lval: number;
  dgain: number;
  dgainp: number;
  dgaindir: number;
  unrgain: number;
  unrgainp: number;
  unrgaindir: number;
  unrgaincontri: number;
  tret: number;
  tretp: number;
  tretdir: number;
  tretpdir: number;
  dividend: number;
  divdir: number;
  rgain: number;
  rgaindir: number;
  tgain: number;
  tgaindir: number;
}

 interface Cap {
  large: Large;
  small: Large;
  mid: Large;
  micro: Large;
}

 interface Large {
  pwt: number;
  unrgain: number;
  unrgaincont: number;
  unrgaindir: number;
}
