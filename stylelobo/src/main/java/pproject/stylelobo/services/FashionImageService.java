package pproject.stylelobo.services;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import pproject.stylelobo.config.ImageConfig;
import pproject.stylelobo.domain.dto.AiFashionDTO;
import pproject.stylelobo.domain.dto.ImageResDTO;
import pproject.stylelobo.domain.table.FavoriteFashionResults;
import pproject.stylelobo.domain.table.Personal_Color;
import pproject.stylelobo.domain.table.Users;
import pproject.stylelobo.repository.FavoriteFashionResultsRepository;

@RequiredArgsConstructor
@Service
public class FashionImageService {

    @Autowired
    private final RestTemplate restTemplate;

    private final FavoriteFashionResultsRepository favoriteFashionResultsRepository;

    @Value("${apiKey.key}")
    private String apiKey;

    public ImageResDTO FashionType(AiFashionDTO dto){
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.parseMediaType(ImageConfig.MEDIA_TYPE));
        httpHeaders.add(ImageConfig.AUTHORIZATION, ImageConfig.BEARER + apiKey);

        HttpEntity<AiFashionDTO> resquestHttpEntity = new HttpEntity<>(dto, httpHeaders);
        ResponseEntity<ImageResDTO> responseEntity = restTemplate.postForEntity(ImageConfig.IMAGE_URL, resquestHttpEntity, ImageResDTO.class);

        return responseEntity.getBody();
    }

    public FavoriteFashionResults saveFashionImage(String selectedStyles, String preferredStyleInput, byte[] diagnosedStyle, Users user){

        FavoriteFashionResults personalColor = new FavoriteFashionResults(selectedStyles, preferredStyleInput, diagnosedStyle, user);

        return favoriteFashionResultsRepository.save(personalColor);
    }
}
