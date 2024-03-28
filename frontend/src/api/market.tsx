import { makeQuerystring } from "../utils/ApiUtils";
import { localAxios } from "./https";
import { getMarketMainDisplayListParams } from "../type/market.interface";

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

export { getMarketMainDisplayList };
