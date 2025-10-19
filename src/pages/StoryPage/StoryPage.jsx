import { Header } from "../../commponents/Header/Header.jsx";
import { Footer } from "../../commponents/Footer/Footer.jsx";
import { Container } from "../../commponents/Container/Container";
import { TravellersStories } from "../../commponents/TravellersStories/TravellersStories.jsx";
import storiesStyle from "./StoryPage.module.css";
import hero from "../../images/historyHero.webp";
import articles from "../../data/travel-articles.json";

export const StoryPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className={storiesStyle.hero}>
          <Container>
            <h1 className={storiesStyle.storyTitle}>
              Венеція без туристів: маршрути для справжніх мандрівників
            </h1>
            <div className={storiesStyle.autorList}>
              <div className={storiesStyle.heroFormater}>
                <p className={storiesStyle.autorDate}>
                  Автор статті{" "}
                  <span className={storiesStyle.nameDate}>
                    Анастасія Олійник
                  </span>
                </p>
                <p className={storiesStyle.autorDate}>
                  Опубліковано{" "}
                  <span className={storiesStyle.nameDate}>23.07.2025</span>
                </p>
              </div>
              <button className={storiesStyle.heroButton}>Європа</button>
            </div>
            <img src={hero} alt="hero" className={storiesStyle.autorImage} />
            <div className={storiesStyle.autorFix}>
              <p className={storiesStyle.heroDes}>
                Венеція — це не лише площа Святого Марка і гондоли на Канале
                Ґранде. Ми вирішили дослідити місто з іншого боку — вулицями, де
                не ходять натовпи, де старі венеціанці щодня п’ють еспресо на
                розі, а сусідки обговорюють погоду через балкони. Виявляється, є
                цілий район — Кастелло, де майже немає туристів, але є
                мальовничі канали старовинні церкви і рибні ринки. Відкрили для
                себе і острів Джудекка — справжню Венецію без пафосу. У блозі
                ділюсь маршрутами, куди варто заглянути, аби побачити справжнє
                місто.
              </p>
              <div className={storiesStyle.heroDiv}>
                <h3 className={storiesStyle.saveHistory}>
                  Збережіть собі історію
                </h3>
                <p className={storiesStyle.areAvalible}>
                  Вона буде доступна у вашому профілі у розділі збережене
                </p>
                <button className={storiesStyle.saveButton}>Зберегти</button>
              </div>
            </div>
          </Container>
        </section>
        <section className={storiesStyle.popularStory}>
          <Container>
            <h2 className={storiesStyle.subTitle}>Популярні історії</h2>
            <TravellersStories stories={articles} />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};
