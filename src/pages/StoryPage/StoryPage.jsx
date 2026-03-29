import { Container } from "../../commponents/Container/Container";
import { TravellersStories } from "../../commponents/TravellersStories/TravellersStories.jsx";
import storiesStyle from "./StoryPage.module.css";
import articles from "../../data/travel-articles.json";

import { useParams } from "react-router-dom";
import { CurrentStoryContext } from "../../commponents/context/CurrentStoryContext.jsx";
import { useContext } from "react";

export const StoryPage = () => {
  const { storyId } = useParams();

  const { stories } = useContext(CurrentStoryContext);

  const filteredStories = stories?.filter((item) => String(item._id.$oid) === String(storyId));
  const story = filteredStories[0];
  console.log(story);
  return (
    <>
      <section className={storiesStyle.hero}>
        <Container>
          <h1 className={storiesStyle.storyTitle}>{story?.title}</h1>
          <div className={storiesStyle.autorList}>
            <div className={storiesStyle.heroFormater}>
              <p className={storiesStyle.autorDate}>
                Автор статті <span className={storiesStyle.nameDate}>{story?.ownerId.$oid}</span>
              </p>
              <p className={storiesStyle.autorDate}>
                Опубліковано <span className={storiesStyle.nameDate}>{story?.date}</span>
              </p>
            </div>
            <button className={storiesStyle.heroButton}>{story?.category.$oid}</button>
          </div>
          <img src={story?.img} alt="hero" className={storiesStyle.autorImage} />
          <div className={storiesStyle.autorFix}>
            <p className={storiesStyle.heroDes}>{story?.article}</p>
            <div className={storiesStyle.heroDiv}>
              <h3 className={storiesStyle.saveHistory}>Збережіть собі історію</h3>
              <p className={storiesStyle.areAvalible}>Вона буде доступна у вашому профілі у розділі збережене</p>
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
    </>
  );
};
