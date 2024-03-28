export interface GetFunddingListParams {
  category: string;
  status: string;
  allowStat: string;
  page: number;
  size: number;
}

export interface GetFunddingListResponse {
  id: number;
  entId: number;
  name: string;
  poster: string;
  goalCoinCount: number;
  nowCoinCount: number;
  contractAddress: string;
  category: string;
  isAllow: boolean;
  progressStatus: string;
  recruitEnd: string;
  recruitStart: string;
  settlement: string;
}
