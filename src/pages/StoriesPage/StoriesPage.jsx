import { useState } from "react";
import { Header } from "../../commponents/Header/Header.jsx";
import { Footer } from "../../commponents/Footer/Footer.jsx";
import { Container } from "../../commponents/Container/Container";
import { StoriesPageItem } from "./StoriesPageItem.jsx";
import stories from "../../data/travel-articles.json";
import style from "./StoriesPage.module.css";

export const StoriesPage = () => {
  const [visibleCount, setVisibleCount] = useState(9); // visibleCount - сколько карточек показывать прям щас

  const showMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  const showLess = () => {
    setVisibleCount(9)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
              {stories.slice(0, visibleCount).map((story) => (
                <StoriesPageItem key={story.id} story={story} className={style.fadeIn} />
              ))}
            </ul>

            {visibleCount < stories.length ? (
              <button
                type="button"
                className={style.moreBtn}
                onClick={showMore}
              >
                Показати ще
              </button>
            ) : (
              <button type="button" className={style.lessBtn} onClick={showLess}>
                Згорнути
              </button>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};
