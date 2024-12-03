import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Favorite from "../pages/Favorite";
import PersonalColorMain from "../pages/PersonalColorMain";
import FavDiagnosis from "../pages/FavDiagnosis";
import PersonalColorCheck from "../pages/PersonalColorCheck";
import PersonalImageUpload from "../pages/PersonalImageUpload";
import PersonalColorConsulting from "../pages/PersonalColorConsulting";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MyStyle from "../pages/MyStyle";


import Nav from "./Nav";
import Footer from "./Footer";
import styles from "./App.module.css";
import "./App.font.css";

function App() {
  return (
    <Router>
      <Nav className={styles.nav} />
      <div className={styles.body}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<Login/>}/>
          <Route path="/auth/signup" element={<Signup/>}/>
          <Route path="consulting/favorite" element={<Favorite />} />
          <Route
            path="/consulting/personal-color-main"
            element={<PersonalColorMain />}
          />
          <Route
            path="consulting/favorite/diagnosis"
            element={<FavDiagnosis />}
          />
          <Route
            path="/personal-color-check"
            element={<PersonalColorCheck />}
          />
          <Route
            path="/personal-image-upload"
            element={<PersonalImageUpload />}
          />

          <Route
            path="/personal-color-consulting"
            element={<PersonalColorConsulting />}
          />
          <Route
            path="/mystyle"
            element={<MyStyle />}
          />
        </Routes>
      </div>
      <Footer className={styles.footer} />
    </Router>
  );
}

export default App;
