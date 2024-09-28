export interface IToday {
  code:    string;
  message: string;
  data:    IToday_data;
}

export interface IToday_data {
  error:   number;
  overall: Overall;
  corpact: ICorpact_data[];
  mcap:    IMcapClass_Data;
  news:    I_News[];
  summary: ISummaryToday_data[];
  graph:   IGraphToday_Data;
}

export interface ICorpact_data {
  sname:  string;
  sid:    number;
  txt:    string;
  header: string;
  dt:     Date;
}

export interface IGraphToday_Data {
  plotpts:    Plotpt[];
  rawdt:      Date;
  datetime:   string;
  prevclose:  number;
  lowpv:      number;
  highpv:     number;
  port:       number;
  portdir:    number;
  comp:       number;
  compdir:    number;
  sensex:     number;
  sensexdir:  number;
  txt1:       string;
  txt1clr:    number;
  txt2:       string;
  dgain:      number;
  latestpval: number;
}

export interface Plotpt {
  time:         string;
  segmentColor: SegmentColor;
  y:            number;
}

export enum SegmentColor {
  Dd7470 = "#DD7470",
  The3Fc499 = "#3FC499",
}

export interface IMcapClass_Data {
  large:      Large;
  mid:        Large;
  smallmicro: Smallmicro;
}

export interface Large {
  gain:     number;
  gaindir:  number;
  gainp:    number;
  idxp:     string;
  idxpdir:  number;
  prevval:  number;
  label:    string;
  labeldir: number;
  flag:     number;
}

export interface Smallmicro {
  gain:     number;
  gaindir:  number;
  gainp:    string;
  idxp:     string;
  idxpdir:  number;
  label:    string;
  labeldir: number;
  flag:     number;
}

export interface I_News {
  sid:     number;
  sname:   string;
  date:    string;
  imgurl:  string;
  siteurl: string;
  domain:  string;
  title:   string;
  rawdate: Date;
}

export interface Overall {
  dgaindir: number;
  contri:   IContri_overall_today[];
  drags:    IDrags_overall_today[];
  gainers:  IContri_overall_today[];
  losers:   IDrags_overall_today[];
}

export interface IContri_overall_today {
  sid:               number;
  sname:             string;
  short:             string;
  dotsum:            ContriDotsum;
  indcode:           number;
  indname:           string;
  exch:              Exch;
  exchcode:          number;
  cmp:               number;
  chg:               number;
  chgp:              number;
  cmpdir:            number;
  prevclose:         number;
  mcap:              McapEnum;
  sect_chgp:         number;
  show_mojostock:    ShowStock;
  show_fallstock:    ShowStock;
  product_icon_list: any[];
  more_button:       MoreButton;
  lval:              number;
  dgain:             number;
  dgainp:            number;
  dgaindir:          number;
}

export interface ContriDotsum {
  q_rank:                       number | string;
  stk_sect:                     number | string;
  q_txt:                        PurpleQTxt;
  v_rank:                       number | string;
  v_txt:                        VTxt;
  f_pts:                        number;
  f_txt:                        PurpleFTxt;
  f_clr:                        Color;
  sid:                          number;
  f_dir:                        number;
  prev_score:                   number;
  q_dir:                        number;
  tech_score:                   number;
  tech_txt:                     TechTxt;
  tech_clr:                     TechCLR;
  q_clr:                        Color;
  v_clr:                        Color;
  score:                        number;
  score_date:                   Date;
  scoreText:                    ScoreText;
  prevScoreText:                PrevScoreText;
  prevScoreTextDate:            Date;
  prevScore:                    number;
  final_score_grade_41:         FinalScoreGrade41;
  final_score_41_or:            number;
  current_final_score_grade_41: FinalScoreGrade41;
  current_final_score_41:       number | string;
  mfin_score:                   number;
  scoreTextChange:              number;
  curfscore:                    number | string;
  s_clr:                        PurpleSCLR;
}

export enum FinalScoreGrade41 {
  Hold = "Hold",
  NotRated = "Not Rated",
  Sell = "Sell",
}

export enum Color {
  Green = "green",
  Grey = "grey",
  Orange = "orange",
  Red = "red",
}

export enum PurpleFTxt {
  Flat = "Flat",
  Outstanding = "Outstanding",
  Positive = "Positive",
}

export enum PrevScoreText {
  Empty = "",
  Hold = "Hold",
}

export enum PurpleQTxt {
  Average = "Average",
  BelowAverage = "Below Average",
  DoesNotQualify = "Does not qualify",
}

export enum PurpleSCLR {
  Btnbuy = "btnbuy",
  Btnsell = "btnsell",
  Btnunactive = "btnunactive",
}

export enum ScoreText {
  Buy = "Buy",
  NotRated = "Not Rated",
  Sell = "Sell",
}

export enum TechCLR {
  Green = "Green",
  Red = "Red",
}

export enum TechTxt {
  Bullish = "Bullish",
  MildlyBearish = "Mildly Bearish",
  MildlyBullish = "Mildly Bullish",
}

export enum VTxt {
  Attractive = "Attractive",
  Expensive = "Expensive",
  Risky = "Risky",
}

export enum Exch {
  Bse = "BSE",
  Nse = "NSE",
}

export enum McapEnum {
  LargeCap = "Large Cap",
  MicroCap = "Micro Cap",
  MidCap = "Mid Cap",
  SmallCap = "Small Cap",
}

export interface MoreButton {
  show: number;
  text: Text;
}

export enum Text {
  Empty = "",
  The1More = "+1 More",
}

export enum ShowStock {
  No = "no",
  Yes = "yes",
}

export interface IDrags_overall_today {
  sid:               number;
  sname:             string;
  short:             string;
  dotsum:            DragDotsum;
  indcode:           number;
  indname:           string;
  exch:              Exch;
  exchcode:          number;
  cmp:               number;
  chg:               number;
  chgp:              number;
  cmpdir:            number;
  prevclose:         number;
  mcap:              McapEnum;
  sect_chgp:         number;
  show_mojostock:    ShowStock;
  show_fallstock:    ShowStock;
  product_icon_list: ProductIconList[];
  more_button:       MoreButton;
  lval:              number;
  dgain:             number;
  dgainp:            number;
  dgaindir:          number;
}

export interface DragDotsum {
  q_rank:                       number | string;
  stk_sect:                     number | string;
  q_txt:                        FluffyQTxt;
  v_rank:                       number | string;
  v_txt:                        string;
  f_pts:                        number | null;
  f_txt:                        FluffyFTxt | null;
  f_clr:                        Color;
  sid:                          number;
  f_dir:                        number | string;
  prev_score:                   number | string;
  q_dir:                        number | string;
  tech_score:                   number;
  tech_txt:                     TechTxt;
  tech_clr:                     TechCLR;
  q_clr:                        Color;
  v_clr:                        Color;
  score:                        number;
  score_date:                   Date;
  scoreText:                    CurrentFinalScoreGrade41;
  prevScoreText:                string;
  prevScoreTextDate:            Date;
  prevScore:                    number | string;
  final_score_grade_41:         CurrentFinalScoreGrade41;
  final_score_41_or:            number;
  current_final_score_grade_41: CurrentFinalScoreGrade41;
  current_final_score_41:       number | string;
  mfin_score:                   number | string;
  scoreTextChange:              number;
  curfscore:                    number | string;
  s_clr:                        FluffySCLR;
}

export enum CurrentFinalScoreGrade41 {
  Buy = "Buy",
  Hold = "Hold",
  NotRated = "Not Rated",
  StrongSell = "Strong Sell",
}

export enum FluffyFTxt {
  Flat = "Flat",
  Negative = "Negative",
  Positive = "Positive",
  VeryPositive = "Very Positive",
}

export enum FluffyQTxt {
  Average = "Average",
  Excellent = "Excellent",
  Good = "Good",
}

export enum FluffySCLR {
  Btnbuy = "btnbuy",
  Btnhold = "btnhold",
  Btnssell = "btnssell",
  Btnunactive = "btnunactive",
}

export interface ProductIconList {
  name:          string;
  text:          string;
  url:           string;
  product_class: string;
}

export interface ISummaryToday_data {
  header: string;
  color:  Color;
  text:   string;
}
