import { Container } from "../../commponents/Container/Container.jsx";
import styles from "./Header.module.css";
import logo from "../../images/logo.svg";
import burger from "../../images/burger.svg";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className={styles.header}>

      <Container>
        <div className={styles.header__main}>
          <Link className={styles.logo__block} to="/">
            <img src={logo} alt="Логотип" />
            <p className={styles.header__text}>Подорожники</p>
          </Link>

          <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
              <li className={styles.header__item}>
                <Link
                  className={styles.header__link}
                  to="/"
                >
                  Головна
                </Link>
              </li>
              <li className={styles.header__item}>
                <Link
                  className={styles.header__link}
                  to="/stories"
                >
                  Історії
                </Link>
              </li>
              <li className={styles.header__item}>
                <Link
                  className={styles.header__link}
                  to="/travellers"
                >
                  Мандрівники
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.header__buttons}>
            <Link
              className={styles.button__link}
              to="/auth"
            >
              Вхід
            </Link>
            <Link
              className={styles.button__link}
              to="/auth"
            >
              Реєстрація
            </Link>
          </div>

          <div className={styles.header__box}>
            <Link
              className={styles.header__published}
              to="addstory"
            >
              Опублікувати історію
            </Link>
            <button className={styles.burger__btn}>
              <img src={burger} alt="Меню" />
            </button>
          </div>
        </div>
      </Container>

      {/* Мобільне меню */}
      <div className={styles.container__div}>
        <div className={styles.mobile__header}>
          <img src={logo} className={styles.mobile__logo} alt="Логотип" />
          <p className={styles.header__text}>Подорожники</p>
        </div>

        <nav className={styles.mobile__nav}>
          <ul className={styles.container__list}>
            <li className={styles.header__item}>
              <a
                className={styles.container__link}
                href="../../HomePage/HomePage.jsx"
              >
                Головна
              </a>
            </li>
            <li className={styles.header__item}>
              <a
                className={styles.container__link}
                href="../../StoriesPage/StoriesPage.jsx"
              >
                Історії
              </a>
            </li>
            <li className={styles.header__item}>
              <a
                className={styles.container__link}
                href="../../TravellersPage/TravellersPage.jsx"
              >
                Мандрівники
              </a>
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
    </header>
  );
};
