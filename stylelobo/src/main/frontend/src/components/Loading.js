// src/components/LoadingPage.js

import React from "react";
import styles from "./Loading.module.css";
import Container from "./Container";
import { BeatLoader } from "react-spinners";

function LoadingPage({ robotImage }) {
  return (
    <Container className={styles.container}>
      <div className={styles.figure}>
        <img src={robotImage} alt="robot" />
      </div>
      <div className={styles.textcontainer}>
        <p>취향 스타일 진단 중... </p>

        <BeatLoader color="#FF5152" size={50} className={styles.loader} />
      </div>
    </Container>
  );
}

export default LoadingPage;
