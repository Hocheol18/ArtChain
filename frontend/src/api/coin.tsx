import {
  PostChargePrams,
  PostChargeResponse,
  ReadHistoryParams,
  ReadHistoryResponse,
} from "../type/coin.interface";
import { makeQuerystring } from "../utils/ApiUtils";
import { localAxios } from "./https";

//코인 충전 환전
export const PostCharge = async (
  params: PostChargePrams
): Promise<PostChargeResponse> => {
  const url = `/coin`;
  const response = await localAxios.post(url, params);

  console.log(response.data);

  return response.data;
};

//충전 환전 내역 리스트 조회
export const ReadHistory = async (
  params: ReadHistoryParams
): Promise<ReadHistoryResponse[]> => {
  const { inoutFlag, page, size } = params;
  const url = `/coin/history${makeQuerystring({
    inoutFlag,
    page,
    size,
  })}`;

  const response = await localAxios.get(url);

  return response.data.data;
};
