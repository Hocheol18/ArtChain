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
  buyerId: number;
  buyerAddress: string;
  status: string;
}

export interface postMarketEnrollInterface {
  fundingId: number;
  contractAddress: string;
  pieceCount: number;
  totalCoin: number;
  coinPerPiece: number;
}

 
