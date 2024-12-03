import { useState } from "react";
import Container from "../components/Container";
import LoadingPage from "../components/Loading";
import Robot from "../assets/robot.png";
import styles from "./FavDiagnosis.module.css";
import Casual from "../assets/Casual.png";
import Street from "../assets/Street.png";
import Vintage from "../assets/Vintage.png";
import Normcore from "../assets/Normcore.png";
import Classic from "../assets/Classic.png";
import Feminine from "../assets/Feminine.png";
import Minimal from "../assets/Minimal.png";
import Maximal from "../assets/Maximal.png";
import Sporty from "../assets/Sporty.png";
import Ethnic from "../assets/Ethnic.png";
import Layered from "../assets/Layered.png";
import Dandy from "../assets/Dandy.png";
import Modern from "../assets/Modern.png";
import Avant from "../assets/Avant.png";
import AMCS from "../assets/AMCS.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function FavoriteDiagnosis() {
  const navigate = useNavigate();
  const navFavDiag = () => {
    navigate("/consulting/favorite/diagnosis");
  };
  const [hoveredTag, setHoveredTag] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  const tags = [
    { label: "캐주얼", image: Casual },
    { label: "스트릿", image: Street },
    { label: "빈티지", image: Vintage },
    { label: "놈코어", image: Normcore },
    { label: "클래식", image: Classic },
    { label: "페미닌", image: Feminine },
    { label: "미니멀", image: Minimal },
    { label: "맥시멀", image: Maximal },
    { label: "스포티", image: Sporty },
    { label: "에스닉", image: Ethnic },
    { label: "레이어드", image: Layered },
    { label: "댄디", image: Dandy },
    { label: "모던", image: Modern },
    { label: "아방가르드", image: Avant },
    { label: "아메카지", image: AMCS },
  ];

  const handleMouseEnter = (tag) => {
    setHoveredTag(tag);
  };

  const handleMouseLeave = () => {
    setHoveredTag(null);
  };

  const handleTagClick = (tag) => {
    if (selectedTags.some((selectedTag) => selectedTag.label === tag.label)) {
      // 이미 선택된 태그를 클릭하면 제거
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag.label !== tag.label)
      );
    } else {
      // 선택되지 않은 태그를 클릭하면 추가
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleRemoveTag = (tag) => {
    setSelectedTags(
      selectedTags.filter((selectedTag) => selectedTag.label !== tag.label)
    );
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // 로딩 시작
    setTimeout(() => {
      setLoading(false); // 로딩 종료
      navigate("/consulting/favorite/result"); // 결과 페이지로 이동
    }, 2000); // 2초 대기
  };

  //  백엔드 작동시 const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     const dataToSend = {
  //       selectedTags: selectedTags.map((tag) => tag.label), // 태그 텍스트만 추출
  //       description: inputText,
  //     };

  //     try {
  //       const response = await fetch("YOUR_BACKEND_ENDPOINT", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(dataToSend),
  //       });

  //       if (response.ok) {
  //         console.log("Data successfully sent to the backend");
  //         navigate("/consulting/favorite/diagnosis");
  //       } else {
  //         console.error("Error sending data to the backend");
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  if (loading) return <LoadingPage robotImage={Robot} />;
  return (
    <>
      <div className={styles.bg} />
      <Container className={styles.container}>
        <div className={styles.heading}>
          <strong> 당신의 취향 스타일을 알려주세요!</strong>
        </div>
        <p className={styles.description}>
          <strong>
            평소에 당신이 즐겨입던 스타일과 당신이 입고 싶은 스타일을 입력하시면
            <br></br> 이에 대해서 ai가 진단해주고 당신의 스타일에 대해서
            알려줄거예요!
          </strong>
          <div className={styles.texts}>
            1. 당신이 평소에 즐겨입는 스타일은 무엇인가요?{" "}
            <span className={styles.description}>(중복 가능)</span>
          </div>
        </p>

        <Container className={styles.tagContainer}>
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`${styles.tag} ${
                selectedTags.some(
                  (selectedTag) => selectedTag.label === tag.label
                )
                  ? styles.selectedTag
                  : ""
              }`}
              onMouseEnter={() => handleMouseEnter(tag)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleTagClick(tag)}
            >
              {tag.label}
              {selectedTags.some(
                (selectedTag) => selectedTag.label === tag.label
              ) && (
                <span
                  className={styles.closeButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveTag(tag);
                  }}
                >
                  {" "}
                  ×{" "}
                </span>
              )}
            </span>
          ))}
        </Container>

        {/* 태그에 마우스가 올라갔을 때 이미지 표시 */}
        <Container
          className={`${styles.hoverImageContainer} ${
            hoveredTag && hoveredTag.image ? styles.show : ""
          }`}
        >
          {hoveredTag && hoveredTag.image && (
            <img
              src={hoveredTag.image}
              alt={hoveredTag.label}
              className={styles.hoverImage}
            />
          )}
        </Container>
        <div className={styles.texts}>
          2. 당신이 입고싶은 스타일에 대해서 설명해주세요!
        </div>
        <Container className={styles.textcontainer}>
          <textarea
            className={styles.textarea}
            placeholder="당신이 좋아하는 스타일이나 평소에 입고싶은 스타일에 대해서 자유롭게 적어주세요!  
작성된 글에 기반해서 당신이 원하는 스타일을 추천해드려요!"
            value={inputText}
            onChange={handleInputChange}
          ></textarea>
        </Container>
        <Container className={styles.buttoncontainer}>
          <Button className={styles.button} onClick={handleSubmit}>
            ▶ 진단 결과 보러가기
          </Button>
        </Container>
      </Container>
    </>
  );
}

export default FavoriteDiagnosis;
