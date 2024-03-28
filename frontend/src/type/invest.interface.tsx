//투자리스트 조회 param
export interface GetFunddingListParams {
  category: string;
  status: string;
  allowStat: string;
  page: number;
  size: number;
}

//투자리스트 조회 응답
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

//투자상세보기 param
export interface GetFundingParams {
  fundingId: string | undefined;
}

export interface Notice {
  id: number;
  fundingId: number;
  title: string;
  content: string;
}

export interface Schedule {
  id: number;
  fundingId: number;
  scheduleName: string;
  scheduleDate: string;
}

export interface ExpectedReturn {
  id: number;
  fundingId: number;
  spectatorNum: number;
  expectedReturn: number;
}

export interface Sale {
  id: number;
  fundingId: number;
  mainVariety: string;
  subVariety: string;
  percentage: number;
}

export interface Cost {
  id: number;
  fundingId: number;
  mainVariety: string;
  subVariety: string;
}

export interface GetFundingResponse {
  id: number;
  entId: number;
  name: string;
  poster: string;
  category: string;
  descriptionImg: string;
  recruitStart: string;
  recruitEnd: string;
  settlement: string;
  goalCoinCount: number;
  nowCoinCount: number;
  contractAddress: string;
  totalBudget: number;
  unitPrice: number;
  bep: number;
  progressStatus: string;
  isAllow: boolean;
  noticeList: Notice[];
  scheduleList: Schedule[];
  expectedReturnList: ExpectedReturn[];
  saleList: Sale[];
  costList: Cost[];
}

export interface GetNoticeParams {
  fundingId: string | undefined;
  fundingNoticeId: string | undefined;
}
