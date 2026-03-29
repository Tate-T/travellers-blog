import { Container } from "../../commponents/Container/Container.jsx";
import styles from "./Header.module.css";
import logo from "../../images/logo.svg";
import burger from "../../images/burger.svg";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        !e.target.closest(`.${styles.container__div}`) &&
        !e.target.closest(`.${styles.burger__btn}`)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__main}>
          <Link className={styles.logo__block} to="/">
            <img src={logo} alt="Логотип" />
            <p className={styles.header__text}>Подорожники</p>
          </Link>

          {location.pathname !== "/auth" && (
            <nav className={styles.header__nav}>
            
              <ul className={styles.header__list}>
                <li>
                  <Link className={styles.header__link} to="/">
                    Головна
                  </Link>
                </li>
                <li>
                  <Link className={styles.header__link} to="/stories">
                    Історії
                  </Link>
                </li>
                <li>
                  <Link className={styles.header__link} to="/travellers">
                    Мандрівники
                  </Link>
                </li>
              </ul>

              {/* КНОПКИ (десктоп) */}
              <div className={styles.header__buttons}>
                <Link className={styles.button__link} to="/auth">
                  Вхід
                </Link>
                <Link className={styles.button__link} to="/auth">
                  Реєстрація
                </Link>
              </div>

             
              <Link
                className={styles.header__published}
                to="/addstory"
              >
                Опублікувати
              </Link>

              {/* Бургер */}
              <button
                className={styles.burger__btn}
                onClick={() => setIsOpen(!isOpen)}
              >
                <img src={burger} alt="Меню" />
              </button>
            </nav>
          )}
        </div>
      </Container>

      {/* МОБІЛЬНЕ МЕНЮ */}
      <div
        className={`${styles.container__div} ${
          isOpen ? styles.active : ""
        }`}
      >
        <nav className={styles.mobile__nav}>
          <ul className={styles.container__list}>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Головна
              </Link>
            </li>
            <li>
              <Link to="/stories" onClick={() => setIsOpen(false)}>
                Історії
              </Link>
            </li>
            <li>
              <Link to="/travellers" onClick={() => setIsOpen(false)}>
                Мандрівники
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.container__buttons}>
          <Link to="/auth" onClick={() => setIsOpen(false)}>
            Вхід
          </Link>
          <Link to="/auth" onClick={() => setIsOpen(false)}>
            Реєстрація
          </Link>
        </div>
      </div>
    </header>
  );
};