package pproject.stylelobo.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import pproject.stylelobo.domain.Gender;
import pproject.stylelobo.domain.dto.*;
import pproject.stylelobo.domain.table.FavoriteFashionResults;
import pproject.stylelobo.domain.table.Personal_Color;
import pproject.stylelobo.domain.table.Users;
import pproject.stylelobo.services.FashionImageService;
import pproject.stylelobo.services.MyStyleSavedService;
import pproject.stylelobo.services.UsersService;
import pproject.stylelobo.status.DefaultRes;
import pproject.stylelobo.status.ResponseMessage;
import pproject.stylelobo.status.StatusCode;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/fashion")
public class FashionImageController {


    @Autowired
    private FashionImageService fashionImageService;
    @Autowired
    private UsersService usersService;
    @Autowired
    private MyStyleSavedService myStyleSavedService;


    @PostMapping("/image")
    public ResponseEntity<List<FashionResDto>> FashionType(@RequestBody FashionTypeDTO fas, HttpSession session)
    {

        String userName = (String) session.getAttribute("username");
        Users user = usersService.userFindByUserName(userName);

        Gender gender = user.getGender();

        if(fas.getType() != null && fas.getText() != null)
        {
            List<ImageResDTO> res = new ArrayList<>();

            //img api로 이미지 url 받아오기
            AiFashionDTO AIdto = new AiFashionDTO("성별 : " + gender + ", 체형 : " + fas.getSelectedBody() + ", 얼굴형 : "
                    + fas.getSelectedFace() +  ", 스타일 : " + fas.getType() + ", " + fas.getText() + ", 전신 사진으로", 1);
            ImageResDTO imageResDTO = fashionImageService.FashionType(AIdto);

            res.add(imageResDTO);

            return new ResponseEntity(DefaultRes.res(StatusCode.OK,ResponseMessage.IMAGE_SUCCESS, res), HttpStatus.OK);
        }
        else{
            return new ResponseEntity(DefaultRes.res(StatusCode.NO_CONTENT, null), HttpStatus.OK);
        }
    }

    @PostMapping("/save")
    public ResponseEntity<StatusDTO> save(@RequestBody FashionTypeDTO fas, HttpSession session) throws IOException {

        boolean isLogin = Optional.ofNullable((Boolean) session.getAttribute("isLogin")).orElse(false);
        StatusDTO dto = new StatusDTO();

        if(isLogin){
            String userName = (String) session.getAttribute("username");

            Users user = usersService.userFindByUserName(userName);

            //DB에 저장
            FavoriteFashionResults favoriteFashionResult = fashionImageService.saveFashionImage(fas.getSelectedBody(), fas.getSelectedFace(),
                    fas.getUrl(), user, fas.getSelectedFace(), fas.getSelectedBody());
            //MyStyle DB에 저장
            myStyleSavedService.saveMyStyle(user, null, favoriteFashionResult);

            dto.setMessage("저장 성공.");

            return new ResponseEntity(DefaultRes.res(StatusCode.OK, ResponseMessage.SAVE_SUCCESS, dto), HttpStatus.OK);
        }
        else{
            dto.setMessage("로그인 필요.");
            return new ResponseEntity(DefaultRes.res(StatusCode.NO_CONTENT, ResponseMessage.SAVE_FAIL, dto), HttpStatus.OK);
        }

    }
}
