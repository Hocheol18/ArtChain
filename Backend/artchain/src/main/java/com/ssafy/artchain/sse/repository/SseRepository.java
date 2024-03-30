package com.ssafy.artchain.sse.repository;

import org.springframework.stereotype.Repository;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

@Repository
public class SseRepository {

    // thread-safe한 자료구조 사용.
    private final Map<String, SseEmitter> emitterMap = new ConcurrentHashMap<>();

    public SseEmitter save(String eventId, SseEmitter sseEmitter) {
        emitterMap.put(eventId, sseEmitter);

        return sseEmitter;
    }

    public void deleteById(String eventId) {
        emitterMap.remove(eventId);
    }

    public Optional<SseEmitter> findById(String eventId) {
        return Optional.ofNullable(emitterMap.get(eventId));
    }
}
