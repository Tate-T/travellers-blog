import {Header} from "../../commponents/Header/Header.jsx"
import {Footer} from "../../commponents/Footer/Footer.jsx"
import { Container } from "../../commponents/Container/Container";
import { StoriesPageItem } from "./StoriesPageItem.jsx";
import stories from "../../data/travel-articles.json";
import style from "./StoriesPage.module.css"

export const StoriesPage = ({id, img, title, article, category, rate,ownerId, date}) => {
  return (
    <>
      <Header />
      <main>
        <section className={style.storiesPage}>
            <Container>
                <h3 className={style.title}>Історії Мандрівників</h3>
                <ul className={style.filter}>
                    <li className={style.filterItem}>
                        <p className={style.filterText}>Всі історії</p>
                    </li>
                    <li className={style.filterItem}>
                        <p className={style.filterText}>Європа</p>
                    </li>
                    <li className={style.filterItem}>
                        <p className={style.filterText}>Азія</p>
                    </li>
                    <li className={style.filterItem}>
                        <p className={style.filterText}>Пустелі</p>
                    </li>
                    <li className={style.filterItem}>
                        <p className={style.filterText}>Африка</p>
                    </li>
                </ul>

                <ul className={style.stories}>
                    {stories.map((story) => {
                        return <StoriesPageItem story={story} />
                    })}
                </ul>
            </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};
