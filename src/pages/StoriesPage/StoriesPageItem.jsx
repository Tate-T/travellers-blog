import style from "./StoriesPage.module.css"

export const StoriesPageItem = ({story: {id, img, title, article, category, rate,ownerId, date}}) => {
    return (
        <li className={style.storiesItem} key={id}>
            <img className={style.img} src={img} alt={category}></img>
            <p className={style.region}>{category}</p>
            <h4 className={style.descr}>{title}</h4>
            <p className={style.descr}>{article}</p>
             <img className={style.avatar} src="" alt="avatar"></img>
             <p className={style.name}>Анастасія Олійник</p>
              <p className={style.date}>{date}</p> 

              <ul className={style.btnList}>
                <li className={style.btnItem}>
                    <button className={style.btn1} type="button">Переглянути статтю</button>
                </li>
                <li className={style.btnItem}>
                    <button className={style.btn2} type="button"></button>
                </li>
              </ul>
        </li>
    )
}