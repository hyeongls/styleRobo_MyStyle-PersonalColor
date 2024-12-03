import { useCallback, useState } from "react";
import userIcon from "../assets/user.png";
import styles from "./UserMenu.module.css";
import { useNavigate } from "react-router-dom";

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsOpen(false);
  }, []);

  const navtoLogin = () => {
    navigate("/auth/login");
  };
  const navSignup=()=>{
    navigate("/auth/signup");

  }

  return (
    <div
      className={styles.userMenu}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={userIcon} alt="유저 메뉴" className={styles.icon} />
      {isOpen && (
        <ul
          className={styles.popup}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <li className={styles.item} onClick={navSignup}>회원가입</li>
          <li className={styles.item} onClick={navtoLogin}>로그인</li>
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
