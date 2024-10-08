export interface IRisk {
  code: string;
  message: string;
  data: IRisk_Data;
}

export interface IRisk_Data {
  error: string;
  score: IScore_risk;
  volatility: IVolatility;
  beta: IBeta;
  var: IVar;
  return: IReturn_risk;
  allocation: IAllocation;
}

export interface IScore_risk {
  color: string;
  c_text: string;
  text: string;
  beta: string;
}

export interface IVolatility {
  port: number;
  comp: number;
  sensex: number;
  txt1: string;
  txt1clr: string;
  txt2: string;
  txt3: string;
}

export interface IBeta {
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

export interface IVar {
  txt1: string;
  txt2: string;
  txt3: string;
  var_val: string;
}

export interface IReturn_risk {
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

 export interface IAllocation {
  graph: Graph2;
  txt1: string;
  txt2: string;
}

interface Graph2 {
  details: map_Details;
  data: graph_Data2;
}

 export interface map_Details {
  [key: string]: LargeCap
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

export interface N400868 {
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

 export interface graph_Data2 {
  [key: string]: number
}
