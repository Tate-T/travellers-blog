import style from "./AuthPage.module.css"

export const RegistrationForm = () => {
    const onClickRegistration = (event) => {
        event.preventDefault()
        const formData = event.target.elements
        const username = formData.username.value
        const email = formData.email.value
        const password = formData.password.value
        const userData = { username, email, password }
        console.log(userData)
    }
    return (
        <form className={style.form} action="" onSubmit={onClickRegistration}>
            <h1 className={style.title}>Реєстрація</h1>
            <p className={style.text}>Раді вас бачити у спільноті мандрівників!</p>
            <ul className={style.items}>
                <li>
                    <p>Імʼя та Прізвище*</p>
                    <input type="text" placeholder="Ваше імʼя та прізвище" name="username" />
                </li>
                <li>
                    <p>Пошта*</p>
                    <input type="email" placeholder="hello@podorozhnyky.ua" name="email" />
                </li>
                <li>
                    <p>Пароль*</p>
                    <input type="password" placeholder="********" name="password" />
                </li>
            </ul>
            <button className={style.buttone}>Зареєструватись</button>
        </form>
    );
}