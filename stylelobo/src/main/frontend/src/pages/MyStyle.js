import React, { useState } from "react";
import Container from "../components/Container";
import styles from "./MyStyle.module.css";
import Mystyle from "../assets/mystyle.png";

function PersonalColorCheck() {
  return (
    <>
      <Container className={styles.container}>
        <div className={styles.textimagecontainer}>
        <div className={styles.texts}>
          <div className={styles.heading}>
          <p className={styles.date}>2024.10.21.</p>
            <strong>퍼스널컬러 진단 결과</strong>
            <p>AI 이미지 분석을 통해 채도와 명도를 분석하여 
                사용자의 얼굴 톤을 파악하고, <br/>
                개인의 퍼스널 컬러에 맞는 스타일을 추천해드립니다. </p>
                <div className={styles.button}>
                    <button className={styles.detailButton} >
                        자세히 보기
                    </button>
                </div>
          </div>
        </div>
        <div className={styles.image}>
            <img src={Mystyle} alt="Mystyle" />
        </div>
        </div>
      </Container>


      <Container className={styles.container}>
      <div className={styles.textimagecontainer}>

        <div className={styles.texts}>
          <div className={styles.heading}>
          <p className={styles.date}>2024.10.20.</p>
            <strong>취향 스타일 진단 결과</strong>
            <p>AI 이미지 분석 기술을 활용하여 사용자가 
                업로드한 최애 옷의 사진을 분석하고, <br/> 그 취향을 
                반영한 맞춤형 의류 추천을 제공합니다.  </p>
                <div className={styles.button}>
                    <button className={styles.detailButton} >
                        자세히 보기
                    </button>
                </div>
          </div>
        </div>
        <div className={styles.image}>
            <img src={Mystyle} alt="Mystyle" />
        </div>
        </div>
      </Container>
    </>
  );
}

export default PersonalColorCheck;
