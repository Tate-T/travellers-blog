import style from "./MessageNoStories.module.css";

export const MessageNoStories = () => {
return (
    <div className={style['no-message__box']}>
        <h6 className={style['no-message__text']}>Цей користувач ще не публікував історій</h6>
        <button className={style['no-message__btn']}>Назад до історій</button>
    </div>
)
}