package com.ssafy.artchain.sse.service;

import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

public interface SseService {
    SseEmitter subscribe();

    void send(Object data, String eventId, SseEmitter sseEmitter, String eventName);
}
