export interface getMarketMainDisplayListParams {
    category : string;
    status : string;
    page : number;
    size : number;
}

export interface getMarketMainDisplayListInterface {
    id : number;
    name : string;
    poster : string;
    category : string;
    status : string;
    nowCoinCount : number;
    settlement : string;
}

export interface getMarketSellingDisplayListInterface {
    fundingId : number;
    sortFlag : string;
    page : number;
    size : number;
}