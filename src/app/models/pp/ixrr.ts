export interface I_Ixrr {
  code: string
  message: string
  data: I_Ixrr_Data
}

export interface I_Ixrr_Data {
  list: List[]
}

 interface List {
  period: string
  discard: number
  abs_perc: string
  abs_perc_dir: number
  comp_perc: string
  comp_perc_dir: number
  absret: number
  compxirr_perc: string
  compxirr_perc_dir: number
  portxirr_perc: string
  portxirr_perc_dir: number
}
