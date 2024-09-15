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
