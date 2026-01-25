import style from "../TravellersStories.module.css";
import Human from "../../../images/human.jpg";
import Bookmark from "../../../images/bookmark.png";

export const StoriesPageItem = ({
  story,
  className,
}) => {
  console.log(story)
  console.log(story._id)
  return (
    <li className={`${style.storiesItem} ${className || ""}`}>
      <img className={style.img} src={story.img} alt={story.category}/>
      <div className={style.box}>
        <p className={style.region}>{story.category}</p>
        <h4 className={style.descr}>{story.title}</h4>
        <p className={style.text}>{story.article}</p>
        <div className={style.boxHuman}>
          <img className={style.avatar} src={story.Human} alt="avatar" />
          <div className={style.textBlock}>
            <p className={style.name}>Анастасія Олійник</p>
            <div className={style.meta}>
              <p className={style.date}>{story.date}</p>
              <span className={style.dot}>•</span>
              <span className={style.bookmark}>
                5{" "}
                <img
                  src={story.Bookmark}
                  alt="bookmark"
                  className={style.bookmarkIcon1}
                ></img>
              </span>
            </div>
          </div>
        </div>

        <ul className={style.btnList}>
          <li className={style.btnItem}>
            <button className={style.btn1} type="button">
              Переглянути статтю
            </button>
          </li>
          <li className={style.btnItem}>
            <button className={style.btn2} type="button">
              <img
                src={Bookmark}
                alt="bookmark"
                className={style.bookmarkIcon}
              ></img>
            </button>
          </li>
        </ul>
      </div>
    </li>
  );
};
