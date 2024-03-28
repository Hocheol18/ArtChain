import { makeQuerystring } from "../utils/ApiUtils";
import { localAxios } from "./https";
import {
  getMarketMainDisplayListParams,
  getMarketSellingDisplayListInterface,
} from "../type/market.interface";

async function getMarketMainDisplayList(
  params: getMarketMainDisplayListParams
) {
  const { category, status, page, size } = params;
  const url = `/market${makeQuerystring({
    category,
    status,
    page,
    size,
  })}`;
  return await localAxios.get(url);
}

async function getMarketSellingDisplayList(
  params: getMarketSellingDisplayListInterface
) {
  const { fundingId, sortFlag, page, size } = params;
  const url = `/market/sellList${makeQuerystring({
    fundingId,
    sortFlag,
    page,
    size,
  })}`;
  return await localAxios.get(url);
}

export { getMarketMainDisplayList, getMarketSellingDisplayList };
