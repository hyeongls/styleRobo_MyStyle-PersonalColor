import Container from "../components/Container.js";
import styles from "./PersonalColorMain.module.css";
import SeasonImg from "../assets/season1.png";
import Button from "../components/Button.js";
import { useNavigate } from "react-router-dom";

function PersonalColorMain() {
  const navigate = useNavigate();
  const navPerCol = () => {
    navigate("/personal-color-check");
  };
  return (
    <>
      <div className={styles.bg} />
      <Container className={styles.container}>
      <div className={styles.textimagecontainer}>
        <div className={styles.texts}>
          <div className={styles.heading}>
            <strong>Personal Color</strong>
          </div>
          <p className={styles.description}>
            <strong>나의 컬러를 찾고 스타일을 추천받아보세요!</strong>
            <br />
          </p>
          <Button className={styles.button} onClick={navPerCol}>
          ▶ 진단하러 가기
        </Button>
        </div>

        <div className={styles.figure}>
          <div className={styles.imageContainer}>
            <img
              src={SeasonImg}
              alt="봄여름가을겨울"
              className={styles.image}
            />
          </div>
        </div>

</div>
      </Container>
    </>
  );
}

export default PersonalColorMain;
