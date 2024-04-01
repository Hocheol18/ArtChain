import { makeQuerystring } from "../utils/ApiUtils";
import { localAxios } from "./https";
import {
  GetMyPieceDropDown,
  GetMyPieceListResponse,
  GetMyPieceListParams
} from "../type/mypage.interface";


export const getMyPieceDropDown = async () : Promise<GetMyPieceDropDown []> => {
    const url = `/member/myTrade/dropDown`;
    console.log(url);
    const response = await localAxios.get(url);
    return response.data.data;
}

export const getMyPieceList = async(
    params : GetMyPieceListParams
): Promise<GetMyPieceListResponse> => {
    const { fundingId, filterFlag, page, size } = params;
    const url = `/member/myTrade${makeQuerystring({
        fundingId,
        filterFlag,
        page,
        size,
    })}`;
    console.log(url);
    const response = await localAxios.get(url);
    return response.data.data;
}


//투자 리스트 보기
// export const getFunddingList = async (
//     params: GetFunddingListParams
//   ): Promise<GetFunddingListResponse | string> => {
//     const { category, status, allowStat, page, size } = params;
//     const url = `/funding/list${makeQuerystring({
//       category,
//       status,
//       allowStat,
//       page,
//       size,
//     })}`;
//     console.log(url);
//     const response = await localAxios.get(url);
  
//     if (response.data.data && response.data.data.fundingList) {
//       return response.data.data;
//     } else {
//       return response.data.message;
//     }
//   };



//   async function getMarketChart(fundingId : number) {
//     const url = `/market/graph${makeQuerystring({
//       fundingId
//     })}`
//     return await localAxios.get(url)
//   }

