import style from "./StoriesPage.module.css"
import Human from "../../images/human.jpg"
import Bookmark from "../../images/bookmark.png"
import BookmarkWhite from "../../images/bookmark-white.png"

export const StoriesPageItem = ({story: {id, img, title, article, category, rate,ownerId, date}, className}) => {
    return (
        <li className={`${style.storiesItem} ${className || ""}`}  key={id}>
            <img className={style.img} src={img} alt={category}></img>
            <div className={style.box}>
            <p className={style.region}>{category}</p>
            <h4 className={style.descr}>{title}</h4>
            <p className={style.text}>{article}</p>
           <div className={style.boxHuman}>
  <img className={style.avatar} src={Human} alt="avatar" />
  <div className={style.textBlock}>
    <p className={style.name}>Анастасія Олійник</p>
    <div className={style.meta}>
      <p className={style.date}>{date}</p>
      <span className={style.dot}>•</span>
      <span className={style.bookmark}>5 <img src={Bookmark} alt="bookmark" className={style.bookmarkIcon1}></img></span>
    </div>
  </div>
</div>

              <ul className={style.btnList}>
                <li className={style.btnItem}>
                    <button className={style.btn1} type="button">Переглянути статтю</button>
                </li>
                <li className={style.btnItem}>
                    <button className={style.btn2} type="button">
                        <img src={Bookmark} alt="bookmark" className={style.bookmarkIcon}></img>
                    </button>
                </li>
              </ul>
              </div>
        </li>
    )
}