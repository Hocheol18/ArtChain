import { PostChargePrams, PostChargeResponse } from "../type/coin.interface";
import { localAxios } from "./https";

export const PostCharge = async (
  params: PostChargePrams
): Promise<PostChargeResponse> => {
  const url = `/coin`;
  const response = await localAxios.post(url, params);

  console.log(response.data);

  return response.data;
};
