import React, { useState } from "react";
import Container from "../components/Container";
import styles from "./PersonalColorConsulting.module.css";
import PersonImg from "../assets/person.png";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../components/Loading";
import Robot from "../assets/robot2.png";

function PersonalColorConsulting() {
  const navigate = useNavigate();
  const perImgUp = () => {
    navigate("/personal-image-upload");
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // 로딩 시작
    setTimeout(() => {
      setLoading(false); // 로딩 종료
      navigate("personal-color-result"); // 결과 페이지로 이동
    }, 2000); // 2초 대기
  };
  if (loading) return <LoadingPage robotImage={Robot} />;
  return (
    <>
      <Container className={styles.container}>
        <div className={styles.figure}>
          <img src={PersonImg} alt="사람" />
        </div>
      </Container>
      <div className={styles.button}>
        <button className={styles.uploadButton} onClick={perImgUp}>
          ▶ 사진 재 업로드
        </button>
      </div>
      <div className={styles.button}>
        <button className={styles.aiconsultingButton} onClick={handleSubmit}>
          ▶ ai 진단 시작
        </button>
      </div>
    </>
  );
}

export default PersonalColorConsulting;
