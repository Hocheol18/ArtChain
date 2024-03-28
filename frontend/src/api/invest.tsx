import {
  GetFunddingListParams,
  GetFunddingListResponse,
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
  const response = await localAxios.get(url);

  if (response.data.data && response.data.data.fundingList) {
    return response.data.data.fundingList;
  } else {
    return response.data.message;
  }
};
