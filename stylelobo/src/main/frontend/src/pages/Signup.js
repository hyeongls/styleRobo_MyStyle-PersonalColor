import Container from "../components/Container";
import styles from "./Signup.module.css";
import Button from "../components/Button.js";
import { useNavigate } from "react-router-dom";
import robot from "../assets/robot3.png";
import axios from "axios";
import React, {useEffect, useState} from 'react';

function Signup() {
  const navigate = useNavigate();
  const navHome = () => {
    navigate("/");
  };

  const [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
  }, []);

  return (
    <>
      <div className={styles.bg} />
      <Container className={styles.container}>
        <div className={styles.texts}>
          <Container className={styles.welcomecontainer}>
            <strong>
              {" "}
              반갑습니다! 당신의 패션 스타일을 찾아주는 스타일 로보입니다.
            </strong>
            <div className={styles.figure}>
              <img src={robot} />
            </div>
            <div className={styles.heading}>STYLEROBO</div>
          </Container>
          <Container className={styles.logincontainer}>
            <div className={styles.heading2}>스타일로보 회원가입</div>
            <div className={styles.formGroup}>
              <label className={styles.text3} htmlFor="id">
                {hello}
              </label>
              <div className={styles.inlineGroup}>
                <input
                  type="text"
                  id="id"
                  placeholder="아이디"
                  className={styles.inputcontainer_id}
                />
                <Button className={styles.button2}>중복 확인</Button>
              </div>
              <label className={styles.text3} htmlFor="pw">
                비밀번호
              </label>
              <input
                type="text"
                id="pw"
                placeholder="비밀번호 입력"
                className={styles.inputcontainer}
              />
              <input
                type="text"
                id="pw"
                placeholder="비밀번호 입력 확인"
                className={styles.inputcontainer}
              />
              <label className={styles.text3} htmlFor="name">
                이름
              </label>
              <input
                type="text"
                id="name"
                placeholder="이름 입력"
                className={styles.inputcontainer}
              />
              <label className={styles.text3} htmlFor="nickname">
                닉네임
              </label>

              <div className={styles.inlineGroup}>
                <input
                  type="text"
                  id="nickname"
                  placeholder="닉네임 입력"
                  className={styles.inputcontainer_id}
                />
                <Button className={styles.button2}>중복 확인</Button>
              </div>
              <label className={styles.text3} htmlFor="gender">
                성별
              </label><div className={styles.text3}>
              <div className={styles.checkboxGroup}>

                <label className={styles.checkboxLabel}>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className={styles.checkbox}
                  />
                  남성
                </label>
                <label className={styles.checkboxLabel}>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className={styles.checkbox}
                  />
                  여성
                </label>
                </div>
              </div>
              <Button className={styles.button1} onClick={navHome}>
                회원가입하기
              </Button>
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
}

export default Signup;
