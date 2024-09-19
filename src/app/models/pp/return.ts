export interface IReturn {
  code: string;
  message: string;
  data: IReturn_Data;
}

export interface IReturn_Data {
  sector: ISector;
  mcap: IMcap;
  holdings: IHoldings;
  scorecard: IScorecard;
  networth: INetworth;
  retcompo: IRetcompo;
  divcontri: IDivcontri;
  calendar: ICalendar_data;
}

export interface ISector {
  list: List;
  summtxt: string;
  txt1: string;
}

interface List {
  [key: string]: Remaining | AirConditioners | TailStocks;
}

interface BankPrivate {
  txt: string;
  list: List2[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List2 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: any;
  lval: number;
}

interface TelecommunicationServiceProvider {
  txt: string;
  list: List3[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List3 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface CigarettesTobacco {
  txt: string;
  list: List4[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List4 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface ItSoftware {
  txt: string;
  list: List5[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List5 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: any;
  lval: number;
}

interface DiamondGoldJewellery {
  txt: string;
  list: List6[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List6 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface Paints {
  txt: string;
  list: List7[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List7 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface ConsumerDurables {
  txt: string;
  list: List8[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List8 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface Fmcg {
  txt: string;
  list: List9[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List9 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface PharmaceuticalsDrugs {
  txt: string;
  list: List10[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List10 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface AluminiumAluminiumProducts {
  txt: string;
  list: List11[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List11 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface MiningMinerals {
  txt: string;
  list: List12[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List12 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  lval: number;
}

interface PublicBanks {
  txt: string;
  list: List13[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List13 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: any;
  lval: number;
}

interface Airlines {
  txt: string;
  list: List14[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List14 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface Lifestyle {
  txt: string;
  list: List15[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List15 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface PaperPaperProducts {
  txt: string;
  list: List16[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List16 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface PesticidesAgrochemicals {
  txt: string;
  list: List17[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List17 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  lval: number;
}

interface FinanceNbfc {
  txt: string;
  list: List18[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List18 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: any;
  lval: number;
}

interface OilExplorationRefineries {
  txt: string;
  list: List19[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List19 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface MetalNonFerrous {
  txt: string;
  list: List20[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List20 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface AirConditioners {
  txt: string;
  list: List21[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List21 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface Textile {
  txt: string;
  list: List22[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List22 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface TvBroadcastingSoftware {
  txt: string;
  list: List23[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List23 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface PowerGenerationDistribution {
  txt: string;
  list: List24[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List24 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  lval: number;
}

interface AutoTractor {
  txt: string;
  list: List25[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List25 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface FinanceHousing {
  txt: string;
  list: List26[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List26 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface Cable {
  txt: string;
  list: List27[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List27 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface CapitalGoods {
  txt: string;
  list: List28[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List28 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  lval: number;
}

interface Batteries {
  txt: string;
  list: List29[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List29 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface GasTransmissionMarketing {
  txt: string;
  list: List30[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List30 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: string;
  lval: number;
}

interface TyresAllied {
  txt: string;
  list: List31[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List31 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  lval: number;
}

interface TextileMachinery {
  txt: string;
  list: List32[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List32 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  lval: number;
}

interface Chemicals {
  txt: string;
  list: List33[];
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
}

interface List33 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  lval: number;
}

export interface IMcap {
  list: List34;
  summtxt: string;
  txt1: string;
}

interface List34 {
  [key: string]: LargeCap | MidCap | SmallCap | MicroCap;
}

interface LargeCap {
  txt: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
  list: List35[];
}

interface List35 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: any;
  lval: number;
}

interface MidCap {
  txt: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
  list: List36[];
}

interface List36 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: any;
  lval: number;
}

interface SmallCap {
  txt: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
  list: List37[];
}

interface List37 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: any;
  lval: number;
}

interface MicroCap {
  txt: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  pwtflag: number;
  list: List38[];
}

interface List38 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: any;
  lval: number;
}

export interface IHoldings {
  list: List39;
  summtxt: string;
  txt1: string;
}

interface List39 {
  [key: string]: Remaining | Top3Holdings | TailStocks;
}

interface Top3Holdings {
  txt: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  list: List40[];
  pwtflag: number;
}

interface List40 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  lval: number;
}

interface TailStocks {
  txt: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  list: List41[];
  pwtflag: number;
}

interface List41 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  lval: number;
}

interface Remaining {
  txt: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: number;
  list: List42[];
  pwtflag: number;
}

interface List42 {
  sid: number;
  sname: string;
  tgain: number;
  tgainp: number;
  tgaindir: number;
  pwt: any;
  lval: number;
}

export interface IScorecard {
  txt1: string;
  txt2: string;
  compperform: string;
  comperformby: number;
  return: string;
  returndir: number;
  compo: string;
  compodir: number;
  dt: string;
  returnsen: string;
  sendir: number;
  senperfomby: number;
  senperfom: string;
  divp: number;
  dir: Dir;
  dotclr: string;
}

interface Dir {
  comperformby: number;
  senperfomby: number;
}

export interface INetworth {
  lval?: string | number;
  buyval: number;
  sellval: number;
  pv: number;
  cash: number;
  unrgain: number;
  unrgaindir: number;
  dividend: number;
  divdir: number;
  rgain: number;
  rgaindir: number;
  tgain: number;
  tgaindir: number;
}

export interface IRetcompo {
  W1: W1;
  M1: M1;
  M3: M3;
  M6: M6;
  YTD: Ytd;
  Y1: Y1;
  Y2: Y2;
  Y3: Y3;
}

interface W1 {
  return: string;
  returndir: number;
  compo: string;
  compodir: number;
}

interface M1 {
  return: string;
  returndir: number;
  compo: string;
  compodir: number;
}

interface M3 {
  return: string;
  returndir: number;
  compo: string;
  compodir: number;
}

interface M6 {
  return: string;
  returndir: number;
  compo: string;
  compodir: number;
}

interface Ytd {
  return: string;
  returndir: number;
  compo: string;
  compodir: number;
}

interface Y1 {
  return: string;
  returndir: number;
  compo: string;
  compodir: number;
}

interface Y2 {
  return: string;
  returndir: number;
  compo: string;
  compodir: number;
}

interface Y3 {
  return: string;
  returndir: number;
  compo: string;
  compodir: number;
}

export interface IDivcontri {
  list: List43[];
  txtbottom: string;
  txt1: string;
  txt2: string;
}

interface List43 {
  period: string;
  divrec: number;
  divret: number;
  price: number;
  total: number;
}

export interface ICalendar_data {
  caldisp: number;
  years: string[];
  absret: Absret;
  divrec: Divrec;
  port: Port;
  comp: Comp;
  sensex: Sensex;
  midcap: Midcap;
  smallcap: Smallcap;
}

interface Absret {
  '2016': number;
  '2017': number;
  '2018': number;
  '2019': number;
  '2020': number;
  '2021': number;
  '2022': number;
  '2023': number;
  '2024': number;
}

interface Divrec {
  '2016': number;
  '2017': number;
  '2018': number;
  '2019': number;
  '2020': number;
  '2021': number;
  '2022': number;
  '2023': number;
  '2024': number;
}

interface Port {
  '2016': N2016;
  '2017': N2017;
  '2018': N2018;
  '2019': N2019;
  '2020': N2020;
  '2021': N2021;
  '2022': N2022;
  '2023': N2023;
  '2024': N2024;
}

interface N2016 {
  data: number;
  color: number;
  year: string;
}

interface N2017 {
  data: number;
  color: number;
  year: string;
}

interface N2018 {
  data: number;
  color: number;
  year: string;
}

interface N2019 {
  data: number;
  color: number;
  year: string;
}

interface N2020 {
  data: number;
  color: number;
  year: string;
}

interface N2021 {
  data: number;
  color: number;
  year: string;
}

interface N2022 {
  data: number;
  color: number;
  year: string;
}

interface N2023 {
  data: number;
  color: number;
  year: string;
}

interface N2024 {
  data: number;
  color: number;
  year: string;
}

interface Comp {
  '2016': N20162;
  '2017': N20172;
  '2018': N20182;
  '2019': N20192;
  '2020': N20202;
  '2021': N20212;
  '2022': N20222;
  '2023': N20232;
  '2024': N20242;
}

interface N20162 {
  data: string;
  color: number;
  year: string;
}

interface N20172 {
  data: number;
  color: number;
  year: string;
}

interface N20182 {
  data: number;
  color: number;
  year: string;
}

interface N20192 {
  data: number;
  color: number;
  year: string;
}

interface N20202 {
  data: number;
  color: number;
  year: string;
}

interface N20212 {
  data: number;
  color: number;
  year: string;
}

interface N20222 {
  data: number;
  color: number;
  year: string;
}

interface N20232 {
  data: number;
  color: number;
  year: string;
}

interface N20242 {
  data: number;
  color: number;
  year: string;
}

interface Sensex {
  '2016': N20163;
  '2017': N20173;
  '2018': N20183;
  '2019': N20193;
  '2020': N20203;
  '2021': N20213;
  '2022': N20223;
  '2023': N20233;
  '2024': N20243;
}

interface N20163 {
  data: number;
  color: number;
  year: string;
}

interface N20173 {
  data: number;
  color: number;
  year: string;
}

interface N20183 {
  data: number;
  color: number;
  year: string;
}

interface N20193 {
  data: number;
  color: number;
  year: string;
}

interface N20203 {
  data: number;
  color: number;
  year: string;
}

interface N20213 {
  data: number;
  color: number;
  year: string;
}

interface N20223 {
  data: number;
  color: number;
  year: string;
}

interface N20233 {
  data: number;
  color: number;
  year: string;
}

interface N20243 {
  data: number;
  color: number;
  year: string;
}

interface Midcap {
  '2016': N20164;
  '2017': N20174;
  '2018': N20184;
  '2019': N20194;
  '2020': N20204;
  '2021': N20214;
  '2022': N20224;
  '2023': N20234;
  '2024': N20244;
}

interface N20164 {
  data: number;
  color: number;
  year: string;
}

interface N20174 {
  data: number;
  color: number;
  year: string;
}

interface N20184 {
  data: number;
  color: number;
  year: string;
}

interface N20194 {
  data: number;
  color: number;
  year: string;
}

interface N20204 {
  data: number;
  color: number;
  year: string;
}

interface N20214 {
  data: number;
  color: number;
  year: string;
}

interface N20224 {
  data: number;
  color: number;
  year: string;
}

interface N20234 {
  data: number;
  color: number;
  year: string;
}

interface N20244 {
  data: number;
  color: number;
  year: string;
}

interface Smallcap {
  '2016': N20165;
  '2017': N20175;
  '2018': N20185;
  '2019': N20195;
  '2020': N20205;
  '2021': N20215;
  '2022': N20225;
  '2023': N20235;
  '2024': N20245;
}

interface N20165 {
  data: number;
  color: number;
  year: string;
}

interface N20175 {
  data: number;
  color: number;
  year: string;
}

interface N20185 {
  data: number;
  color: number;
  year: string;
}

interface N20195 {
  data: number;
  color: number;
  year: string;
}

interface N20205 {
  data: number;
  color: number;
  year: string;
}

interface N20215 {
  data: number;
  color: number;
  year: string;
}

interface N20225 {
  data: number;
  color: number;
  year: string;
}

interface N20235 {
  data: number;
  color: number;
  year: string;
}

interface N20245 {
  data: number;
  color: number;
  year: string;
}
