package com.ssafy.artchain.funding.repository;

import com.ssafy.artchain.funding.entity.Funding;
import com.ssafy.artchain.funding.entity.FundingProgressStatus;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FundingRepository extends JpaRepository<Funding, Long> {

    List<Funding> findAllByProgressStatusIn(FundingProgressStatus[] statuses);

    List<Funding> findAllByCategoryAndProgressStatusIn(String category,
        FundingProgressStatus[] statuses);

}
