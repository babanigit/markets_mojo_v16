export interface IRisk {
  code: string
  message: string
  data: IRisk_Data
}

export interface IRisk_Data {
  error: string
  score: IScore_risk
  volatility: Volatility
  beta: Beta
  var: Var
  return: Return
  allocation: Allocation
}

export interface IScore_risk {
  color: string
  c_text: string
  text: string
  beta: string
}

 interface Volatility {
  port: number
  comp: number
  sensex: number
  txt1: string
  txt1clr: string
  txt2: string
  txt3: string
}

 interface Beta {
  txt1: string
  txt1dir: number
  txt2: string
  txt3: string
  graph: Graph[]
  beta_val: number
}

 interface Graph {
  year: string
  dt: string
  disdt: string
  port: number
  portidx: number
  sensex: any
  senidx: number
}

 interface Var {
  txt1: string
  txt2: string
  txt3: string
  var_val: string
}

 interface Return {
  txt1: string
  txt2: string
  port: Port
  comp: Comp
  txt3: string
}

 interface Port {
  return: number
  riskAdj: number
  volatility: number
}

 interface Comp {
  return: number
  riskAdj: number
  volatility: number
}

 interface Allocation {
  graph: Graph2
  txt1: string
  txt2: string
}

 interface Graph2 {
  details: Details
  data: Data2
}

 interface Details {
  "Large Cap": LargeCap
  "Mid Cap": MidCap
  "Small Cap": SmallCap
  "Micro Cap": MicroCap
}

 interface LargeCap {
  name: string
  details: Details2
  total: Total
}

 interface Details2 {
  "421555": N421555
  "431628": N431628
  "837957": N837957
  "616556": N616556
  "234277": N234277
  "1002872": N1002872
  "1003648": N1003648
  "1003566": N1003566
  "1003511": N1003511
}

 interface N421555 {
  short: string
  indcode: number
  indname: string
  mcap: string
  sect_chgp: number
  chgp: number
  unrgain: number
  unrgaindir: number
  dgain: number
  dgainpdir: number
  dgainp: number
  stockprevval: number
  y1ret: number
  quartile: number
  pwt: number
  contri: number
}

 interface N431628 {
  short: string
  indcode: number
  indname: string
  mcap: string
  sect_chgp: number
  chgp: number
  unrgain: number
  unrgaindir: number
  dgain: number
  dgainpdir: number
  dgainp: number
  stockprevval: number
  y1ret: number
  quartile: number
  pwt: number
  contri: number
}

 interface N837957 {
  short: string
  indcode: number
  indname: string
  mcap: string
  sect_chgp: number
  chgp: number
  unrgain: number
  unrgaindir: number
  dgain: number
  dgainpdir: number
  dgainp: number
  stockprevval: number
  y1ret: number
  quartile: number
  pwt: number
  contri: number
}

 interface N616556 {
  short: string
  indcode: number
  indname: string
  mcap: string
  sect_chgp: number
  chgp: number
  unrgain: number
  unrgaindir: number
  dgain: number
  dgainpdir: number
  dgainp: number
  stockprevval: number
  y1ret: number
  quartile: number
  pwt: number
  contri: number
}

 interface N234277 {
  short: string
  indcode: number
  indname: string
  mcap: string
  sect_chgp: number
  chgp: number
  unrgain: number
  unrgaindir: number
  dgain: number
  dgainpdir: number
  dgainp: number
  stockprevval: number
  y1ret: number
  quartile: number
  pwt: number
  contri: number
}

 interface N1002872 {
  short: string
  indcode: number
  indname: string
  mcap: string
  sect_chgp: number
  chgp: number
  unrgain: number
  unrgaindir: number
  dgain: number
  dgainpdir: number
  dgainp: number
  stockprevval: number
  y1ret: number
  quartile: number
  pwt: number
  contri: number
}

 interface N1003648 {
  short: string
  indcode: number
  indname: string
  mcap: string
  sect_chgp: number
  chgp: number
  unrgain: number
  unrgaindir: number
  dgain: number
  dgainpdir: number
  dgainp: number
  stockprevval: number
  y1ret: number
  quartile: string
  pwt: number
  contri: number
}

 interface N1003566 {
  short: string
  indcode: number
  indname: string
  mcap: string
  sect_chgp: number
  chgp: number
  unrgain: number
  unrgaindir: number
  dgain: number
  dgainpdir: number
  dgainp: number
  stockprevval: number
  y1ret: number
  quartile: string
  pwt: number
  contri: number
}

 interface N1003511 {
  short: string
  indcode: number
  indname: string
  mcap: string
  sect_chgp: number
  chgp: number
  unrgain: number
  unrgaindir: number
  dgain: number
  dgainpdir: number
  dgainp: number
  stockprevval: number
  y1ret: number
  quartile: string
  pwt: number
  contri: number
}

 interface Total {
  pwt: number
  contri: number
  unrgain: number
  dgain: number
  unrgaindir: number
  dgainp: number
  dgainpdir: number
}

 interface MidCap {
  name: string
  details: Details3
  total: Total2
}

 interface Details3 {
  "119922": N119922
  "302744": N302744
  "400868": N400868
  "304521": N304521
}

 interface N119922 {
  short: string
  indcode: number
  indname: string
  mcap: string
  sect_chgp: number
  chgp: number
  unrgain: number
  unrgaindir: number
  dgain: number
  dgainpdir: number
  dgainp: number
  stockprevval: number
  y1ret: number
  quartile: number
  pwt: number
  contri: number
}

 interface N302744 {
  short: string
  indcode: number
  indname: string
  mcap: string
  sect_chgp: number
  chgp: number
  unrgain: number
  unrgaindir: number
  dgain: number
  dgainpdir: number
  dgainp: number
  stockprevval: number
  y1ret: number
  quartile: number
  pwt: number
  contri: number
}

 interface N400868 {
  short: string
  indcode: number
  indname: string
  mcap: string
  sect_chgp: number
  chgp: number
  unrgain: number
  unrgaindir: number
  dgain: number
  dgainpdir: number
  dgainp: number
  stockprevval: number
  y1ret: number
  quartile: number
  pwt: number
  contri: number
}

 interface N304521 {
  short: string
  indcode: number
  indname: string
  mcap: string
  sect_chgp: number
  chgp: number
  unrgain: number
  unrgaindir: number
  dgain: number
  dgainpdir: number
  dgainp: number
  stockprevval: number
  y1ret: number
  quartile: number
  pwt: number
  contri: number
}

 interface Total2 {
  pwt: number
  contri: number
  unrgain: number
  dgain: number
  unrgaindir: number
  dgainp: number
  dgainpdir: number
}

 interface SmallCap {
  name: string
  details: Details4
  total: Total3
}

 interface Details4 {
  "454045": N454045
}

 interface N454045 {
  short: string
  indcode: number
  indname: string
  mcap: string
  sect_chgp: number
  chgp: number
  unrgain: number
  unrgaindir: number
  dgain: number
  dgainpdir: number
  dgainp: number
  stockprevval: number
  y1ret: number
  quartile: number
  pwt: number
  contri: number
}

 interface Total3 {
  pwt: number
  contri: number
  unrgain: number
  dgain: number
  unrgaindir: number
  dgainp: number
  dgainpdir: number
}

 interface MicroCap {
  name: string
  details: Details5
  total: Total4
}

 interface Details5 {
  "10039196": N10039196
  "151046": N151046
  "161419": N161419
}

 interface N10039196 {
  short: string
  indcode: number
  indname: string
  mcap: string
  sect_chgp: number
  chgp: number
  unrgain: number
  unrgaindir: number
  dgain: number
  dgainpdir: number
  dgainp: number
  stockprevval: number
  y1ret: string
  quartile: string
  pwt: number
  contri: number
}

 interface N151046 {
  short: string
  indcode: number
  indname: string
  mcap: string
  sect_chgp: number
  chgp: number
  unrgain: number
  unrgaindir: number
  dgain: number
  dgainpdir: number
  dgainp: number
  stockprevval: number
  y1ret: number
  quartile: number
  pwt: number
  contri: number
}

 interface N161419 {
  short: string
  indcode: number
  indname: string
  mcap: string
  sect_chgp: number
  chgp: number
  unrgain: number
  unrgaindir: number
  dgain: number
  dgainpdir: number
  dgainp: number
  stockprevval: number
  y1ret: number
  quartile: number
  pwt: number
  contri: number
}

 interface Total4 {
  pwt: number
  contri: number
  unrgain: number
  dgain: number
  unrgaindir: number
  dgainp: number
  dgainpdir: number
}

 interface Data2 {
  "Large Cap": number
  "Mid Cap": number
  "Small Cap": number
  "Micro Cap": number
}
