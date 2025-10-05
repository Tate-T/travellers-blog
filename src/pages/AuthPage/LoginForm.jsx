import style from "./AuthPage.module.css"
export const LoginForm = () => {
    return (
             <form className={style.form} action="">
        <h1 className={style.title}>Вхід</h1>
        <p className={style.text}>Вітаємо знову у спільноту мандрівників!</p>
        <ul className={style.items}>
            <li>
                <p>Пошта*</p>
                <input type="email" placeholder="hello@podorozhnyky.ua"/>
            </li>
            <li>
                <p>Пароль*</p>
                <input type="password" placeholder="********"/>
            </li>
        </ul>
        <button className={style.buttone}>Увійти</button>
     </form>
    );
}