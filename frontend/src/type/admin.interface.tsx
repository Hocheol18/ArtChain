export interface getEnrollList {
    id : number;
    name : string;
    businessRegistrationNumber : string;
    createdAt : string;
    permission : string
}

export interface getProjectList {
    id : number;
    entId : number;
    fundingName : string;
    comName : string;
}

export interface getSettlementList {
    id : number;
    entName : string;
    fundingTitle : string;
    settlementPrice : number;
    status : string;
}