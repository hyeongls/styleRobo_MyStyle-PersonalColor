package pproject.stylelobo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import pproject.stylelobo.domain.dto.personalColorResponseDto;
import pproject.stylelobo.domain.table.Personal_Color;
import pproject.stylelobo.domain.table.Users;
import pproject.stylelobo.services.MyStyleSavedService;
import pproject.stylelobo.services.PersonalColorServices;
import pproject.stylelobo.services.UsersService;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Base64;

@RestController
@RequestMapping("/api/personalColor")
public class PersonalColorConsultingController {

    @Autowired
    private UsersService usersService;
    @Autowired
    private PersonalColorServices personalColorServices;
    @Autowired
    private MyStyleSavedService myStyleSavedService;

    @PostMapping("/analysis")
    public personalColorResponseDto personalColorAnalysis(
            @RequestParam("file") MultipartFile file,
            @RequestParam("isLoggedIn") boolean isLoggedIn,
            @RequestParam(value = "userName", required = false) String userName) throws IOException {

        String pythonFilePath = "src\\main\\python\\test.py";

        Users user = usersService.userFindByUserName(userName);
        String nickName = user.getNickName();

        byte[] faceImage = file.getBytes();
        String base64Image = Base64.getEncoder().encodeToString(faceImage);

        //데이터 받아오는 로직
        String colorType = "";
        try {
            // Python 파일 실행
            ProcessBuilder proBuilder = new ProcessBuilder("python", pythonFilePath, base64Image);
            Process process = proBuilder.start();

            // Python 출력 읽기
            BufferedReader bufferReader = new BufferedReader(new InputStreamReader(process.getInputStream(), "utf-8"));
            String line;

            while ((line = bufferReader.readLine()) != null) {
                System.out.println(line);
                colorType = new String(line); // 출력 내용 콘솔에 표시
            }

            bufferReader.close();
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }

        String recommendation = "";

        if(colorType.equals("spring")){
            recommendation += "# 아이보리 계열 # 쉬폰 or 폴리스 소재 \n #밝은 컬러 #화사한 느낌 \n # 페미닌 & 러블리 스타일";
        } else if (colorType.equals("summer")) {
            recommendation += "# 연한 회색 or 소라색 계열 # 쉬폰 or 레이스 소재 \n #차가운 컬러 #화사한 느낌 \n # 페미닌 & 캐주얼 스타일";
        } else if (colorType.equals("fall")) {
            recommendation += "#갈색 계열 #가죽소재 \n #짙은 컬러  #진중한 이미지 \n #에스닉 & 보헤미안 스타일";
        }
        else if (colorType.equals("winter")){
            recommendation += "# 비비드한 색상 계열 # 빳빡한 시스루 or 스웨이드 소재 \n #화이트 & 블랙 #차갑고 모던한 느낌 \n # 오피스 & 올블랙 스타일";
        }

        //퍼스널 컬러 DB에 저장
        Personal_Color personalColorResult = personalColorServices.savePersonalColorResult(colorType, recommendation, faceImage, user);

        //MyStyle에 저장
        myStyleSavedService.saveMyStyle(user, personalColorResult, null);


        return new personalColorResponseDto(colorType, nickName, recommendation, user.getGender());
    }
}
