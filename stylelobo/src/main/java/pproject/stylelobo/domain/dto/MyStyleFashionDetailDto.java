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
    private String selectedFace;
    private String selectedBody;

    public MyStyleFashionDetailDto(String nickname,
                                   String selectedStyles, String diagnosedStyle, LocalDateTime createAt, String selectedFace, String selectedBody) {

        this.nickname = nickname;
        this.selectedStyles = selectedStyles;
        this.diagnosedStyle = diagnosedStyle;
        this.createAt = createAt;
        this.selectedFace = selectedFace;
        this.selectedBody = selectedBody;
    }
}
