package com.ssafy.artchain.funding.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class MyIntegratedListResponseDto {
    private final List<MyIntegratedListItemDto> myIntegratedList;

    public MyIntegratedListResponseDto(List<MyIntegratedListItemDto> myIntegratedList) {
        this.myIntegratedList = myIntegratedList;
    }
}
