import {Header} from "../../commponents/Header/Header.jsx"
import {Footer} from "../../commponents/Footer/Footer.jsx"
import { Container } from "../../commponents/Container/Container"

export const ProfilePage = () => {
    return <>
    <Header/>
    <main>
        <section>
            <Container>
                <img src="" alt=""/>
                <h2>Анастасія Олійник</h2>
                <p>Люблю активні подорожі та дослідження нових місць. Ділюся практичними порадами та маршрутами для мандрівників.</p>
            </Container>
        </section>
        <section></section>
    </main>
    <Footer/>
    </>
}