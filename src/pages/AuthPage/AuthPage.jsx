import {Header} from "../../commponents/Header/Header.jsx"
import {Footer} from "../../commponents/Footer/Footer.jsx"
import {LoginForm} from "./LoginForm.jsx"
import {RegistrationForm} from "./RegistrationForm.jsx"
import { Container } from "../../commponents/Container/Container.jsx";

export const AuthPage = () => {
  return (
    <>
      <Header />
      <Container>
      <main>
        <ul>
          <li><button>Реєстрація</button></li>
          <li><button>Вхід</button></li>
        </ul>
        <LoginForm/>
        <RegistrationForm/>
      </main>
      </Container>
      <Footer />
    </>
  );
};
