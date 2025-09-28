import {Header} from "../../commponents/Header/Header.jsx"
import {Footer} from "../../commponents/Footer/Footer.jsx"
import { Container } from "../../commponents/Container/Container.jsx";
import style from "./TravellersPage.module.css"

export const TravellersPage = () => {
  return (
    <>
      <Header />
      <section className="travellersPage">
      <Container>
      <main>
        
        <h2 className={style.test}>
          Мандрівники
        </h2>
        <ul className="travellers-list">
          <li className="travellers-item">
            <img src="" alt="Анастасія Олійник" className="travellers-photo"/>
            <h3 className="travellers-name">Анастасія Олійник</h3>
            <p className="travellers-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className="travellers-button">Переглянути профіль</button>
          </li>
          <li className="travellers-item">
            <img src="" alt="Назар Ткаченко" className="travellers-photo"/>
            <h3 className="travellers-name">Назар Ткаченко</h3>
            <p className="travellers-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className="travellers-button">Переглянути профіль</button>
          </li>
          <li className="travellers-item">
            <img src="" alt="Єва Бондаренко" className="travellers-photo"/>
            <h3 className="travellers-name">Єва Бондаренко</h3>
            <p className="travellers-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className="travellers-button">Переглянути профіль</button>
          </li>
          <li className="travellers-item">
            <img src="" alt="Дмитро Романенко" className="travellers-photo"/>
            <h3 className="travellers-name">Дмитро Романенко</h3>
            <p className="travellers-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className="travellers-button">Переглянути профіль</button>
          </li>
          <li className="travellers-item">
            <img src="" alt="Олександра Бондаренко" className="travellers-photo"/>
            <h3 className="travellers-name">Олександра Бондаренко</h3>
            <p className="travellers-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className="travellers-button">Переглянути профіль</button>
          </li>
          <li className="travellers-item">
            <img src="" alt="Олександр Шевчук" className="travellers-photo"/>
            <h3 className="travellers-name">Олександр Шевчук</h3>
            <p className="travellers-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className="travellers-button">Переглянути профіль</button>
          </li>
          <li className="travellers-item">
            <img src="" alt="Софія Мельник" className="travellers-photo"/>
            <h3 className="travellers-name">Софія Мельник</h3>
            <p className="travellers-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className="travellers-button">Переглянути профіль</button>
          </li>
          <li className="travellers-item">
            <img src="" alt="Дарина Ковальчук" className="travellers-photo"/>
            <h3 className="travellers-name">Дарина Ковальчук</h3>
            <p className="travellers-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className="travellers-button">Переглянути профіль</button>
          </li>
          <li className="travellers-item">
            <img src="" alt="Владислав Поліщук" className="travellers-photo"/>
            <h3 className="travellers-name">Владислав Поліщук</h3>
            <p className="travellers-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className="travellers-button">Переглянути профіль</button>
          </li>
          <li className="travellers-item">
            <img src="" alt="Владислав Поліщук" className="travellers-photo"/>
            <h3 className="travellers-name">Владислав Поліщук</h3>
            <p className="travellers-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className="travellers-button">Переглянути профіль</button>
          </li>
          <li className="travellers-item">
            <img src="" alt="Владислав Поліщук" className="travellers-photo"/>
            <h3 className="travellers-name">Владислав Поліщук</h3>
            <p className="travellers-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className="travellers-button">Переглянути профіль</button>
          </li>
          <li className="travellers-item">
            <img src="" alt="Іван Ковальчук" className="travellers-photo"/>
            <h3 className="travellers-name">Іван Ковальчук</h3>
            <p className="travellers-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
            <button className="travellers-button">Переглянути профіль</button>
          </li>
        </ul>
      </main>
      </Container>
      </section>
      <Footer />
    </>
  );
};
