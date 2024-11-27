package pproject.stylelobo.domain.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class personalColorResponseDto {
    private String personalColor;
    private String nickname;
    private String recommendations;

    @Builder
    public personalColorResponseDto(String personalColor, String nickname, String recommendations) {
        this.personalColor = personalColor;
        this.nickname = nickname;
        this.recommendations = recommendations;
    }

    public personalColorResponseDto toEntity() {
        return personalColorResponseDto.builder()
                .personalColor(personalColor)
                .nickname(nickname)
                .recommendations(recommendations)
                .build();
    }
}
