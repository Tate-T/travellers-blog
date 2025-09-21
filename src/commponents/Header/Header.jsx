import { Container } from "../Container/Container";

export const Header = () => {
  return (
    <>
      <Container>
        <nav>
          <li><p><a href="../../HomePage/HomePage.jsx">Головна</a></p></li>
          <li><p><a href="../../StoriesPage/StoriesPage.jsx">Авторизація</a></p></li>
          <li><p><a href="../../TravellersPage/TravellersPage.jsx">Мандрівники</a></p></li>
        </nav>
        <div className="">
          <button><a href="../../AuthPage/AuthPage.jsx">Вхід</a></button>
           <button><a href="../../AuthPage/AuthPage.jsx">Реєстрація</a></button>
        </div>
        </Container>
    </>
  );
};
