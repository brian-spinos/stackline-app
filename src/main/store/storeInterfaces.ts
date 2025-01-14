export interface SeachState {
  results: DataResult[];
  value: number;
  searchData: DataResult[];
}

export interface DataResult {
  data: object[];
}
