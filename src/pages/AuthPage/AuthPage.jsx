import {Header} from "../../commponents/Header/Header.jsx"
import {Footer} from "../../commponents/Footer/Footer.jsx"
import {LoginForm} from "./LoginForm.jsx"
import {RegistrationForm} from "./RegistrationForm.jsx"
import { Container } from "../../commponents/Container/Container.jsx";
import style from "./AuthPage.module.css"
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg"

export const AuthPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Container>
      <main className={style.auth}>
        <Link className={style.logo} to="/">
         <img src={logo} alt="" />
         <p>Подорожники</p>
         </Link>
        <ul className={style.list}>
          <li className={`${style.li} ${style.active}`}><button className={style.button}>Реєстрація</button></li>
          <li className={style.li}><button className={style.button}>Вхід</button></li>
        </ul>
        {/* <LoginForm/> */}
        <RegistrationForm/>
        <p className={style.copy}>© 2025 Подорожники</p>
      </main>
      </Container>
      {/* <Footer /> */}
    </>
  );
};
