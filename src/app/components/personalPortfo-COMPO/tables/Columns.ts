interface BaseColumn {
  title: string;
  code: string;
  short_header?:string,
  hold: string;
  defaultValue: string;
  no_extend: boolean;
  footer: boolean;
  clr?: string;

}

interface Total_return {
  title: string;
  code: string;
  short_header?:string,
  hold: string;
  defaultValue: string;
  no_extend: boolean;
  footer: boolean;
  dir: string;
}

export interface IColumns {
  solo: BaseColumn[];
  returns: BaseColumn[];
  total_returns: Total_return[];
  mojo:BaseColumn[]
}

export const columns: IColumns = {
  mojo:[
   {
      title: 'Quantity ',
      code: 'q_txt',
      short_header:'dotsum.q_txt',
      clr:'q_clr',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Valuation ',
      code: 'v_txt',
      short_header:'dotsum.v_txt',
      clr:'v_clr',

      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: ' Technical ',
      code: 'tech_txt',
      short_header:'dotsum.tech_txt',
      clr:'tech_clr',

      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
  ],
  // mix
  solo: [
    // mojo

    //financials
    {
      title: 'Net Sales / Int Earned (Rs Cr) ',
      code: 'netsale',
      // short_header:'',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Other Income (Rs Cr) ',
      code: 'othinc',
      // short_header:'',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Operating Profit (Rs Cr) ',
      code: 'opprof',
      // short_header:'',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Interest Paid (Rs Cr) ',
      code: 'intpaid',
      // short_header:'',
      hold: '%',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Tax Ratio (%)',
      code: 'tax',
      // short_header:'',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Net Profit (Rs Cr) ',
      code: 'netprof',
      // short_header:'',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'EPS (Rs)',
      code: 'eps',
      // short_header:'',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },

    // ratios
    {
      title: 'Price to Book (P/BV)',
      code: 'pbv',
      // short_header:'',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Return on Equity (ROE)',
      code: 'roe',
      // short_header:'',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Debt to Equity Ratio',
      code: 'debeq',
      // short_header:'',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Dividend Yield (%)',
      code: 'divy',
      // short_header:'',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    // risk
    {
      title: 'volatility',
      code: 'volatility',
      // short_header:'',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    {
      title: ' Risk Adj Returns',
      code: 'riskadj',
      // short_header:'',
      hold: '',
      defaultValue: '0.00',
      no_extend: true,
      footer: false,
    },

    {
      title: 'Beta (Adjusted)',
      code: 'beta',
      // short_header:'',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    {
      title: 'Value At Risk',
      code: 'riskval',
      // short_header:'',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    // price
    {
      title: "Day's High",
      code: 'dh',
      // short_header:'',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: true,
    },
    {
      title: "Day's Low",
      code: 'dl',
      // short_header:'',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: true,
    },

    // contribution
    {
      title: 'Unrealized Gain Contribution',
      code: 'unrgaincontri',
      // short_header:'',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: true,
    },
    {
      title: 'Portfolio Weight',
      code: 'pwt',
      // short_header:'',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    //dividend
    {
      title: 'Dividend Received',
      code: 'div',
      // short_header:'',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    // tax
    {
      title: '31 Jan 2018',
      code: 'jan31price',
      // short_header:'',
      hold: '',
      defaultValue: '0.00',
      no_extend: false,
      footer: false,
    },
    {
      title: ' Avg Holding (Yrs)',
      code: 'avghold',
      // short_header:'',
      hold: '',
      defaultValue: '0.00',
      no_extend: false,
      footer: true,
    },
    {
      title: ' ST Tax (If Sold)',
      code: 'sttax',
      // short_header:'',
      hold: '',
      defaultValue: '-',
      no_extend: false,
      footer: true,
    },
    {
      title: 'Days left for ST Tax',
      code: 'dayleft',
      // short_header:'',
      hold: '',
      defaultValue: 'Tax Free',
      no_extend: false,
      footer: false,
    },
    {
      title: ' LT Tax (If Sold)',
      code: 'lttax',
      // short_header:'',
      hold: '',
      defaultValue: '-',
      no_extend: false,
      footer: true,
    },
    {
      title: ' Post Tax Value',
      code: 'ptv',
      // short_header:'',
      hold: '',
      defaultValue: '-',
      no_extend: false,
      footer: true,
    },
  ],

  returns: [
    {
      title: '1 Day ',
      code: 'D1',
      // short_header:'',
      hold: '%',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: '1 Week  ',
      code: 'W1',
      // short_header:'',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },
    {
      title: '1 Month   ',
      code: 'M1',
      // short_header:'',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },
    {
      title: '3 Months ',
      code: 'M3',
      // short_header:'',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },
    {
      title: '6 Months ',
      code: 'M6',
      // short_header:'',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },
    {
      title: 'YTD ',
      code: 'YTD',
      // short_header:'',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    {
      title: '1 Year  ',
      code: 'Y1',
      // short_header:'',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    {
      title: '3 Year  ',
      code: 'Y3',
      // short_header:'',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    {
      title: '5 Year ',
      code: 'Y5',
      // short_header:'',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },
  ],

  total_returns: [
    // total returns
    {
      title: 'Realised Gain ',
      code: 'rgain',
      short_header:'',
      hold: '',
      defaultValue: '-',
      no_extend: false,
      footer: true,
      dir: 'rgaindir',
    },
    {
      title: 'Total Gain ',
      code: 'tgain',
      short_header:'',
      hold: '',
      defaultValue: '-',
      no_extend: false,
      footer: true,
      dir: 'tgaindir',
    },
    {
      title: 'Total Gain (%)  ',
      code: 'tgainp',
      short_header:'',
      hold: '%',
      defaultValue: '-',
      no_extend: false,
      footer: true,
      dir: 'tgainpdir',
    },
  ],

};
