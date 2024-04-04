package com.ssafy.artchain.s3;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class S3Service {

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    private final AmazonS3Client amazonS3Client;

    // S3 업로드 메서드
    public String upload(MultipartFile multipartFile, String fundingName) throws IOException {
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentType(multipartFile.getContentType());
        metadata.setContentLength(multipartFile.getSize());

        String fileName = createFileName(fundingName, multipartFile.getOriginalFilename());

        PutObjectRequest request = new PutObjectRequest(bucket, fileName , multipartFile.getInputStream(), metadata);

        try {
            amazonS3Client.putObject(request);
        } catch (AmazonServiceException e) {
            e.printStackTrace();
        } catch (SdkClientException e) {
            e.printStackTrace();
        }

        return amazonS3Client.getUrl(bucket,fileName).toString();
    }

    // 파일명 생성
    private String createFileName(String fundingName, String fileName) {
        return String.format("%s/%s",fundingName, UUID.randomUUID().toString()+"_"+fileName );
    }
}
