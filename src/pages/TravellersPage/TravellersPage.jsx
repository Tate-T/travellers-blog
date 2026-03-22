import { Header } from "../../commponents/Header/Header.jsx"
import { Footer } from "../../commponents/Footer/Footer.jsx"
import { Container } from "../../commponents/Container/Container.jsx";
import style from "./TravellersPage.module.css"
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const TravellersPage = () => {

  // const { profileId } = useParams();
  // console.log(profileId)
  // console.log(window.history)
  // console.log(window.location)
  let location = useLocation()
  console.log(location)
  const [travellers, setTravellers] = useState([]);

  useEffect(() => {
    fetch("https://69b67459583f543fbd9dc426.mockapi.io/travellers/travellers")
    .then(a => a.json())
    .then(data => setTravellers(data))
  }, [])
  
  return (
    <>
      <Header />

      <Container>
        <main>
          <section className={style.travellersPage}>
            <h2 className={style.travellersTitle}>
              Мандрівники
            </h2>

            <ul className={style.travellersList}>
              {travellers.map(traveller => (

              <li className={style.travellersItem}>
                <img className={style.travellersPhoto} src={traveller.photo} alt={traveller.name} />
                <h3 className={style.travellersName}>{traveller.name}</h3>
                <p className={style.travellersDescription}>{traveller.description}</p>
                <Link className={style.travellersButton} to='/profile'>Переглянути профіль</Link>
              </li>
              ))}
            </ul>
            {/* <ul className={style.travellersList}>
              <li className={style.travellersItem}>
                <img src="" alt="Анастасія Олійник" className={style.travellersPhoto} />
                <h3 className={style.travellersName}>Анастасія Олійник</h3>
                <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
                <Link className={style.travellersButton} to='/profile' >Переглянути профіль</Link>
              </li>
              <li className={style.travellersItem}>
                <img src="" alt="Назар Ткаченко" className={style.travellersPhoto} />
                <h3 className={style.travellersName}>Назар Ткаченко</h3>
                <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
                <Link className={style.travellersButton} to='/profile'>Переглянути профіль</Link>
              </li>
              <li className={style.travellersItem}>
                <img src="" alt="Єва Бондаренко" className={style.travellersPhoto} />
                <h3 className={style.travellersName}>Єва Бондаренко</h3>
                <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
                <Link className={style.travellersButton} to='/profile'>Переглянути профіль</Link>
              </li>
              <li className={style.travellersItem}>
                <img src="" alt="Дмитро Романенко" className={style.travellersPhoto} />
                <h3 className={style.travellersName}>Дмитро Романенко</h3>
                <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
                <Link className={style.travellersButton} to='/profile'>Переглянути профіль</Link>
              </li>
              <li className={style.travellersItem}>
                <img src="" alt="Олександра Бондаренко" className={style.travellersPhoto} />
                <h3 className={style.travellersName}>Олександра Бондаренко</h3>
                <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
                <Link className={style.travellersButton} to='/profile'>Переглянути профіль</Link>
              </li>
              <li className={style.travellersItem}>
                <img src="" alt="Олександр Шевчук" className={style.travellersPhoto} />
                <h3 className={style.travellersName}>Олександр Шевчук</h3>
                <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
                <Link className={style.travellersButton} to='/profile'>Переглянути профіль</Link>
              </li>
              <li className={style.travellersItem}>
                <img src="" alt="Софія Мельник" className={style.travellersPhoto} />
                <h3 className={style.travellersName}>Софія Мельник</h3>
                <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
                <Link className={style.travellersButton} to='/profile'>Переглянути профіль</Link>
              </li>
              <li className={style.travellersItem}>
                <img src="" alt="Дарина Ковальчук" className={style.travellersPhoto} />
                <h3 className={style.travellersName}>Дарина Ковальчук</h3>
                <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
                <Link className={style.travellersButton} to='/profile'>Переглянути профіль</Link>
              </li>
              <li className={style.travellersItem}>
                <img src="" alt="Владислав Поліщук" className={style.travellersPhoto} />
                <h3 className={style.travellersName}>Владислав Поліщук</h3>
                <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
                <Link className={style.travellersButton} to='/profile'>Переглянути профіль</Link>
              </li>
              <li className={style.travellersItem}>
                <img src="" alt="Владислав Поліщук" className={style.travellersPhoto} />
                <h3 className={style.travellersName}>Владислав Поліщук</h3>
                <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
                <Link className={style.travellersButton} to='/profile'>Переглянути профіль</Link>
              </li>
              <li className={style.travellersItem}>
                <img src="" alt="Владислав Поліщук" className={style.travellersPhoto} />
                <h3 className={style.travellersName}>Владислав Поліщук</h3>
                <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
                <Link className={style.travellersButton} to='/profile'>Переглянути профіль</Link>
              </li>
              <li className={style.travellersItem}>
                <img src="" alt="Іван Ковальчук" className={style.travellersPhoto} />
                <h3 className={style.travellersName}>Іван Ковальчук</h3>
                <p className={style.travellersDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
                <Link className={style.travellersButton} to='/profile'>Переглянути профіль</Link>
              </li>
            </ul> */}
          </section>
        </main>
      </Container>

      <Footer />
    </>
  );
};
