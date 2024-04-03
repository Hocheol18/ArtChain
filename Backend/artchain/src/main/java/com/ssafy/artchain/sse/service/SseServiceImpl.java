package com.ssafy.artchain.sse.service;

import com.ssafy.artchain.sse.repository.SseRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;

@Service
@RequiredArgsConstructor
@Slf4j
public class SseServiceImpl implements SseService {

    private final SseRepository sseRepository;

    private final static Long DEFAULT_TIMEOUT = 300_000L;

    @Override
    public SseEmitter subscribe() {
        log.info("!!! sse service !!!");

        String eventId = "ADMIN";

        SseEmitter sseEmitter = sseRepository.save(eventId, new SseEmitter(DEFAULT_TIMEOUT));

        // emitter handling
        sseEmitter.onTimeout(() -> sseRepository.deleteById(eventId));
        sseEmitter.onError((e) -> sseRepository.deleteById(eventId));
        sseEmitter.onCompletion(() -> sseRepository.deleteById(eventId));

        // dummy data 전송
        send("*** START SUBSCRIBE SSE ***", eventId, sseEmitter, "DUMMY");

        return sseEmitter;
    }

    @Override
    public void send(Object data, String eventId, SseEmitter sseEmitter, String eventName) {
        try {
            sseEmitter.send(SseEmitter.event()
                    .reconnectTime(3000L)
                    .id(eventId)
                    .data(data, MediaType.APPLICATION_JSON)
                    .name(eventName));
        } catch (IOException | IllegalStateException e) {
            log.error("SSE: IOException | IllegalStateException is occurred. ", e);
            sseRepository.deleteById(eventId);
        }
    }
}
