export interface ITaxAnalysisPopup {
    code: string;
    message: string;
    data: ITaxAnalysisPopup_data;
}

export interface ITaxAnalysisPopup_data {
    expire: Expire;
    lval: number;
    ptv: number;
    sttax: number;
    lttax: number;
    totaltax: number;
    dir: Dir;
    ptvtxt: string;
    agetxt: string;
    list: List[];
}

interface Dir {
    stcapgain: number;
    ltcapgain: number;
    totaltax: number;
    sttax: number;
    lttax: number;
}

interface Expire {
    error: string;
}

interface List {
    sid: number;
    sname: string | number;
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
    mcap: Mcap;
    sect_chgp: number;
    show_mojostock: ShowStock;
    show_fallstock: ShowStock;
    product_icon_list: ProductIconList[];
    more_button: MoreButton;
    iqty: number;
    idate: string;
    stgain: number;
    ltgain: number;
    days: number | string;
    lval: number;
    yearhold: number;
    dayrank: number | string;
    day: number;
    pwt: number;
    details?: Detail[];
}

interface Detail {
    iqty: number;
    idate: string;
    stgain: number;
    ltgain: number;
    days: string;
    lval: number;
    avgholding: number;
}

interface Dotsum {
    q_rank: number | string;
    stk_sect: number | string;
    q_txt: string;
    v_rank: number | string;
    v_txt: string;
    f_pts: number | null;
    f_txt: null | string;
    f_clr: CLR;
    sid: number;
    f_dir: number | string;
    prev_score: number | string;
    q_dir: number | string;
    tech_score: number;
    tech_txt: string;
    tech_clr: TechCLR;
    q_clr: CLR;
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

enum CLR {
    Green = "green",
    Grey = "grey",
    Orange = "orange",
    Red = "red",
}

enum TechCLR {
    Green = "Green",
    Orange = "Orange",
    Red = "Red",
}

enum Exch {
    Bse = "BSE",
    Nse = "NSE",
}

enum Mcap {
    LargeCap = "Large Cap",
    MicroCap = "Micro Cap",
    MidCap = "Mid Cap",
    SmallCap = "Small Cap",
}

interface MoreButton {
    show: number;
    text: Text;
}

enum Text {
    Empty = "",
    The1More = "+1 More",
}

interface ProductIconList {
    name: string;
    text: string;
    url: string;
    product_class: string;
}

enum ShowStock {
    No = "no",
    Yes = "yes",
}
