export interface GetMyPieceDropDown {
  fundingId: number;
  fundingName: string;
  poster: string;
}

export interface GetMyPieceListParams {
  fundingId: number;
  filterFlag: string;
  page: number;
  size: number;
}

export interface GetMyPieceListResponse {
  transactionType: string;
  id: number;
  pieceCount: number;
  coinCount: number;
  tradeFlag: string;
  createdAd: string;
}

export interface GetMyInvestmentHistoryResponse {
  myIntegratedList: GetMyIntegratedList[];
}

export interface GetMyIntegratedList {
  fundingId: number;
  fundingProgressStatus: string;
  fundingTitle: string;
  fundingPoster: string;
  pieceCount: number;
  pieceUnitPrice: number;
  shareholdingRatio: number;
  settlementDate: string;
  settlementCoin: number;
  returnRate: number;
}

export interface GetMyInvestmentHistoryParams {
  status: string;
}

export interface GetMyPieceCountResponse {
  pieceOwnerList: GetMyPieceCountList[];
}

export interface GetMyPieceCountList {
  id: number;
  memberId: number;
  memberName: string;
  fundingId: number;
  fundingTitle: string;
  pieceCount: number;
}
