import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MyStyleMenu.module.css";

function MyStyleMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsOpen(false);
  }, []);

  const navtoFav = () => {
    navigate("/mystyle");
  };

  return (
    <div
      className={styles.MyStyleMenu}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a className={styles.icon}>My Style</a>
      {isOpen && (
        <ul
          className={styles.popup}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <li className={styles.item} onClick={navtoFav}>나의 스타일 보고서</li>

        </ul>
      )}
    </div>
  );
}

export default MyStyleMenu;
