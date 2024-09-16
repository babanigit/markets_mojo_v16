export interface IRisk {
  code: string;
  message: string;
  data: IRisk_Data;
}

export interface IRisk_Data {
  error: string;
  score: IScore_risk;
  volatility: Volatility;
  beta: Beta;
  var: Var;
  return: Return;
  allocation: Allocation;
}

export interface IScore_risk {
  color: string;
  c_text: string;
  text: string;
  beta: string;
}

interface Volatility {
  port: number;
  comp: number;
  sensex: number;
  txt1: string;
  txt1clr: string;
  txt2: string;
  txt3: string;
}

interface Beta {
  txt1: string;
  txt1dir: number;
  txt2: string;
  txt3: string;
  graph: Graph[];
  beta_val: number;
}

interface Graph {
  year: string;
  dt: string;
  disdt: string;
  port: number;
  portidx: number;
  sensex: any;
  senidx: number;
}

interface Var {
  txt1: string;
  txt2: string;
  txt3: string;
  var_val: string;
}

interface Return {
  txt1: string;
  txt2: string;
  port: Port;
  comp: Comp;
  txt3: string;
}

interface Port {
  return: number;
  riskAdj: number;
  volatility: number;
}

interface Comp {
  return: number;
  riskAdj: number;
  volatility: number;
}

interface Allocation {
  graph: Graph2;
  txt1: string;
  txt2: string;
}

interface Graph2 {
  details: Details;
  data: Data2;
}

interface Details {
  [key: string]: LargeCap | MidCap | SmallCap | MicroCap;
}

interface LargeCap {
  name: string;
  details: Details2;
  total: Total;
}

interface Details2 {
  [key: string]: N400868;
}

interface Total {
  pwt: number;
  contri: number;
  unrgain: number;
  dgain: number;
  unrgaindir: number;
  dgainp: number;
  dgainpdir: number;
}

interface MidCap {
  name: string;
  details: Details3;
  total: Total2;
}

interface Details3 {
  [key: string]: N400868;
}

interface N400868 {
  short: string;
  indcode: number;
  indname: string;
  mcap: string;
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

interface Total2 {
  pwt: number;
  contri: number;
  unrgain: number;
  dgain: number;
  unrgaindir: number;
  dgainp: number;
  dgainpdir: number;
}

interface SmallCap {
  name: string;
  details: Details4;
  total: Total3;
}

interface Details4 {
  [key: string]: N400868;
}

interface Total3 {
  pwt: number;
  contri: number;
  unrgain: number;
  dgain: number;
  unrgaindir: number;
  dgainp: number;
  dgainpdir: number;
}

interface MicroCap {
  name: string;
  details: Details5;
  total: Total4;
}

interface Details5 {
  '10039196': N10039196;
  '151046': N151046;
  '161419': N161419;
}

interface N10039196 {
  short: string;
  indcode: number;
  indname: string;
  mcap: string;
  sect_chgp: number;
  chgp: number;
  unrgain: number;
  unrgaindir: number;
  dgain: number;
  dgainpdir: number;
  dgainp: number;
  stockprevval: number;
  y1ret: string;
  quartile: string;
  pwt: number;
  contri: number;
}

interface N151046 {
  short: string;
  indcode: number;
  indname: string;
  mcap: string;
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

interface N161419 {
  short: string;
  indcode: number;
  indname: string;
  mcap: string;
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

interface Total4 {
  pwt: number;
  contri: number;
  unrgain: number;
  dgain: number;
  unrgaindir: number;
  dgainp: number;
  dgainpdir: number;
}

interface Data2 {
  [key: string]: number
}
