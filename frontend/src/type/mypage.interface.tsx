// 기업 마이페이지 response
export interface BusinessMyPageResponse {
  id: number;
  name: string;
  fundingList: BusinessMyPageFunding[];
}
export interface BusinessMyPageFunding {
  id: number;
  name: string;
  poster: string;
  newCoinCount: number;
  goalCoinCount: number;
  recruitEnd: string;
  status: string;
  share: number;
}
