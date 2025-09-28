import { Container } from "../Container/Container";

export const Header = () => {
  return (
    <>
      <Container>
        <nav className="header__nav">
          <ul className="header__list">
          <li className="header__item"><p><a className="nav__links" href="../../HomePage/HomePage.jsx">Головна</a></p></li>
          <li className="header__item"><p><a className="nav__links" href="../../StoriesPage/StoriesPage.jsx">Авторизація</a></p></li>
          <li className="header__item"><p><a className="nav__links" href="../../TravellersPage/TravellersPage.jsx">Мандрівники</a></p></li></ul>
        </nav>
        <div className="header__buttons">
           <button className="header__button"><a className="header__button-link" href="../../AuthPage/AuthPage.jsx">Вхід</a></button>
           <button className="header__button"><a className="header__button-link" href="../../AuthPage/AuthPage.jsx">Реєстрація</a></button>
        </div>
        </Container>
    </>
  );
};
