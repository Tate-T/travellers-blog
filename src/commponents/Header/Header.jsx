import { Container } from "../Container/Container";
import styles from "./Header.module.css";
import logo from "../../images/logo.svg";
import burger from "../../images/burger.svg";
export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__main}>
          <img src={logo} alt="" />
          <p className={styles.header__text}>Подорожники</p>
        </div>
        <nav className="header__nav">
          <ul className={styles.header__list}>
            <li className="header__item">
              <p>
                <a
                  className={styles.header__link}
                  href="../../HomePage/HomePage.jsx"
                >
                  Головна
                </a>
              </p>
            </li>
            <li className="header__item">
              <p>
                <a
                  className={styles.header__link}
                  href="../../StoriesPage/StoriesPage.jsx"
                >
                  Історії
                </a>
              </p>
            </li>
            <li className="header__item">
              <p>
                <a
                  className={styles.header__link}
                  href="../../TravellersPage/TravellersPage.jsx"
                >
                  Мандрівники
                </a>
              </p>
            </li>
          </ul>
        </nav>
        <div className={styles.header__buttons}>
          <a className={styles.button__link} href="../../AuthPage/AuthPage.jsx">
            Вхід
          </a>
          <a className={styles.button__link} href="../../AuthPage/AuthPage.jsx">
            Реєстрація
          </a>
        </div>
        <div className={styles.mobile}>
          <a
            className={styles.mobile__link}
            href="../../AddStoryPage/AddStoryPage.jsx"
          >
            Опублікувати історію
          </a>
          <a href="">
            {" "}
            <img src={burger} alt="" />{" "}
          </a>
        </div>

        <div className={styles.container__div}>
          <img src={logo} className={styles.mobile__logo} />
          <p className={styles.header__text}>Подорожники</p>
          <nav className="header__nav">
            <ul className={styles.container__list}>
              <li className="header__item">
                <p>
                  <a
                    className={styles.container__link}
                    href="../../HomePage/HomePage.jsx"
                  >
                    Головна
                  </a>
                </p>
              </li>
              <li className="header__item">
                <p>
                  <a
                    className={styles.container__link}
                    href="../../StoriesPage/StoriesPage.jsx"
                  >
                    Історії
                  </a>
                </p>
              </li>
              <li className="header__item">
                <p>
                  <a
                    className={styles.container__link}
                    href="../../TravellersPage/TravellersPage.jsx"
                  >
                    Мандрівники
                  </a>
                </p>
              </li>
            </ul>
          </nav>
          <div className={styles.container__buttons}>
            <a
              className={styles.container__btn}
              href="../../AuthPage/AuthPage.jsx"
            >
              Вхід
            </a>
            <a
              className={styles.container__btn}
              href="../../AuthPage/AuthPage.jsx"
            >
              Реєстрація
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

