package com.ssafy.artchain.funding.repository;

import com.ssafy.artchain.funding.entity.FundingSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FundingScheduleRepository extends JpaRepository<FundingSchedule, Long> {
}
