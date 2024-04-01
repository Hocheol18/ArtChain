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

// 정산 신청 상세보기 Request(기업/관리자)
export interface GetSettlementDetailRequest {
  settlementId: number;
}

// 정산 승인/거절(관리자)
export interface PutSettlementStatusRequest {
  settlementId: number;
  status: string;
}
