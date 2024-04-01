//충전, 환전 Params
export interface PostChargePrams {
  coinAmount: number;
  currencyFlow: number;
  transactionHash: string;
  inoutFlag: string;
}

//충전, 환전 Response
export interface PostChargeResponse {
  status: number;
  message: string;
}

//충전, 환전 내역 Params
export interface ReadHistoryParams {
  inoutFlag: string;
  page: number | undefined;
  size: number | undefined;
}

//충전, 환전 내역 Response
export interface ReadHistoryResponse {
  coinAmount: number;
  currencyFlow: number;
  createAt: string;
}
