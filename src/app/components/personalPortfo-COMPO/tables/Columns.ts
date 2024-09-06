interface BaseColumn {
  title: string;
  code: string;
  hold: string;
  defaultValue: string;
  no_extend: boolean;
  footer: boolean;
}

interface Total_return {
  title: string;
  code: string;
  hold: string;
  defaultValue: string;
  no_extend: boolean;
  footer: boolean;
  dir:string
}

export interface IColumns {
  solo: BaseColumn[];
  returns: BaseColumn[];
  total_returns:Total_return[]
}

export const columns: IColumns = {
  solo: [




    //financials
    {
      title: 'Net Sales / Int Earned (Rs Cr) ',
      code: 'netsale',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Other Income (Rs Cr) ',
      code: 'othinc',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Operating Profit (Rs Cr) ',
      code: 'opprof',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Interest Paid (Rs Cr) ',
      code: 'intpaid',
      hold: '%',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Tax Ratio (%)',
      code: 'tax',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Net Profit (Rs Cr) ',
      code: 'netprof',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: 'EPS (Rs)',
      code: 'eps',
      hold: '',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },

    // ratios
    {
      title: 'Price to Book (P/BV)',
      code: 'pbv',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Return on Equity (ROE)',
      code: 'roe',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Debt to Equity Ratio',
      code: 'debeq',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },
    {
      title: 'Dividend Yield (%)',
      code: 'divy',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    // risk
    {
      title: 'volatility',
      code: 'volatility',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    {
      title: ' Risk Adj Returns',
      code: 'riskadj',
      hold: '',
      defaultValue: '0.00',
      no_extend: true,
      footer: false,
    },

    {
      title: 'Beta (Adjusted)',
      code: 'beta',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    {
      title: 'Value At Risk',
      code: 'riskval',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    // price
    {
      title: "Day's High",
      code: 'dh',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: true,
    },
    {
      title: "Day's Low",
      code: 'dl',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: true,
    },

    // contribution
    {
      title: 'Unrealized Gain Contribution',
      code: 'unrgaincontri',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: true,
    },
    {
      title: 'Portfolio Weight',
      code: 'pwt',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    //dividend
    {
      title: 'Dividend Received',
      code: 'div',
      hold: '',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    // tax
    {
      title: '31 Jan 2018',
      code: 'jan31price',
      hold: '',
      defaultValue: '0.00',
      no_extend: false,
      footer: false,
    },
    {
      title: ' Avg Holding (Yrs)',
      code: 'avghold',
      hold: '',
      defaultValue: '0.00',
      no_extend: false,
      footer: true,
    },
    {
      title: ' ST Tax (If Sold)',
      code: 'sttax',
      hold: '',
      defaultValue: '-',
      no_extend: false,
      footer: true,
    },
    {
      title: 'Days left for ST Tax',
      code: 'dayleft',
      hold: '',
      defaultValue: 'Tax Free',
      no_extend: false,
      footer: false,
    },
    {
      title: ' LT Tax (If Sold)',
      code: 'lttax',
      hold: '',
      defaultValue: '-',
      no_extend: false,
      footer: true,
    },
    {
      title: ' Post Tax Value',
      code: 'ptv',
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
      hold: '%',
      defaultValue: '-',
      no_extend: true,
      footer: false,
    },
    {
      title: '1 Week  ',
      code: 'W1',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },
    {
      title: '1 Month   ',
      code: 'M1',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },
    {
      title: '3 Months ',
      code: 'M3',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },
    {
      title: '6 Months ',
      code: 'M6',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },
    {
      title: 'YTD ',
      code: 'YTD',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    {
      title: '1 Year  ',
      code: 'Y1',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    {
      title: '3 Year  ',
      code: 'Y3',
      hold: '%',
      defaultValue: 'NA',
      no_extend: true,
      footer: false,
    },

    {
      title: '5 Year ',
      code: 'Y5',
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
      hold: '',
      defaultValue: '-',
      no_extend: false,
      footer: true,
      dir: 'rgaindir'
    },
    {
      title: 'Total Gain ',
      code: 'tgain',
      hold: '',
      defaultValue: '-',
      no_extend: false,
      footer: true,
      dir: 'tgaindir'
    },
    {
      title: 'Total Gain (%)  ',
      code: 'tgainp',
      hold: '%',
      defaultValue: '-',
      no_extend: false,
      footer: true,
      dir: 'tgainpdir'
    },
  ]

};
