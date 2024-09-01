// Interface for each item in the sub-array
export interface ISearchData2Switcher {
  Id: number;
  Company: string;
  ScriptCode: number | string;
  Symbol: string;
  url: string;
  price: number | null;
  ExchangeName: string;
  sname: string;
  tag: string;
  stockprice: string;
  chg: string;
  chgp: string;
  chgdir: number | string;
  score: number | string;
  scoretext: string;
  stock_traded_status: string;
  show_score: number;
  recurl: string;
}

export const searchData2Switcher: ISearchData2Switcher[] = [
  {
    Id: 592009,
    Company: '<b>HDFC</b> Bank Ltd.',
    ScriptCode: 500180,
    Symbol: 'HDFCBANK',
    url: 'https://www.marketsmojo.com/stocks-analysis/hdfc-bank-592009-0',
    price: null,
    ExchangeName: 'bse',
    sname: 'HDFC Bank',
    tag: 'Stock',
    stockprice: '1619.45',
    chg: '14.75',
    chgp: '0.92',
    chgdir: 1,
    score: 88,
    scoretext: 'Strong Buy',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 592009,
    Company: '<b>HDFC</b> Bank Ltd.',
    ScriptCode: 500180,
    Symbol: 'HDFCBANK',
    url: 'https://www.marketsmojo.com/news/hdfc-bank-ltd-592009',
    price: null,
    ExchangeName: 'bse',
    sname: 'HDFC Bank',
    tag: 'News',
    stockprice: '1619.45',
    chg: '14.75',
    chgp: '0.92',
    chgdir: 1,
    score: 88,
    scoretext: 'Strong Buy',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 1002872,
    Company: '<b>HDFC</b> Life Insurance Company Ltd',
    ScriptCode: 540777,
    Symbol: 'HDFCLIFE',
    url: 'https://www.marketsmojo.com/stocks-analysis/hdfc-life-insurance-company-1002872-0',
    price: null,
    ExchangeName: 'bse',
    sname: 'HDFC Life Insur.',
    tag: 'Stock',
    stockprice: '680.30',
    chg: '7.65',
    chgp: '1.14',
    chgdir: 1,
    score: 48,
    scoretext: 'Sell',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 1002872,
    Company: '<b>HDFC</b> Life Insurance Company Ltd',
    ScriptCode: 540777,
    Symbol: 'HDFCLIFE',
    url: 'https://www.marketsmojo.com/news/hdfc-life-insurance-company-ltd-1002872',
    price: null,
    ExchangeName: 'bse',
    sname: 'HDFC Life Insur.',
    tag: 'News',
    stockprice: '680.30',
    chg: '7.65',
    chgp: '1.14',
    chgdir: 1,
    score: 48,
    scoretext: 'Sell',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 1003028,
    Company: '<b>HDFC</b> Asset Management Company Ltd',
    ScriptCode: '541729',
    Symbol: 'HDFCAMC',
    url: 'https://www.marketsmojo.com/stocks-analysis/hdfc-asset-management-company-1003028-0',
    price: null,
    ExchangeName: 'bse',
    sname: 'HDFC AMC',
    tag: 'Stock',
    stockprice: '4046.30',
    chg: '-10.70',
    chgp: '-0.26',
    chgdir: -1,
    score: 77,
    scoretext: 'Buy',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 1003028,
    Company: '<b>HDFC</b> Asset Management Company Ltd',
    ScriptCode: '541729',
    Symbol: 'HDFCAMC',
    url: 'https://www.marketsmojo.com/news/hdfc-asset-management-company-ltd-1003028',
    price: null,
    ExchangeName: 'bse',
    sname: 'HDFC AMC',
    tag: 'News',
    stockprice: '4046.30',
    chg: '-10.70',
    chgp: '-0.26',
    chgdir: -1,
    score: 77,
    scoretext: 'Buy',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 741664,
    Company: 'Housing Development Finance CorporationLtd(Merged) - <b>HDFC</b>',
    ScriptCode: 500010,
    Symbol: 'HDFC',
    url: 'https://www.marketsmojo.com/stocks-analysis/housing-development-finance-corporationltdmerged-741664-0',
    price: null,
    ExchangeName: 'bse',
    sname: 'H D F C',
    tag: 'Stock',
    stockprice: '',
    chg: '',
    chgp: '',
    chgdir: '',
    score: '',
    scoretext: '',
    stock_traded_status: 'Not Traded',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 741664,
    Company: 'Housing Development Finance CorporationLtd(Merged) - <b>HDFC</b>',
    ScriptCode: 500010,
    Symbol: 'HDFC',
    url: 'https://www.marketsmojo.com/news/housing-development-finance-corporationltd-merged--741664',
    price: null,
    ExchangeName: 'bse',
    sname: 'H D F C',
    tag: 'News',
    stockprice: '',
    chg: '',
    chgp: '',
    chgdir: '',
    score: '',
    scoretext: '',
    stock_traded_status: 'Not Traded',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 399834,
    Company: '<b>Inf</b>osys Ltd.',
    ScriptCode: 500209,
    Symbol: 'INFY',
    url: 'https://www.marketsmojo.com/stocks-analysis/infosys-399834-0',
    price: null,
    ExchangeName: 'bse',
    sname: 'Infosys',
    tag: 'Stock',
    stockprice: '1768.05',
    chg: '26.95',
    chgp: '1.55',
    chgdir: 1,
    score: 82,
    scoretext: 'Strong Buy',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 399834,
    Company: '<b>Inf</b>osys Ltd.',
    ScriptCode: 500209,
    Symbol: 'INFY',
    url: 'https://www.marketsmojo.com/news/infosys-ltd-399834',
    price: null,
    ExchangeName: 'bse',
    sname: 'Infosys',
    tag: 'News',
    stockprice: '1768.05',
    chg: '26.95',
    chgp: '1.55',
    chgdir: 1,
    score: 82,
    scoretext: 'Strong Buy',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 925707,
    Company: '<b>Inf</b>o Edge (India) Ltd',
    ScriptCode: 532777,
    Symbol: 'NAUKRI',
    url: 'https://www.marketsmojo.com/stocks-analysis/info-edge-india-925707-0',
    price: null,
    ExchangeName: 'bse',
    sname: 'Info Edg.(India)',
    tag: 'Stock',
    stockprice: '7035.20',
    chg: '158.20',
    chgp: '2.30',
    chgdir: 1,
    score: 64,
    scoretext: 'Hold',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 925707,
    Company: '<b>Inf</b>o Edge (India) Ltd',
    ScriptCode: 532777,
    Symbol: 'NAUKRI',
    url: 'https://www.marketsmojo.com/news/info-edge-india-ltd-925707',
    price: null,
    ExchangeName: 'bse',
    sname: 'Info Edg.(India)',
    tag: 'News',
    stockprice: '7035.20',
    chg: '158.20',
    chgp: '2.30',
    chgdir: 1,
    score: 64,
    scoretext: 'Hold',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 1002585,
    Company: '<b>Inf</b>ibeam Avenues Ltd',
    ScriptCode: 539807,
    Symbol: 'INFIBEAM',
    url: 'https://www.marketsmojo.com/stocks-analysis/infibeam-avenues-1002585-0',
    price: null,
    ExchangeName: 'bse',
    sname: 'Infibeam Avenues',
    tag: 'Stock',
    stockprice: '33.36',
    chg: '0.21',
    chgp: '0.63',
    chgdir: 1,
    score: 65,
    scoretext: 'Hold',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 1002585,
    Company: '<b>Inf</b>ibeam Avenues Ltd',
    ScriptCode: 539807,
    Symbol: 'INFIBEAM',
    url: 'https://www.marketsmojo.com/news/infibeam-avenues-ltd-1002585',
    price: null,
    ExchangeName: 'bse',
    sname: 'Infibeam Avenues',
    tag: 'News',
    stockprice: '33.36',
    chg: '0.21',
    chgp: '0.63',
    chgdir: 1,
    score: 65,
    scoretext: 'Hold',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 1002755,
    Company: '<b>Inf</b>oBeans Technologies Ltd',
    ScriptCode: 543644,
    Symbol: 'INFOBEAN',
    url: 'https://www.marketsmojo.com/stocks-analysis/infobeans-technologies-1002755-0',
    price: null,
    ExchangeName: 'bse',
    sname: 'InfoBeans Tech.',
    tag: 'Stock',
    stockprice: '416.35',
    chg: '-3.15',
    chgp: '-0.75',
    chgdir: -1,
    score: 57,
    scoretext: 'Hold',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 1002755,
    Company: '<b>Inf</b>oBeans Technologies Ltd',
    ScriptCode: 543644,
    Symbol: 'INFOBEAN',
    url: 'https://www.marketsmojo.com/news/infobeans-technologies-ltd-1002755',
    price: null,
    ExchangeName: 'bse',
    sname: 'InfoBeans Tech.',
    tag: 'News',
    stockprice: '416.35',
    chg: '-3.15',
    chgp: '-0.75',
    chgdir: -1,
    score: 57,
    scoretext: 'Hold',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 1002947,
    Company: '<b>Inf</b>lame Appliances Ltd',
    ScriptCode: 541083,
    Symbol: '',
    url: 'https://www.marketsmojo.com/stocks-analysis/inflame-appliances-1002947-0',
    price: null,
    ExchangeName: 'bse',
    sname: 'Inflame Applian.',
    tag: 'Stock',
    stockprice: '413.50',
    chg: '8.45',
    chgp: '2.09',
    chgdir: 1,
    score: '',
    scoretext: 'Not Rated',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 1002947,
    Company: '<b>Inf</b>lame Appliances Ltd',
    ScriptCode: 541083,
    Symbol: '',
    url: 'https://www.marketsmojo.com/news/inflame-appliances-ltd-1002947',
    price: null,
    ExchangeName: 'bse',
    sname: 'Inflame Applian.',
    tag: 'News',
    stockprice: '413.50',
    chg: '8.45',
    chgp: '2.09',
    chgdir: 1,
    score: '',
    scoretext: 'Not Rated',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 1003829,
    Company: '<b>Inf</b>inium Pharmachem Ltd',
    ScriptCode: 78690,
    Symbol: 'INFINIUM',
    url: 'https://www.marketsmojo.com/stocks-analysis/infinium-pharmachem-1003829-1',
    price: null,
    ExchangeName: 'nse',
    sname: 'Infinium Pharma',
    tag: 'Stock',
    stockprice: '191.00',
    chg: '-4.95',
    chgp: '-2.53',
    chgdir: -1,
    score: '',
    scoretext: 'Not Rated',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 1003829,
    Company: '<b>Inf</b>inium Pharmachem Ltd',
    ScriptCode: 78690,
    Symbol: 'INFINIUM',
    url: 'https://www.marketsmojo.com/news/infinium-pharmachem-ltd-1003829',
    price: null,
    ExchangeName: 'nse',
    sname: 'Infinium Pharma',
    tag: 'News',
    stockprice: '191.00',
    chg: '-4.95',
    chgp: '-2.53',
    chgdir: -1,
    score: '',
    scoretext: 'Not Rated',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 1003856,
    Company: '<b>Inf</b>ollion Research Services Ltd',
    ScriptCode: 78698,
    Symbol: 'INFOLLION',
    url: 'https://www.marketsmojo.com/stocks-analysis/infollion-research-services-1003856-1',
    price: null,
    ExchangeName: 'nse',
    sname: 'Infollion Resea.',
    tag: 'Stock',
    stockprice: '282.00',
    chg: '5.85',
    chgp: '2.12',
    chgdir: 1,
    score: '',
    scoretext: 'Not Rated',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 1003856,
    Company: '<b>Inf</b>ollion Research Services Ltd',
    ScriptCode: 78698,
    Symbol: 'INFOLLION',
    url: 'https://www.marketsmojo.com/news/infollion-research-services-ltd-1003856',
    price: null,
    ExchangeName: 'nse',
    sname: 'Infollion Resea.',
    tag: 'News',
    stockprice: '282.00',
    chg: '5.85',
    chgp: '2.12',
    chgdir: 1,
    score: '',
    scoretext: 'Not Rated',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 251642,
    Company: '<b>Inf</b>ronics Systems Ltd',
    ScriptCode: 537985,
    Symbol: '',
    url: 'https://www.marketsmojo.com/stocks-analysis/infronics-systems-251642-0',
    price: null,
    ExchangeName: 'bse',
    sname: 'Infronics Sys.',
    tag: 'Stock',
    stockprice: '53.97',
    chg: '-0.01',
    chgp: '-0.02',
    chgdir: -1,
    score: 33,
    scoretext: 'Sell',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 251642,
    Company: '<b>Inf</b>ronics Systems Ltd',
    ScriptCode: 537985,
    Symbol: '',
    url: 'https://www.marketsmojo.com/news/infronics-systems-ltd-251642',
    price: null,
    ExchangeName: 'bse',
    sname: 'Infronics Sys.',
    tag: 'News',
    stockprice: '53.97',
    chg: '-0.01',
    chgp: '-0.02',
    chgdir: -1,
    score: 33,
    scoretext: 'Sell',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 218739,
    Company: '<b>Inf</b>omedia Press Ltd',
    ScriptCode: 509069,
    Symbol: 'INFOMEDIA',
    url: 'https://www.marketsmojo.com/stocks-analysis/infomedia-press-218739-1',
    price: null,
    ExchangeName: 'nse',
    sname: 'Infomedia Press',
    tag: 'Stock',
    stockprice: '6.26',
    chg: '6.26',
    chgp: '',
    chgdir: 1,
    score: 16,
    scoretext: 'Strong Sell',
    stock_traded_status: 'Not Traded',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 218739,
    Company: '<b>Inf</b>omedia Press Ltd',
    ScriptCode: 509069,
    Symbol: 'INFOMEDIA',
    url: 'https://www.marketsmojo.com/news/infomedia-press-ltd-218739',
    price: null,
    ExchangeName: 'nse',
    sname: 'Infomedia Press',
    tag: 'News',
    stockprice: '6.26',
    chg: '6.26',
    chgp: '',
    chgdir: 1,
    score: 16,
    scoretext: 'Strong Sell',
    stock_traded_status: 'Not Traded',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 178960,
    Company: '<b>Inf</b>ra Industries Ltd (Suspended)',
    ScriptCode: 530777,
    Symbol: '',
    url: 'https://www.marketsmojo.com/stocks-analysis/infra-industries-178960-0',
    price: null,
    ExchangeName: 'bse',
    sname: 'Infra Industries',
    tag: 'Stock',
    stockprice: '',
    chg: '',
    chgp: '',
    chgdir: '',
    score: '',
    scoretext: '',
    stock_traded_status: 'Not Traded',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 178960,
    Company: '<b>Inf</b>ra Industries Ltd (Suspended)',
    ScriptCode: 530777,
    Symbol: '',
    url: 'https://www.marketsmojo.com/news/infra-industries-ltd-178960',
    price: null,
    ExchangeName: 'bse',
    sname: 'Infra Industries',
    tag: 'News',
    stockprice: '',
    chg: '',
    chgp: '',
    chgdir: '',
    score: '',
    scoretext: '',
    stock_traded_status: 'Not Traded',
    show_score: 1,
    recurl: '',
  },
];