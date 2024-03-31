import {
  PostSettlementRequest,
  GetSettlementDetailRequest,
} from "../type/settlement.interface";
import { makeQuerystring } from "../utils/ApiUtils";
import { localAxios } from "./https";

// 정산 신청(기업)
export const PostSettlement = async (
  params: PostSettlementRequest
): Promise<PostSettlementRequest> => {
  const url = `/settlement`;

  const response = await localAxios.post(url, params);

  return response.data.data;
};

// 정산 신청 상세보기(기업/관리자)
export const GetSettlementDetail = async (
  params: GetSettlementDetailRequest
): Promise<GetSettlementDetailRequest> => {
  const { settlementId } = params;
  const url = `/settlement/${settlementId}`;

  const response = await localAxios.get(url);

  return response.data.data;
};
