import {
  GetFunddingListParams,
  GetFunddingListResponse,
  GetFundingParams,
  GetFundingResponse,
  GetNoticeParams,
  Notice,
} from "../type/invest.interface";
import { makeQuerystring } from "../utils/ApiUtils";
import { localAxios } from "./https";

//투자 리스트 보기
export const getFunddingList = async (
  params: GetFunddingListParams
): Promise<GetFunddingListResponse | string> => {
  const { category, status, allowStat, page, size } = params;
  const url = `/funding/list${makeQuerystring({
    category,
    status,
    allowStat,
    page,
    size,
  })}`;
  console.log(url);
  const response = await localAxios.get(url);

  if (response.data.data && response.data.data.fundingList) {
    return response.data.data;
  } else {
    return response.data.message;
  }
};

//투자 상세보기
export const getFundding = async (
  params: GetFundingParams
): Promise<GetFundingResponse> => {
  const { fundingId } = params;
  const url = `/funding/${fundingId}`;
  console.log(url);

  const response = await localAxios.get(url);

  return response.data.data;
};

//투자 공지사항 상세보기
export const getNotice = async (params: GetNoticeParams): Promise<Notice> => {
  const { fundingId, fundingNoticeId } = params;
  const url = `/funding/${fundingId}/notice/${fundingNoticeId}`;

  const response = await localAxios.get(url);
  return response.data.data;
};
