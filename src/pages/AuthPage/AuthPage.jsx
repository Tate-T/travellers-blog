import {Header} from "../../commponents/Header/Header.jsx"
import {Footer} from "../../commponents/Footer/Footer.jsx"
import {LoginForm} from "./LoginForm.jsx"
import {RegistrationForm} from "./RegistrationForm.jsx"
import { Container } from "../../commponents/Container/Container.jsx";
import style from "./AuthPage.module.css"
import logo from "../../images/logo.svg"

export const AuthPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Container>
      <main className={style.auth}>
        <div className={style.logo}>
         <img src={logo} alt="" />
         <p>Подорожники</p>
         </div>
        <ul className={style.list}>
          <li className={`${style.li} ${style.active}`}><button className={style.button}>Реєстрація</button></li>
          <li className={style.li}><button className={style.button}>Вхід</button></li>
        </ul>
        {/* <LoginForm/> */}
        <RegistrationForm/>
      </main>
      </Container>
      {/* <Footer /> */}
    </>
  );
};
