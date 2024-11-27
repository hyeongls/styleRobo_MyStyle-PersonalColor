package pproject.stylelobo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pproject.stylelobo.domain.dto.MyStyleColorDetailDto;
import pproject.stylelobo.domain.dto.MyStyleFashionDetailDto;
import pproject.stylelobo.domain.dto.MyStyleResponseDto;
import pproject.stylelobo.domain.table.Users;
import pproject.stylelobo.services.MyStyleSavedService;
import pproject.stylelobo.services.UsersService;

import java.util.List;

@RestController
@RequestMapping("/myStyle")
public class MyStyleController {
    @Autowired
    private MyStyleSavedService myStyleSavedService;
    @Autowired
    private UsersService usersService;


    @GetMapping("/{userName}")
    public MyStyleResponseDto myStyle(@PathVariable String userName){

        Users user = usersService.userFindByUserName(userName);
        List<MyStyleFashionDetailDto> myStyleFashionDetailDtos = myStyleSavedService.fashionMyStyle(user.getId());
        List<MyStyleColorDetailDto> myStyleColorDetailDtos = myStyleSavedService.colorMyStyle(user.getId());

        MyStyleResponseDto dto = new MyStyleResponseDto(myStyleFashionDetailDtos, myStyleColorDetailDtos);
        return dto;
    }

    @GetMapping("/test")
    public List<MyStyleColorDetailDto> test(){

        Users user = usersService.userFindByUserName("lshyeong");
        return myStyleSavedService.colorMyStyle(user.getId());
    }
}
