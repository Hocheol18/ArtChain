export interface GetMyPieceDropDown{
    fundingId : number;
    fundingName : string;
    poster : string;
}

export interface GetMyPieceListParams {
    fundingId : number;
    filterFlag : string;
    page : number;
    size : number;
}

export interface GetMyPieceList {
    transactionType : string;
    id : number;
    pieceCount : number;
    coinCount : number;
    tradeFlag : string;
    createdAd : string;
}
