// import style from "./MessageNoStories.module.css";

// export const MessageNoStories = () => {
// return (
//     <div className={style['no-message__box']}>
//         <h6 className={style['no-message__text']}>Цей користувач ще не публікував історій</h6>
//         <a className={style['no-message__btn']}href="../../AuthPage/AuthPage.jsx">Назад до історій</a>
//     </div>
// )
// }

import style from "./MessageNoStories.module.css";

export const MessageNoStories = ({ title, linkText, linkHref }) => {
  return (
    <div className={style["no-message__box"]}>
      <h6 className={style["no-message__text"]}>{title}</h6>
      <a className={style["no-message__btn"]} href={linkHref}>
        {linkText}
      </a>
    </div>
  );
};
