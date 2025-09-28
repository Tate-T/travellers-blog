import { Container } from "../Container/Container";
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
      
        <nav className="header__nav">
          <ul className={styles.header__list}>
          <li className={styles.header__item}><p><a className={styles.header__link} href="../../HomePage/HomePage.jsx">Головна</a></p></li>
          <li className={styles.header__item}><p><a className={styles.header__link} href="../../StoriesPage/StoriesPage.jsx">Авторизація</a></p></li>
          <li className={styles.header__item}><p><a className={styles.header__link} href="../../TravellersPage/TravellersPage.jsx">Мандрівники</a></p></li>
          </ul>
        </nav>
        <div className={styles.header__buttons}>
         <a  className={styles.button__link}href="../../AuthPage/AuthPage.jsx">Вхід</a>
          <a className={styles.button__link}href="../../AuthPage/AuthPage.jsx">Реєстрація</a>
        </div>
        </Container>
        
    </header>
  );
};
