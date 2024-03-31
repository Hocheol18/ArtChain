// 정산 신청 param
export interface SettlementParam {
  fundingId: number;
  settlementPrice: number;
  returnRate: number;
  depositDate: string;
}

// 정산 신청 Request(기업)
export interface PostSettlementRequest {
  file: File;
  dto: SettlementParam;
}

// 정산 신청 Request(기업/관리자)
export interface GetSettlementDetailRequest {
  settlementId: number;
}
