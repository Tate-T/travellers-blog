import style from "./AuthPage.module.css"
export const RegistrationForm = () => {
    return (
     <form className={style.form} action="">
        <h1 className={style.title}>Реєстрація</h1>
        <p className={style.text}>Раді вас бачити у спільноті мандрівників!</p>
        <ul className={style.items}>
            <li>
                <p>Імʼя та Прізвище*</p>
                <input type="text" placeholder="Ваше імʼя та прізвище"/>
            </li>
            <li>
                <p>Пошта*</p>
                <input type="email" placeholder="hello@podorozhnyky.ua"/>
            </li>
            <li>
                <p>Пароль*</p>
                <input type="password" placeholder="********"/>
            </li>
        </ul>
        <button className={style.buttone}>Зареєструватись</button>
     </form>
    );
}