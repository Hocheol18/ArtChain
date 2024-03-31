export interface PostChargePrams {
  coinAmount: number;
  currencyFlow: number;
  transactionHash: string;
  inoutFlag: string;
}

export interface PostChargeResponse {
  status: number;
  message: string;
}
