import React, { useState } from "react";
import Container from "../components/Container";
import styles from "./PersonalImageUpload.module.css";
import CameraImg from "../assets/camera.svg";
import { useNavigate } from "react-router-dom";

function PersonalImageUpload() {
  const navigate = useNavigate();
  const perImgUp = () => {
    navigate("/personal-color-consulting");
  };
  return (
    <>
      <Container className={styles.container}>
        <div className={styles.figure}>
          <img src={CameraImg} alt="카메라" />
        </div>
      </Container>
      <div className={styles.button}>
        <button className={styles.uploadButton} onClick={perImgUp}>
          ▶ 사진 업로드하기
        </button>
      </div>
    </>
  );
}

export default PersonalImageUpload;
