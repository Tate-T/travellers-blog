import { Header } from "../../commponents/Header/Header.jsx";
import { Footer } from "../../commponents/Footer/Footer.jsx";
import { Container } from "../../commponents/Container/Container";
import style from "./StoryPage.module.css";
import hero from "../../images/historyHero.webp";
import siayvo from "../../images/siayvo.webp";
import kurkiztan from "../../images/kurkiztan.webp";
import popularPolar from "../../images/popularPolar.webp";
import avatar from "../../images/historyAvatar.webp";

export const StoryPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className={style.hero}>
          <Container>
            <h1 className={style.storyTitle}>
              Венеція без туристів: маршрути для справжніх мандрівників
            </h1>
            <div className={style.autorList}>
              <div className={style.heroFormater}>
                <p className={style.autorDate}>
                  Автор статті{" "}
                  <span className={style.nameDate}>Анастасія Олійник</span>
                </p>
                <p className={style.autorDate}>
                  Опубліковано{" "}
                  <span className={style.nameDate}>23.07.2025</span>
                </p>
              </div>
              <button className={style.heroButton}>Європа</button>
            </div>
            <img src={hero} alt="hero" className={style.autorImage} />
            <div className={style.autorFix}>
              <p className={style.heroDes}>
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
              <div className={style.heroDiv}>
                <h3 className={style.saveHistory}>Збережіть собі історію</h3>
                <p className={style.areAvalible}>
                  Вона буде доступна у вашому профілі у розділі збережене
                </p>
                <button className={style.saveButton}>Зберегти</button>
              </div>
            </div>
          </Container>
        </section>
        <section className={style.popularStory}>
          <Container>
            <h2 className={style.subTitle}>Популярні історії</h2>
            <ul className={style.popularList}>
              <li className={style.popularItem}>
                <img
                  src={siayvo}
                  alt="popular story"
                  className={style.popularImage}
                />
                <div className={style.subFix}>
                <p className={style.popularRegion}>Європа</p>
                <h4 className={style.popularTitle}>
                  Північне сяйво в Норвегії: погоня за світлом
                </h4>
                <p className={style.popularText}>
                  Побачити північне сяйво було моєю давньою мрією. І ось ми в
                  Норвегії, за Полярним колом, на Лофотенських островах. Холод,
                  віт
                </p>
<div className={style.popularFix}>
<img
                  src={avatar}
                  alt="avatar"
                  className={style.popularAvatar}
                />
                <div>
                <p className={style.popularName}>Назар Ткаченко</p>
                <p className={style.popularDate}>30.03.2025</p>
</div>
</div>
<div className={style.popularLine}>
                <button className={style.popularButton}>
                  Переглянути стaттю
                </button>
                <button className={style.popularIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12.0001 18.2727L7.23159 20.3127C6.66392 20.5574 6.12517 20.5115 5.61534 20.175C5.1055 19.8385 4.85059 19.3623 4.85059 18.7465V4.53396C4.85059 4.07229 5.0195 3.67204 5.35734 3.33321C5.695 2.99421 6.09384 2.82471 6.55384 2.82471H17.4463C17.908 2.82471 18.3083 2.99421 18.6471 3.33321C18.9861 3.67204 19.1556 4.07229 19.1556 4.53396V18.7465C19.1556 19.3623 18.8997 19.8385 18.3878 20.175C17.876 20.5115 17.3363 20.5574 16.7686 20.3127L12.0001 18.2727ZM12.0001 16.4505L17.4463 18.7465V4.53396H6.55384V18.7465L12.0001 16.4505ZM12.0001 4.53396H6.55384H17.4463H12.0001Z"
                      fill="black"
                    />
                  </svg>
                </button>
                </div>
                </div>
              </li>
              <li className={style.popularItem}>
                <img src={kurkiztan} alt="popular story" />
               <div className={style.subFix}>
                <p className={style.popularRegion}>Азія</p>
                <h4 className={style.popularTitle}>
                  Казахстан: між степом і мегаполісом
                </h4>
                <p className={style.popularText}>
                  Несподівана подорож у Казахстан відкрила перед нами країну
                  контрастів: від сучасного Нур-Султану до безкраїх степів
                  навколо Алмати.
                </p>
                <div className={style.popularFix}>
                <img
                  src={avatar}
                  alt="avatar"
                  className={style.popularAvatar}
                />
                <div>
        <p className={style.popularName}>Єва Бондаренко</p>
                <p className={style.popularDate}>02.04.2025</p>
</div>
</div>
<div className={style.popularLine}>
                <button className={style.popularButton}>
                  Переглянути стaттю
                </button>
                <button className={style.popularIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12.0001 18.2727L7.23159 20.3127C6.66392 20.5574 6.12517 20.5115 5.61534 20.175C5.1055 19.8385 4.85059 19.3623 4.85059 18.7465V4.53396C4.85059 4.07229 5.0195 3.67204 5.35734 3.33321C5.695 2.99421 6.09384 2.82471 6.55384 2.82471H17.4463C17.908 2.82471 18.3083 2.99421 18.6471 3.33321C18.9861 3.67204 19.1556 4.07229 19.1556 4.53396V18.7465C19.1556 19.3623 18.8997 19.8385 18.3878 20.175C17.876 20.5115 17.3363 20.5574 16.7686 20.3127L12.0001 18.2727ZM12.0001 16.4505L17.4463 18.7465V4.53396H6.55384V18.7465L12.0001 16.4505ZM12.0001 4.53396H6.55384H17.4463H12.0001Z"
                      fill="black"
                    />
                  </svg>
                </button>
                </div>
                </div>
              </li>
              <li className={style.popularItem} className={style.popularBrock}>
                <img
                  src={popularPolar}
                  className={style.popularImage}
                  alt="popular story"
                />
                <div className={style.subFix}>
                <p className={style.popularRegion}>Пустелі</p>
                <h4 className={style.popularTitle}>
                  Арктика на яхті: чотири тижні серед айсбергів
                </h4>
                <p className={style.popularText}>
                  Північний Льодовитий океан. Ми провели чотири тижні на яхті,
                  яка прокладала шлях крізь крижане море. Мандрівка почалася зі
                  Шпіцбергена.
                </p>
                                <div className={style.popularFix}>
                <img
                  src={avatar}
                  alt="avatar"
                  className={style.popularAvatar}
                />
                <div>
                    <p className={style.popularName}>Єва Бондаренко</p>
                <p className={style.popularDate}>15.04.2025</p>
       </div>
</div>
<div className={style.popularLine}>
                              <button className={style.popularButton}>
                  Переглянути стaттю
                </button>
                <button className={style.popularIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12.0001 18.2727L7.23159 20.3127C6.66392 20.5574 6.12517 20.5115 5.61534 20.175C5.1055 19.8385 4.85059 19.3623 4.85059 18.7465V4.53396C4.85059 4.07229 5.0195 3.67204 5.35734 3.33321C5.695 2.99421 6.09384 2.82471 6.55384 2.82471H17.4463C17.908 2.82471 18.3083 2.99421 18.6471 3.33321C18.9861 3.67204 19.1556 4.07229 19.1556 4.53396V18.7465C19.1556 19.3623 18.8997 19.8385 18.3878 20.175C17.876 20.5115 17.3363 20.5574 16.7686 20.3127L12.0001 18.2727ZM12.0001 16.4505L17.4463 18.7465V4.53396H6.55384V18.7465L12.0001 16.4505ZM12.0001 4.53396H6.55384H17.4463H12.0001Z"
                      fill="black"
                    />
                  </svg>
                </button>
                </div>
                </div>
              </li>
                            <li className={style.popularItem} className={style.popularBlock}>
                <img
                  src={popularPolar}
                  className={style.popularImage}
                  alt="popular story"
                />
                <div className={style.subFix}>
                <p className={style.popularRegion}>Пустелі</p>
                <h4 className={style.popularTitle}>
                  Арктика на яхті: чотири тижні серед айсбергів
                </h4>
                <p className={style.popularText}>
                  Північний Льодовитий океан. Ми провели чотири тижні на яхті,
                  яка прокладала шлях крізь крижане море. Мандрівка почалася зі
                  Шпіцбергена.
                </p>
                                <div className={style.popularFix}>
                <img
                  src={avatar}
                  alt="avatar"
                  className={style.popularAvatar}
                />
                <div>
                    <p className={style.popularName}>Єва Бондаренко</p>
                <p className={style.popularDate}>15.04.2025</p>
       </div>
</div>
<div className={style.popularLine}>
   <button className={style.popularButton}>
                  Переглянути стaттю
                </button>
                <button className={style.popularIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12.0001 18.2727L7.23159 20.3127C6.66392 20.5574 6.12517 20.5115 5.61534 20.175C5.1055 19.8385 4.85059 19.3623 4.85059 18.7465V4.53396C4.85059 4.07229 5.0195 3.67204 5.35734 3.33321C5.695 2.99421 6.09384 2.82471 6.55384 2.82471H17.4463C17.908 2.82471 18.3083 2.99421 18.6471 3.33321C18.9861 3.67204 19.1556 4.07229 19.1556 4.53396V18.7465C19.1556 19.3623 18.8997 19.8385 18.3878 20.175C17.876 20.5115 17.3363 20.5574 16.7686 20.3127L12.0001 18.2727ZM12.0001 16.4505L17.4463 18.7465V4.53396H6.55384V18.7465L12.0001 16.4505ZM12.0001 4.53396H6.55384H17.4463H12.0001Z"
                      fill="black"
                    />
                  </svg>
                </button>
  </div>             
                </div>
              </li>
            </ul>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};
