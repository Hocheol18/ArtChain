package com.ssafy.artchain.eventLog.repository;

import com.ssafy.artchain.eventLog.entity.EventLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventLogRepository extends JpaRepository<EventLog, Long> {
}
