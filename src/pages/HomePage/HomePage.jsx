import { createContext, useMemo, useState } from "react";
import { Header } from "../../commponents/Header/Header.jsx";
import { Footer } from "../../commponents/Footer/Footer.jsx";
import { Container } from "../../commponents/Container/Container";
import { TravellersStories } from "../../commponents/TravellersStories/TravellersStories";
import travelArticles from "../../data/travel-articles.json";
import style from "./HomePage.module.css";
import { HomepageContext } from "../../context/HomepageContext.jsx"
export const HomePage = () => {
  // const [visibleCount, setVisibleCount] = useState(6); // показуємо спочатку 6 історій
  // const stories = travelArticles;
  // const handleShowMore = () => {
  //   setVisibleCount((prevCount) => prevCount + 6); // додаємо ще 6 при натисканні
  // };
  // const handleShowMore = useMemo(() => {
  //    setVisibleCount((prevCount) => prevCount + 6);
  // }, [visibleCount]) 
  // const contextValue = {
  //   stories,
  //   visibleCount,
  //   handleShowMore,
  // }

  return (
    <>
      <Header />
      <main>
        <section className={style.hero}>
          <Container>
            <div className={style.heroBox}>
              <h1 className={style.heroTitle}>
                Відкрийте світ подорожей з нами!
              </h1>
            </div>
            <p className={style.heroDescription}>
              Приєднуйтесь до нашої спільноти мандрівників, де ви зможете
              ділитися своїми історіями та отримувати натхнення для нових
              пригод. Відкрийте для себе нові місця та знайдіть однодумців!
            </p>
            <button type="button" className={style.heroButton}>
              Доєднатись
            </button>
          </Container>
        </section>
        <section className={style.info}>
          <Container>
            <div className={style.infoFirstBlock}>
              <h2 className={style.infoTitle}>
                Проєкт, створений для тих, хто живе подорожами
              </h2>
              <h3 className={style.infoDescription}>
                Ми віримо, що кожна подорож — це унікальна історія, варта того,
                щоб нею поділилися. Наша платформа створена, щоб об'єднати
                людей, закоханих у відкриття нового. Тут ви можете ділитися
                власним досвідом, знаходити друзів та надихатися на наступні
                пригоди разом з нами.
              </h3>
            </div>

            <ul className={style.infoList}></ul>
          </Container>
        </section>
        {/* <HomepageContext.Provider value={contextValue}> */}
        <section className={style.history}>
          <Container>
            <h2 className={style.historyTitle}>Популярні історії</h2>

            {/* <TravellersStories stories={stories.slice(0, visibleCount)} /> */}

            {/* {visibleCount < stories.length && */}
             (
              <button
                type="button"
                className={style.historyButton}
                // onClick={handleShowMore}
              >
                Показати ще
              </button>
            )
            {/* } */}
          </Container>
        </section>
        {/* </HomepageContext.Provider> */}
        <section className={style.travelers}>
          <Container>
            <h2 className={style.travelersTitle}>Наші мандрівники</h2>
            <main>
              <ul className={style.travellersList}>
                <li className={style.travellersItem}>
                  <img
                    src=""
                    alt="Анастасія Олійник"
                    className={style.travellersPhoto}
                  />
                  <h3 className={style.travellersName}>Анастасія Олійник</h3>
                  <p className={style.travellersDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros
                  </p>
                  <button className={style.travellersButton}>
                    Переглянути профіль
                  </button>
                </li>
                <li className={style.travellersItem}>
                  <img
                    src=""
                    alt="Назар Ткаченко"
                    className={style.travellersPhoto}
                  />
                  <h3 className={style.travellersName}>Назар Ткаченко</h3>
                  <p className={style.travellersDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros
                  </p>
                  <button className={style.travellersButton}>
                    Переглянути профіль
                  </button>
                </li>
                <li className={style.travellersItem}>
                  <img
                    src=""
                    alt="Єва Бондаренко"
                    className={style.travellersPhoto}
                  />
                  <h3 className={style.travellersName}>Єва Бондаренко</h3>
                  <p className={style.travellersDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros
                  </p>
                  <button className={style.travellersButton}>
                    Переглянути профіль
                  </button>
                </li>
                <li className={style.travellersItem}>
                  <img
                    src=""
                    alt="Дмитро Романенко"
                    className={style.travellersPhoto}
                  />
                  <h3 className={style.travellersName}>Дмитро Романенко</h3>
                  <p className={style.travellersDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros
                  </p>
                  <button className={style.travellersButton}>
                    Переглянути профіль
                  </button>
                </li>
                <li className={style.travellersItem}>
                  <img
                    src=""
                    alt="Олександра Бондаренко"
                    className={style.travellersPhoto}
                  />
                  <h3 className={style.travellersName}>
                    Олександра Бондаренко
                  </h3>
                  <p className={style.travellersDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros
                  </p>
                  <button className={style.travellersButton}>
                    Переглянути профіль
                  </button>
                </li>
                <li className={style.travellersItem}>
                  <img
                    src=""
                    alt="Олександр Шевчук"
                    className={style.travellersPhoto}
                  />
                  <h3 className={style.travellersName}>Олександр Шевчук</h3>
                  <p className={style.travellersDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros
                  </p>
                  <button className={style.travellersButton}>
                    Переглянути профіль
                  </button>
                </li>
                <li className={style.travellersItem}>
                  <img
                    src=""
                    alt="Софія Мельник"
                    className={style.travellersPhoto}
                  />
                  <h3 className={style.travellersName}>Софія Мельник</h3>
                  <p className={style.travellersDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros
                  </p>
                  <button className={style.travellersButton}>
                    Переглянути профіль
                  </button>
                </li>
                <li className={style.travellersItem}>
                  <img
                    src=""
                    alt="Дарина Ковальчук"
                    className={style.travellersPhoto}
                  />
                  <h3 className={style.travellersName}>Дарина Ковальчук</h3>
                  <p className={style.travellersDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros
                  </p>
                  <button className={style.travellersButton}>
                    Переглянути профіль
                  </button>
                </li>
                <li className={style.travellersItem}>
                  <img
                    src=""
                    alt="Владислав Поліщук"
                    className={style.travellersPhoto}
                  />
                  <h3 className={style.travellersName}>Владислав Поліщук</h3>
                  <p className={style.travellersDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros
                  </p>
                  <button className={style.travellersButton}>
                    Переглянути профіль
                  </button>
                </li>
                <li className={style.travellersItem}>
                  <img
                    src=""
                    alt="Владислав Поліщук"
                    className={style.travellersPhoto}
                  />
                  <h3 className={style.travellersName}>Владислав Поліщук</h3>
                  <p className={style.travellersDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros
                  </p>
                  <button className={style.travellersButton}>
                    Переглянути профіль
                  </button>
                </li>
                <li className={style.travellersItem}>
                  <img
                    src=""
                    alt="Владислав Поліщук"
                    className={style.travellersPhoto}
                  />
                  <h3 className={style.travellersName}>Владислав Поліщук</h3>
                  <p className={style.travellersDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros
                  </p>
                  <button className={style.travellersButton}>
                    Переглянути профіль
                  </button>
                </li>
                <li className={style.travellersItem}>
                  <img
                    src=""
                    alt="Іван Ковальчук"
                    className={style.travellersPhoto}
                  />
                  <h3 className={style.travellersName}>Іван Ковальчук</h3>
                  <p className={style.travellersDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros
                  </p>
                  <button className={style.travellersButton}>
                    Переглянути профіль
                  </button>
                </li>
              </ul>
            </main>
            <button type="button" className={style.travelersButton}>
              Переглянути всіх
            </button>
          </Container>
        </section>
        <section className={style.signup}>
          <Container>
            <h2 className={style.signupTitle}>
              Приєднуйтесь до нашої спільноти
            </h2>
            <p className={style.signupDescription}>
              Долучайтеся до мандрівників, які діляться своїми історіями та
              надихають на нові пригоди.
            </p>
            <button type="button" className={style.signupButton}>
              Зареєструватися
            </button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};
