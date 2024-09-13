export interface IOverall {
  code: string
  message: string
  data: IOverall_Data
}

 export interface IOverall_Data  {
  quality: Quality
  valuation: Valuation
  fin_trend: FinTrend
  liquidity: Liquidity
  risk: Risk
  diversified: Diversified
  technical: Technical
  return: Return
  buyval: number
  sellval: number
  lval: number
  cash: number
  unrgain: number
  unrgaindir: number
  dividend: number
  divdir: number
  rgain: number
  rgaindir: number
  tgain: number
  tgaindir: number
  tstock: number
  tsector: number
  tailcnt: number
  tailpwt: number
  hisect: string
  hisectpwt: number
  himcap: string
  himcappwt: number
  histock: Histock
  incepdt: string
  overall: IOverall_sub
  tret: number
  tretdir: number
  tretp: number
  tretpdir: number
  overallage: string
}

 interface Quality {
  color: string
  text: string
}

 interface Valuation {
  color: string
  text: string
}

 interface FinTrend {
  color: string
  text: string
}

 interface Liquidity {
  color: string
  c_text: string
  text: string
}

 interface Risk {
  color: string
  c_text: string
  text: string
  beta: string
}

 interface Diversified {
  color: string
  text: string
}

 interface Technical {
  color: string
  text: string
}

 interface Return {
  txt1: string
  txt2: string
  compperform: string
  comperformby: number
  return: string
  returndir: number
  compo: string
  compodir: number
  dt: string
  returnsen: string
  sendir: number
  senperfomby: number
  senperfom: string
  divp: number
  dir: Dir
  dotclr: string
}

 interface Dir {
  comperformby: number
  senperfomby: number
}

 interface Histock {
  sid: number
  name: string
  pwt: number
}

 export interface IOverall_sub {
  unrgaindir: number
  contri: IContri[]
  drags: Drag[]
  gainers: Gainer[]
  losers: Loser[]
}

export interface IContri {
  sid: number
  sname: string
  short: string
  dotsum: Dotsum
  indcode: number
  indname: string
  exch: string
  exchcode: number
  cmp: number
  chg: number
  chgp: number
  cmpdir: number
  prevclose: number
  mcap: string
  sect_chgp: number
  show_mojostock: string
  show_fallstock: string
  product_icon_list: ProductIconList[]
  more_button: MoreButton
  lval: number
  unrgain: number
  unrgainp: number
  unrgaindir: number
  dgain: number
  dgainp: number
  dgaindir: number
}

 interface Dotsum {
  q_rank: any
  stk_sect: any
  q_txt: string
  v_rank: any
  v_txt: string
  f_pts?: number
  f_txt?: string
  f_clr: string
  sid: number
  f_dir: any
  prev_score: any
  q_dir: any
  tech_score: number
  tech_txt: string
  tech_clr: string
  q_clr: string
  v_clr: string
  score: number
  score_date: string
  scoreText: string
  prevScoreText: string
  prevScoreTextDate: string
  prevScore: any
  final_score_grade_41: string
  final_score_41_or: number
  current_final_score_grade_41: string
  current_final_score_41: any
  mfin_score: any
  scoreTextChange: number
  curfscore: any
  s_clr: string
}

 interface ProductIconList {
  name: string
  text: string
  url: string
  product_class: string
}

 interface MoreButton {
  show: number
  text: string
}

 interface Drag {
  sid: number
  sname: string
  short: string
  dotsum: Dotsum2
  indcode: number
  indname: string
  exch: string
  exchcode: number
  cmp: number
  chg: number
  chgp: number
  cmpdir: number
  prevclose: number
  mcap: string
  sect_chgp: number
  show_mojostock: string
  show_fallstock: string
  product_icon_list: ProductIconList2[]
  more_button: MoreButton2
  lval: number
  unrgain: number
  unrgainp: number
  unrgaindir: number
  dgain: number
  dgainp: number
  dgaindir: number
}

 interface Dotsum2 {
  q_rank: any
  stk_sect: any
  q_txt: string
  v_rank: any
  v_txt: string
  f_pts: number
  f_txt: string
  f_clr: string
  sid: number
  f_dir: number
  prev_score: number
  q_dir: number
  tech_score: number
  tech_txt: string
  tech_clr: string
  q_clr: string
  v_clr: string
  score: number
  score_date: string
  scoreText: string
  prevScoreText: string
  prevScoreTextDate: string
  prevScore: number
  final_score_grade_41: string
  final_score_41_or: number
  current_final_score_grade_41: string
  current_final_score_41: number
  mfin_score: number
  scoreTextChange: number
  curfscore: number
  s_clr: string
}

 interface ProductIconList2 {
  name: string
  text: string
  url: string
  product_class: string
}

 interface MoreButton2 {
  show: number
  text: string
}

 interface Gainer {
  sid: number
  sname: string
  short: string
  dotsum: Dotsum3
  indcode: number
  indname: string
  exch: string
  exchcode: number
  cmp: number
  chg: number
  chgp: number
  cmpdir: number
  prevclose: number
  mcap: string
  sect_chgp: number
  show_mojostock: string
  show_fallstock: string
  product_icon_list: ProductIconList3[]
  more_button: MoreButton3
  lval: number
  unrgain: number
  unrgainp: number
  unrgaindir: number
  dgain: number
  dgainp: number
  dgaindir: number
}

 interface Dotsum3 {
  q_rank: any
  stk_sect: any
  q_txt: string
  v_rank: any
  v_txt: string
  f_pts?: number
  f_txt?: string
  f_clr: string
  sid: number
  f_dir: any
  prev_score: any
  q_dir: any
  tech_score: number
  tech_txt: string
  tech_clr: string
  q_clr: string
  v_clr: string
  score: number
  score_date: string
  scoreText: string
  prevScoreText: string
  prevScoreTextDate: string
  prevScore: any
  final_score_grade_41: string
  final_score_41_or: number
  current_final_score_grade_41: string
  current_final_score_41: any
  mfin_score: any
  scoreTextChange: number
  curfscore: any
  s_clr: string
}

 interface ProductIconList3 {
  name: string
  text: string
  url: string
  product_class: string
}

 interface MoreButton3 {
  show: number
  text: string
}

 interface Loser {
  sid: number
  sname: string
  short: string
  dotsum: Dotsum4
  indcode: number
  indname: string
  exch: string
  exchcode: number
  cmp: number
  chg: number
  chgp: number
  cmpdir: number
  prevclose: number
  mcap: string
  sect_chgp: number
  show_mojostock: string
  show_fallstock: string
  product_icon_list: ProductIconList4[]
  more_button: MoreButton4
  lval: number
  unrgain: number
  unrgainp: number
  unrgaindir: number
  dgain: number
  dgainp: number
  dgaindir: number
}

 interface Dotsum4 {
  q_rank: any
  stk_sect: any
  q_txt: string
  v_rank: any
  v_txt: string
  f_pts: number
  f_txt: string
  f_clr: string
  sid: number
  f_dir: number
  prev_score: number
  q_dir: number
  tech_score: number
  tech_txt: string
  tech_clr: string
  q_clr: string
  v_clr: string
  score: number
  score_date: string
  scoreText: string
  prevScoreText: string
  prevScoreTextDate: string
  prevScore: number
  final_score_grade_41: string
  final_score_41_or: number
  current_final_score_grade_41: string
  current_final_score_41: number
  mfin_score: number
  scoreTextChange: number
  curfscore: number
  s_clr: string
}

 interface ProductIconList4 {
  name: string
  text: string
  url: string
  product_class: string
}

 interface MoreButton4 {
  show: number
  text: string
}
