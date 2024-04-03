package com.ssafy.artchain.funding.repository;

import com.ssafy.artchain.funding.entity.FundingNotice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FundingNoticeRepository extends JpaRepository<FundingNotice, Long> {

}
