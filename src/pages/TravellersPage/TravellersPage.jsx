import {Header} from "../../commponents/Header/Header.jsx"
import {Footer} from "../../commponents/Footer/Footer.jsx"
import { Container } from "../../commponents/Container/Container.jsx";
import style from "./TravellersPage.module.css"

export const TravellersPage = () => {
  return (
    <>
      <Header />
      <section className={style.travellersPage}>
      <Container>
      <main>
        
        <h2 className={style.travellersTitle}>
          Мандрівники
        </h2>
        <ul className={style.travellersList}>
          <li className={style.travellersItem}>
            <img src="" alt="Анастасія Олійник" className={style.travellersPhoto}/>
            <h3 className={style.travellersName}>Анастасія Олійник</h3>
            <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className={style.travellersButton}>Переглянути профіль</button>
          </li>
          <li className={style.travellersItem}>
            <img src="" alt="Назар Ткаченко" className={style.travellersPhoto}/>
            <h3 className={style.travellersName}>Назар Ткаченко</h3>
            <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className={style.travellersButton}>Переглянути профіль</button>
          </li>
          <li className={style.travellersItem}>
            <img src="" alt="Єва Бондаренко" className={style.travellersPhoto}/>
            <h3 className={style.travellersName}>Єва Бондаренко</h3>
            <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className={style.travellersButton}>Переглянути профіль</button>
          </li>
          <li className={style.travellersItem}>
            <img src="" alt="Дмитро Романенко" className={style.travellersPhoto}/>
            <h3 className={style.travellersName}>Дмитро Романенко</h3>
            <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className={style.travellersButton}>Переглянути профіль</button>
          </li>
          <li className={style.travellersItem}>
            <img src="" alt="Олександра Бондаренко" className={style.travellersPhoto}/>
            <h3 className={style.travellersName}>Олександра Бондаренко</h3>
            <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className={style.travellersButton}>Переглянути профіль</button>
          </li>
          <li className={style.travellersItem}>
            <img src="" alt="Олександр Шевчук" className={style.travellersPhoto}/>
            <h3 className={style.travellersName}>Олександр Шевчук</h3>
            <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className={style.travellersButton}>Переглянути профіль</button>
          </li>
          <li className={style.travellersItem}>
            <img src="" alt="Софія Мельник" className={style.travellersPhoto}/>
            <h3 className={style.travellersName}>Софія Мельник</h3>
            <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className={style.travellersButton}>Переглянути профіль</button>
          </li>
          <li className={style.travellersItem}>
            <img src="" alt="Дарина Ковальчук" className={style.travellersPhoto}/>
            <h3 className={style.travellersName}>Дарина Ковальчук</h3>
            <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className={style.travellersButton}>Переглянути профіль</button>
          </li>
          <li className={style.travellersItem}>
            <img src="" alt="Владислав Поліщук" className={style.travellersPhoto}/>
            <h3 className={style.travellersName}>Владислав Поліщук</h3>
            <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className={style.travellersButton}>Переглянути профіль</button>
          </li>
          <li className={style.travellersItem}>
            <img src="" alt="Владислав Поліщук" className={style.travellersPhoto}/>
            <h3 className={style.travellersName}>Владислав Поліщук</h3>
            <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className={style.travellersButton}>Переглянути профіль</button>
          </li>
          <li className={style.travellersItem}>
            <img src="" alt="Владислав Поліщук" className={style.travellersPhoto}/>
            <h3 className={style.travellersName}>Владислав Поліщук</h3>
            <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className={style.travellersButton}>Переглянути профіль</button>
          </li>
          <li className={style.travellersItem}>
            <img src="" alt="Іван Ковальчук" className={style.travellersPhoto}/>
            <h3 className={style.travellersName}>Іван Ковальчук</h3>
            <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className={style.travellersButton}>Переглянути профіль</button>
          </li>
        </ul>
      </main>
      </Container>
      </section>
      <Footer />
    </>
  );
};
