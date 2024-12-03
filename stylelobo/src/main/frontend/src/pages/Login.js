import Container from "../components/Container";
import styles from "./Login.module.css";
import Button from "../components/Button.js";
import { useNavigate } from "react-router-dom";
import robot from "../assets/robot3.png";

function Login() {
  const navigate = useNavigate();
  const navHome = () => {
    navigate("/");
  };
  const navSignup = () => {
    navigate("/auth/signup");
  };
  
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
            <div className={styles.heading2}>스타일로보 로그인</div>

            <input
              type="text"
              id="id"
              placeholder="아이디"
              className={styles.inputcontainer}
            />
            <input
              type="text"
              id="password"
              placeholder="비밀번호"
              className={styles.inputcontainer}
            />
            <Button className={styles.button1} onClick={navHome}>
              로그인하기
            </Button>
            <Button className={styles.button2} onClick={navSignup}>
              회원가입하기
            </Button>
            <div className={styles.text2}>
              아이디 혹은 비밀번호를 잊으셨나요?
              <div className={styles.text3}>아이디/비밀번호 찾기</div>
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
}

export default Login;
