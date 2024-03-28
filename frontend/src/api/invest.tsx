import {
  GetFunddingListParams,
  GetFunddingListResponse,
  GetFundingParams,
  GetFundingResponse,
} from "../type/invest.interface";
import { makeQuerystring } from "../utils/ApiUtils";
import { localAxios } from "./https";

export const getFunddingList = async (
  params: GetFunddingListParams
): Promise<GetFunddingListResponse[] | string> => {
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
    return response.data.data.fundingList;
  } else {
    return response.data.message;
  }
};

export const getFundding = async (
  params: GetFundingParams
): Promise<GetFundingResponse> => {
  const { fundingId } = params;
  const url = `/funding/${fundingId}`;
  console.log(url);

  const response = await localAxios.get(url);

  return response.data.data;
};
