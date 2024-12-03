import Container from "../components/Container";
import styles from "./HomePage.module.css";
import SeasonImg from "../assets/season.png";
import RobotImg from "../assets/robot.png";
import LineImg1 from "../assets/line1.png";
import LineImg2 from "../assets/line2.png";
import LineImg3 from "../assets/line3.png";
import LineImg4 from "../assets/line4.png";
import Circle from "../assets/circle.png";
import Circle1 from "../assets/circle1.png";
import Circle2 from "../assets/circle2.png";

function HomePage() {
  return (
    <>
      <div className={styles.bg} />
      <Container className={styles.containerTitle}>
        <div className={styles.circle1}>
          <img src={Circle1} alt="circle1" />
        </div>
        <div className={styles.circle2}>
          <img src={Circle2} alt="circle2" />
        </div>
        <div className={styles.circle3}>
          <img src={Circle} alt="circle" />
        </div>
        <div className={styles.circle4}>
          <img src={Circle} alt="circle" />
        </div>
        <div className={styles.circle5}>
          <img src={Circle} alt="circle" />
        </div>
        <div className={styles.texts}>
          <h1 className={styles.heading}>
            <strong>
              STYLE
              <br />
              &emsp; &emsp;ROBO
            </strong>
          </h1>
          <p className={styles.description}>나의 패션을 찾아주는 ai 스타일러</p>
        </div>
        <div className={styles.line1}>
          <img src={LineImg1} alt="line1" />
        </div>
        <div className={styles.line2}>
          <img src={LineImg2} alt="line2" />
        </div>
        <div className={styles.line3}>
          <img src={LineImg3} alt="line3" />
        </div>
        <div className={styles.line4}>
          <img src={LineImg4} alt="line4" />
        </div>
      </Container>

      <Container className={styles.container}>
        <div className={styles.texts}>
          <h1 className={styles.title}>
            <strong>Personal Color</strong>
          </h1>
          <p className={styles.subTitle}>
            나의 컬러를 찾고 스타일을 추천받아보세요!
          </p>
          <div className={styles.titleDescription}>
            <p>
              AI 이미지 분석을 통해 채도와 명도를 분석하여
              <br /> 사용자의 얼굴 톤을 파악하고,
              <br /> 개인의 퍼스널 컬러에 맞는 스타일을 추천해드립니다.
              <br />
              <br /> 이 서비스는 개인 맞춤형 패션을 제공하여
              <br /> 각자의 독특한 아름다움을 더욱 돋보이게 해주는
              <br /> 스타일링 솔루션입니다.
            </p>
          </div>
        </div>
        <div className={styles.figure1}>
          <img src={SeasonImg} alt="봄여름가을겨울" />
        </div>
      </Container>

      <Container className={styles.container}>
        <div className={styles.figure2}>
          <img src={RobotImg} alt="로봇이미지" />
        </div>
        <div className={styles.texts}>
          <h1 className={styles.title}>
            <strong>Favorite fashion</strong>
          </h1>
          <p className={styles.subTitle}>
            나의 취향을 보여주고 스타일을 추천받아보세요!
          </p>
          <div className={styles.titleDescription}>
            <p>
              AI 이미지 분석 기술을 활용하여 사용자가 업로드한 최애 옷의 <br />
              사진을 분석하고, 그 취향을 반영한 맞춤형 의류 추천을 제공합니다.
              <br />
              <br />
              단순히 옷을 고르는 것을 넘어서, 사용자의 개인적인 스타일을 <br />
              세밀하게 파악하고 완벽하게 맞는 옷을 추천하여, 패션에서도 개성을
              더욱 빛나게 해드립니다.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default HomePage;
