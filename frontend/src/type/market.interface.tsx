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

export interface buyContractCallInterfece {
  seller: string;
  tokenAddress: string;
  tokenAmount: number;
  price: number;
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
  contractAddress : string;
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
  fundingId: number | undefined;
  contractAddress: string;
  pieceCount: number;
  totalCoin: number;
  coinPerPiece: number;
  transactionHash: string;
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
  createdAt: string;
  updatedAt: string;
  transactionHash : string;
}

export interface getMarketMyTokenInterface {
  id: number;
  fundingId: number;
  name: string;
  pieceCount: number;
  contractAddress: string;
}

export interface buyMarketTokenInterface {
  seller: string;
  address: string;
  price: string;
  amount: string;
  completed: boolean;
}

// 메인페이지 마켓 top4 response
export interface MainPageMarketTop4ResponseInterface {
  fundingId: number;
  fundingName: string;
  fundingPoster: string;
  marketCount: number;
}
