export interface ItaxHistroyPopup {
    code: string;
    message: string;
    data: ItaxHistroyPopup_data;
}

export interface ItaxHistroyPopup_data {
    list: ItaxHistroyPopup_data_List;
    total: Total;
}

export interface ItaxHistroyPopup_data_List {
    [key: string]: The201617_Element[];

}

export interface The201617_Element {
    sid: number;
    sname: string;
    short: string;
    dotsum: The201617_Dotsum;
    indcode: number;
    indname: string;
    exch: Exch;
    exchcode: number;
    cmp: number;
    chg: number;
    chgp: number;
    cmpdir: number;
    prevclose: number;
    mcap: Mcap;
    sect_chgp: number;
    show_mojostock: ShowStock;
    show_fallstock: ShowStock;
    product_icon_list: ProductIconList[];
    more_button: MoreButton;
    rgain: number;
    rgaindir: number;
    sttax: number;
    lttax: number;
    totaltax: number;
    sttaxdir: number;
    lttaxdir: number;
    qty: number;
    date: string;
}

export interface The201617_Dotsum {
    q_rank: number;
    stk_sect: number;
    q_txt: QTxt;
    v_rank: number;
    v_txt: VTxt;
    f_pts: number;
    f_txt: FTxt;
    f_clr: CLR;
    sid: number;
    f_dir: number;
    prev_score: number;
    q_dir: number | string;
    tech_score: number;
    tech_txt: TechTxt;
    tech_clr: TechCLR;
    q_clr: CLR;
    v_clr: CLR;
    score: number;
    score_date: Date;
    scoreText: CurrentFinalScoreGrade41;
    prevScoreText: CurrentFinalScoreGrade41;
    prevScoreTextDate: Date;
    prevScore: number;
    final_score_grade_41: CurrentFinalScoreGrade41;
    final_score_41_or: number;
    current_final_score_grade_41: CurrentFinalScoreGrade41;
    current_final_score_41: number;
    mfin_score: number;
    scoreTextChange: number;
    curfscore: number;
    s_clr: SCLR;
}

export enum CurrentFinalScoreGrade41 {
    Buy = 'Buy',
    Hold = 'Hold',
    Sell = 'Sell',
    StrongBuy = 'Strong Buy',
    StrongSell = 'Strong Sell',
}

export enum CLR {
    Green = 'green',
    Orange = 'orange',
    Red = 'red',
}

export enum FTxt {
    Flat = 'Flat',
    Negative = 'Negative',
    Positive = 'Positive',
    VeryPositive = 'Very Positive',
}

export enum QTxt {
    Average = 'Average',
    BelowAverage = 'Below Average',
    Excellent = 'Excellent',
    Good = 'Good',
}

export enum SCLR {
    Btnbuy = 'btnbuy',
    Btnhold = 'btnhold',
    Btnsbuy = 'btnsbuy',
    Btnsell = 'btnsell',
    Btnssell = 'btnssell',
}

export enum TechCLR {
    Green = 'Green',
    Red = 'Red',
}

export enum TechTxt {
    Bearish = 'Bearish',
    Bullish = 'Bullish',
    MildlyBearish = 'Mildly Bearish',
    MildlyBullish = 'Mildly Bullish',
}

export enum VTxt {
    Attractive = 'Attractive',
    Expensive = 'Expensive',
    Fair = 'Fair',
    Risky = 'Risky',
    VeryAttractive = 'Very Attractive',
    VeryExpensive = 'Very Expensive',
}

export enum Exch {
    Bse = 'BSE',
}

export enum Mcap {
    LargeCap = 'Large Cap',
    MicroCap = 'Micro Cap',
    MidCap = 'Mid Cap',
    SmallCap = 'Small Cap',
}

export interface MoreButton {
    show: number;
    text: Text;
}

export enum Text {
    Empty = '',
    The1More = '+1 More',
}

export interface ProductIconList {
    name: string;
    text: string;
    url: string;
    product_class: string;
}

export enum ShowStock {
    No = 'no',
    Yes = 'yes',
}

export interface The201718 {
    sid: number;
    sname: string;
    short: string;
    dotsum: The201718_Dotsum;
    indcode: number;
    indname: string;
    exch: Exch;
    exchcode: number;
    cmp: number;
    chg: number;
    chgp: number;
    cmpdir: number;
    prevclose: number;
    mcap: Mcap;
    sect_chgp: number;
    show_mojostock: ShowStock;
    show_fallstock: ShowStock;
    product_icon_list: ProductIconList[];
    more_button: MoreButton;
    rgain: number;
    rgaindir: number;
    sttax: number;
    lttax: number;
    totaltax: number;
    sttaxdir: number;
    lttaxdir: number;
    qty: number;
    date: string;
}

export interface The201718_Dotsum {
    q_rank: number | string;
    stk_sect: number | string;
    q_txt: QTxt;
    v_rank: number | string;
    v_txt: VTxt;
    f_pts: number;
    f_txt: FTxt;
    f_clr: CLR;
    sid: number;
    f_dir: number;
    prev_score: number;
    q_dir: number | string;
    tech_score: number;
    tech_txt: TechTxt;
    tech_clr: TechCLR;
    q_clr: CLR;
    v_clr: CLR;
    score: number;
    score_date: Date;
    scoreText: CurrentFinalScoreGrade41;
    prevScoreText: CurrentFinalScoreGrade41;
    prevScoreTextDate: Date;
    prevScore: number;
    final_score_grade_41: CurrentFinalScoreGrade41;
    final_score_41_or: number;
    current_final_score_grade_41: CurrentFinalScoreGrade41;
    current_final_score_41: number;
    mfin_score: number;
    scoreTextChange: number;
    curfscore: number;
    s_clr: SCLR;
}

export interface The201819 {
    sid: number;
    sname: string;
    short: string;
    dotsum: The201819_Dotsum;
    indcode: number;
    indname: string;
    exch: Exch;
    exchcode: number;
    cmp: number;
    chg: number;
    chgp: number;
    cmpdir: number;
    prevclose: number;
    mcap: Mcap;
    sect_chgp: number;
    show_mojostock: ShowStock;
    show_fallstock: ShowStock;
    product_icon_list: ProductIconList[];
    more_button: MoreButton;
    rgain: number;
    rgaindir: number;
    sttax: number;
    lttax: number;
    totaltax: number;
    sttaxdir: number;
    lttaxdir: number;
    qty: number;
    date: string;
}

export interface The201819_Dotsum {
    q_rank: number;
    stk_sect: number;
    q_txt: QTxt;
    v_rank: number;
    v_txt: VTxt;
    f_pts: number;
    f_txt: FTxt;
    f_clr: CLR;
    sid: number;
    f_dir: number;
    prev_score: number;
    q_dir: number;
    tech_score: number;
    tech_txt: TechTxt;
    tech_clr: TechCLR;
    q_clr: CLR;
    v_clr: CLR;
    score: number;
    score_date: Date;
    scoreText: CurrentFinalScoreGrade41;
    prevScoreText: CurrentFinalScoreGrade41;
    prevScoreTextDate: Date;
    prevScore: number;
    final_score_grade_41: CurrentFinalScoreGrade41;
    final_score_41_or: number;
    current_final_score_grade_41: CurrentFinalScoreGrade41;
    current_final_score_41: number;
    mfin_score: number;
    scoreTextChange: number;
    curfscore: number;
    s_clr: SCLR;
}

export interface Total {

    [key: string]: The201718_Class[] ;

    // '2024-25': The201718_Class;
    // '2023-24': The202324;
    // '2022-23': The201718_Class;
    // '2021-22': The201718_Class;
    // '2019-20': The201718_Class;
    // '2018-19': The201718_Class;
    // '2017-18': The201718_Class;
    // '2016-17': The201718_Class;
}

export interface The201718_Class {
    fy: string;
    status: number;
    rgain: number;
    sttax: number;
    lttax: number;
    totaltax: number;
    capgain: number;
    advtax: { [key: string]: The201617_Advtax };
}

export interface The201617_Advtax {
    date: string;
    rawdate: Date;
    stgain: AdvtaxEnum;
    ltgain: AdvtaxEnum;
    sttax: AdvtaxEnum;
    lttax: AdvtaxEnum;
    advtax: AdvtaxEnum;
}

export enum AdvtaxEnum {
    Empty = '-',
}

export interface The202324 {
    fy: string;
    status: number;
    rgain: number;
    sttax: number;
    lttax: number;
    totaltax: number;
    capgain: number;
    advtax: { [key: string]: The202324_Advtax };
}

export interface The202324_Advtax {
    date: string;
    rawdate: Date;
    stgain: number;
    ltgain: number;
    sttax: number;
    lttax: number;
    advtax: AdvtaxEnum | number;
}
