export interface IDiversification {
  code: string
  message: string
  data: IDiversification_Data
}

export interface IDiversification_Data {
  score: Score
  summary: Summary
  color: Color
  sector: I_diversi_sector
  mcap: I_diversi_sector
  holding: I_diversi_sector
  stocks: Stock[]
}

 interface Score {
  color: string
  text: string
}

 interface Summary {
  remain: number
  top3hp: number
  hihold: number
  hisect: string
  lcap: number
  txt: string
}

 interface Color {
  remain: string
  top3hp: string
  hihold: string
  hisect: string
  lcap: string
}

export interface I_diversi_sector {
  toptxt: string
  secondtxt: string
  clr: string
  graph: Graph
}

 interface Graph {
  [key:string]: number

}


 interface Stock {
  main: string
  sub: string
  clr: string
}
