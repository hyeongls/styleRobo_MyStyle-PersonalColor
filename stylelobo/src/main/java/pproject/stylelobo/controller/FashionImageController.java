package pproject.stylelobo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pproject.stylelobo.domain.dto.AiFashionDTO;
import pproject.stylelobo.domain.dto.FashionTypeDTO;
import pproject.stylelobo.domain.dto.ImageResDTO;
import pproject.stylelobo.services.FashionImageService;
import pproject.stylelobo.services.UsersService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/fashion")
public class FashionImageController {


    @Autowired
    private FashionImageService fashionImageService;


    @PostMapping("/image")
    public List<ImageResDTO> FashionType(@RequestBody FashionTypeDTO fas)
    {
        FashionTypeDTO fashionDTO = fas;
        String data[] = fashionDTO.getType().split(",");
        List<ImageResDTO> res = new ArrayList<>();

        System.out.println(fas.getType());

        if(data[0] != null && fashionDTO.getText() != null)
        {
            for(int i = 0; i < data.length; i++)
            {
                AiFashionDTO AIdto = new AiFashionDTO(data[i] + " 스타일 : " + fashionDTO.getText(), 1);
                System.out.println("1111111111111111111111111111111111:::::::::::::::::::::::" + AIdto.getPrompt());
                res.add(fashionImageService.FashionType(AIdto));
            }

        }
        else{

        }

        return res;
    }
}
