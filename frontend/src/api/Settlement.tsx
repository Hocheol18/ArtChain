import {
  // PostSettlementRequest,
  GetSettlementDetailRequest,
  PutSettlementStatusRequest,
} from "../type/settlement.interface";
import { localAxios, imageAxios } from "./https";

// 정산 신청(기업)
export const PostSettlement = async (params: FormData): Promise<FormData> => {
  const url = `/settlement`;

  console.log(params);

  const response = await imageAxios.post(url, params);

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

// 정산 신청 리스트 보기(관리자)
export const GetSettlementList = async () => {
  const url = `/settlement/list`;

  const response = await localAxios.get(url);

  return response.data.data;
};

// 정산 승인/거절(관리자)
export const PutSettlementStatus = async (
  params: PutSettlementStatusRequest
): Promise<PutSettlementStatusRequest> => {
  const { settlementId, status } = params;
  const url = `/settlement/${settlementId}/allow/${status}`;

  const response = await localAxios.put(url);

  return response.data.data;
};

// 정산 신청 삭제(관리자)
export const DeleteSettlement = async (
  params: GetSettlementDetailRequest
): Promise<GetSettlementDetailRequest> => {
  const { settlementId } = params;
  const url = `/settlement/${settlementId}`;

  const response = await localAxios.delete(url);

  return response.data.data;
};
