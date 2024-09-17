export interface ILiquidity {
  code: string
  message: string
  data: ILiquidityData
}

export interface ILiquidityData {
  list: ILiqui_list[]
  total: Total
}

export interface ILiqui_list {
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
  qty: number
  d5avgvol: number
  qtyvol: number
  d5delivol: number
  qtydeli: number
  days: number
  risk: string
  riskdir: number
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

 interface Total {
  days: number
  lval: number
}
