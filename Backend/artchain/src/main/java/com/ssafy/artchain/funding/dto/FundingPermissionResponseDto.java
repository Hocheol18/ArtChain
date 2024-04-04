package com.ssafy.artchain.funding.dto;

import com.ssafy.artchain.funding.entity.Funding;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FundingPermissionResponseDto {
    private Long id;
    private Long entId;
    private String fundingName;
    private String comName;

    public FundingPermissionResponseDto(Funding funding){
        this.id = funding.getId();
        this.entId = funding.getEntId();
        this.fundingName = funding.getName();
        this.comName = null;
    }

}
