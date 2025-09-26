export const RegistrationForm = () => {
    return (
     <form action="">
        <h1>Реєстрація</h1>
        <p>Раді вас бачити у спільноті мандрівників!</p>
        <ul>
            <li>
                <p>Імʼя та Прізвище*</p>
                <input type="text" />
            </li>
            <li>
                <p>Пошта*</p>
                <input type="email" />
            </li>
            <li>
                <p>Пароль*</p>
                <input type="password" />
            </li>
        </ul>
        <button>Зареєструватись</button>
     </form>
    );
}