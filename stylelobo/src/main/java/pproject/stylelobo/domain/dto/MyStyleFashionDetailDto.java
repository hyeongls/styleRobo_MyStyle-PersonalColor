package pproject.stylelobo.domain.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class MyStyleFashionDetailDto {


    private String nickname;
    private String selectedStyles;
    private String diagnosedStyle;
    private LocalDateTime createAt;

    public MyStyleFashionDetailDto(String nickname,
                                   String selectedStyles, String diagnosedStyle, LocalDateTime createAt) {

        this.nickname = nickname;
        this.selectedStyles = selectedStyles;
        this.diagnosedStyle = diagnosedStyle;
        this.createAt = createAt;
    }
}
