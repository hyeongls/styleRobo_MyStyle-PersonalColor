package pproject.stylelobo.domain.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class MyStyleFashionDetailDto {


    private String nickname;
    private String selectedStyles;
    private byte[] diagnosedStyle;
    private LocalDateTime createAt;

    public MyStyleFashionDetailDto(String nickname,
                                   String selectedStyles, byte[] diagnosedStyle, LocalDateTime createAt) {

        this.nickname = nickname;
        this.selectedStyles = selectedStyles;
        this.diagnosedStyle = diagnosedStyle;
        this.createAt = createAt;
    }
}
