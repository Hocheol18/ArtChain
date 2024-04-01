//투자리스트 조회 param
export interface GetFunddingListParams {
  category: string;
  status: string;
  allowStat: string;
  page: number;
  size: number;
}

//투자리스트 조회 응답
export interface FunddingList {
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
  investorNum: number;
  finalReturnRate: number;
}

export interface GetFunddingListResponse {
  totalCount: number;
  fundingList: FunddingList[];
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
  entName: string;
  createdAt: string;
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
  investorNum: number;
}

export interface GetNoticeParams {
  fundingId: string | undefined;
  fundingNoticeId: string | undefined;
}

// 투자하기 Params
export interface PostFundingParams {
  fundingRequest: PostFundingRequest;
  fundingId: string | undefined;
}

//투자하기 request
export interface PostFundingRequest {
  transactionHash: string;
  transactiontime: string;
  coinCount: number;
  pieceCount: number;
}

// 투자하기 Response
export interface PostFundingResponse {
  id: number;
}

// 투자 공지 작성 request
export interface PostFundingNoticeRequest {
  fundingId: string | undefined;
  notice: FundingNoticeParam;
}

// 투자 공지 수정 request
export interface PutFundingNoticeRequest {
  fundingId: string | undefined;
  fundingNoticeId: string | undefined;
  notice: FundingNoticeParam;
}

// 투자 공지 삭제 request
export interface DeleteFundingNoticeRequest {
  fundingId: string | undefined;
  fundingNoticeId: string | undefined;
}

// 투자 공지 내용 param
export interface FundingNoticeParam {
  title: string;
  content: string;
}

// 투자 승인/거절 request
export interface FundingAllowRequest {
  fundingId: number;
  allowStatus: string;
}

// 투자 진행 상태 수정 request
export interface FundingStatusRequest {
  fundingId: number;
  progressStatus: string;
}

// 투자 공고 등록 request
export interface PostFundingRequest {
  poster: File;
  descriptionImg: File;
  dto: PostFundingRequestParam;
}

// 투자 공고 등록 request
export interface PostFundingRequestParam {
  name: string;
  category: string;
  recruitStart: string;
  recruitEnd: string;
  settlement: string;
  goalCoinCount: number;
  totalBudget: number;
  unitPrice: number;
  bep: number;
  scheduleList: ScheduleParam[];
  expectedReturnList: ExpectedReturnParam[];
  saleList: SaleParam[];
  costList: CostParam[];
}

// schedule param
export interface ScheduleParam {
  scheduleName: string;
  scheduleDate: string;
}

// schedule param
export interface ExpectedReturnParam {
  spectatorNum: number;
  expectedReturn: number;
}

// schedule param
export interface SaleParam {
  mainVariety: string;
  subVariety: string;
  percentage: number;
}

// schedule param
export interface CostParam {
  mainVariety: string;
  subVariety: string;
}
