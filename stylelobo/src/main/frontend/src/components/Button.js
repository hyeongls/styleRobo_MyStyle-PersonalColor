import { useState } from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

function Button({ className, children, onClick, label }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 100); // 클릭 상태를 100ms 동안 유지
  };

  return (
    <div className={styles.wrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <div
        className={classNames(styles.Button, className, {
          [styles.clicked]: isClicked, // 클릭 시 추가 클래스 적용
        })}
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
}

export default Button;
