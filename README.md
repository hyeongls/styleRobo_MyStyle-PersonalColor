# styleRobo_MyStyle-PersonalColor

## 퍼스널 컬러 결과 페이지(post 방식, url: /api/personalColor/analysis)

요청 : (file, 얼굴이미지), (isLoggedIn, boolean), (userName, 로그인아이디 or 닉네임)

응답 : {
    "personalColor": "summer",
    "nickname": "3시5분",
    "recommendations": "# 연한 회색 or 소라색 계열 # 쉬폰 or 레이스 소재 \n #차가운 컬러 #화사한 느낌 \n # 페미닌 & 캐주얼 스타일",
    "gender": "남성"
}


## MyStyle/personColor(get 방식, url: /api/myStyle/color/{유저 아이디 or 닉네임})

요청 : 따로 없음

응답 : [
    {
        "nickname": "3시5분",
        "colorType": "fall",
        "faceImage": "",
        "recommendation": "# 갈색 계열 #가죽소재 \n #짙은 컬러  #진중한 이미지 \n #에스닉 & 보헤미안 스타일",
        "createAt": "2024-11-27T09:07:58"
    },
    {
        "nickname": "3시5분",
        "colorType": "fall",
        "faceImage": "이미지 내용",
        "recommendation": "# 갈색 계열 #가죽소재 \n #짙은 컬러  #진중한 이미지 \n #에스닉 & 보헤미안 스타일",
        "createAt": "2024-11-27T20:32:21"
    },
    
]

## MyStyle/fashion(get 방식, url: /api/myStyle/fashion/{유저 아이디 or 닉네임})

요청 : 따로 없음

응답 : [
    {
        "nickname": "3시5분",
        "selectedStyles": "아메카지 스트릿 캐주얼",
        "diagnosedStyle": "캐주얼한 스타일이 어울리실 것 같아요",
        "createAt": "2024-11-28T03:22:55"
    }
]
