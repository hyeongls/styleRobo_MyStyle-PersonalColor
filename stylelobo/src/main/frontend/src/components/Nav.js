import Container from "./Container";
import styles from "./Nav.module.css";
import ConsultingMenu from "./ConsultingMenu";
import MyStyleMenu from "./MyStyleMenu";
import TodaysPickMenu from "./TodaysPickMenu";
import UserMenu from "./UserMenu";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <ul className={styles.menu}>
          <li>
            <p className={styles.title}>
              <Link to="/">STYLEROBO</Link>
            </p>
          </li>
          <li>
            <a>
              <ConsultingMenu />
            </a>
          </li>
          <li>
            <a>
              <MyStyleMenu />
            </a>
          </li>
          <li>
            <a>
              <TodaysPickMenu />
            </a>
          </li>
          <li>
            <a>
              <UserMenu />
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
