export interface getMarketMainDisplayListParams {
  category: string;
  status: string;
  page: number;
  size: number;
}

export interface getMarketMainDisplayListInterface {
  id: number;
  name: string;
  poster: string;
  category: string;
  status: string;
  nowCoinCount: number;
  settlement: string;
}

export interface getMarketSellingDisplayListAxiosInterface {
  fundingId: number;
  sortFlag: string;
  page: number;
  size: number;
}

export interface getMarketSellingDisplayListInterface {
  id: number;
  fundingId: number;
  pieceCount: number;
  totalCoin: number;
  coinPerPiece: number;
  sellerId: number;
  sellerAddress: string;
  status: string;
}

export interface getMarketHistoryDisplayListAxiosInterface {
  fundingId: number;
  page: number;
  size: number;
}

export interface getMarketHistoryDisplayListInterface {
  id: number;
  fundingId: number;
  pieceCount: number;
  totalCoin: number;
  coinPerPiece: number;
  sellerId: number;
  sellerAddress: string;
  buyerId: number | null;
  buyerAddress: string | null;
  status: string;
  historyTime: string;
}

export interface postMarketEnrollInterface {
  fundingId: number;
  contractAddress: string;
  pieceCount: number;
  totalCoin: number;
  coinPerPiece: number;
}

export interface getMarketDetailDisplayInterface {
  buyerAddress: string | null;
  coinPerPiece: number;
  companyName: string;
  contractAddress: string;
  fundingId: number;
  fundingName: string;
  id: number;
  pieceCount: number;
  sellerAddress: string;
  status: string;
  totalCoin: number;
}
