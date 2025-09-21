export const LoginForm = () => {
    return (
             <form action="">
        <h1>Вхід</h1>
        <p>Вітаємо знову у спільноту мандрівників!</p>
        <ul>
            <li>
                <p>Пошта*</p>
                <input type="email" />
            </li>
            <li>
                <p>Пароль*</p>
                <input type="password" />
            </li>
        </ul>
        <button>Увійти</button>
     </form>
    );
}