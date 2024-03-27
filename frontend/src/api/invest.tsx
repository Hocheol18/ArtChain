import {
  GetFunddingListParams,
  GetFunddingListResponse,
} from "../type/invest.interface";
import { makeQuerystring } from "../utils/ApiUtils";
import { localAxios } from "./https";

export const getFunddingList = async (
  params: GetFunddingListParams
): Promise<GetFunddingListResponse[]> => {
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
  //   const response = await axios.get(url);
  return response.data.data.fundingList;
};
