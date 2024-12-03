package pproject.stylelobo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pproject.stylelobo.domain.table.Users;
import pproject.stylelobo.repository.UsersRepository;
import pproject.stylelobo.services.UsersService;

import java.util.List;


@RestController
public class UserController {

    @Autowired
    private UsersService usersService;
    @Autowired
    private UsersRepository usersRepository;

    @GetMapping("/find/{nickName}")
    public String findbyNickName(@PathVariable String nickName){

        System.out.println(nickName);

        Users user = usersService.userFindByUserName(nickName);


        return user.getNickName();
    }

    @GetMapping("/find")
    public List<Users> findAllUser(){

        return usersRepository.findAll();
    }

    @GetMapping("/api/hello")
    public String hello(){
        return "아이디";
    }
}
