import { Header } from "../../commponents/Header/Header.jsx";
import { Footer } from "../../commponents/Footer/Footer.jsx";
import { Container } from "../../commponents/Container/Container";
import Avatar from "../../images/profile-page-avatar.png";
import style from "./ProfilePage.module.css";

export const ProfilePage = () => {
  return (
    <>
      <Header />
      <main>
        <section className={style.profile}>
          <Container>
            <div className={style["profile-info__box"]}>
              <img src={Avatar} alt="avatar" />
              <div className={style.info__text}>
                <h2 className={style["profile-info__title"]}>Анастасія Олійник</h2>
                <p className={style["profile-info__desc"]}>
                  Люблю активні подорожі та дослідження нових місць. Ділюся практичними порадами та маршрутами для мандрівників.
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <h1 className={style.stories__title}>Історії Мандрівника</h1>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};
