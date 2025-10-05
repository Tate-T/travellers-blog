import { Header } from "../../commponents/Header/Header.jsx"
import { Footer } from "../../commponents/Footer/Footer.jsx"
import style from "./AddStoryPage.module.css";
import { Container } from "../../commponents/Container/Container";
import imageChaglushka from "../../images/addStoryImageChaglushka.png";

export const AddStoryPage = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1 className={style.createNewStory}>Створити нову історію</h1>
          <p className={style.addStoryImageText}>Обкладинка статті</p>
          <div className={style.divOrganaizeImage}>
            <div className={style.subDivOrganaizeImage}>
              <img className={style.addStoryImage} src={imageChaglushka} alt="Обкладинка статті" />
              <button className={style.uploadImage}>Завантажити фото</button>
            </div>
            <div className={style.subDivOrganaizeImage}>
              <button className={style.saveImage}>Зберегти</button>
              <button className={style.cancelImage}>Відмінити</button>
            </div>
          </div>
          <ul className={style.storySettingList}>
            <li className={style.storySettingItem}>
              <p>Загаловок</p>
              <input type="text" placeholder="Введіть заголовок історії" />
            </li>
            <li className={style.storySettingItem}>
              <p>Категорія</p>
              <select id="city" name="city">
                <option value="#">Категорія</option>
                <option value="story">story</option>
                <option value="history">history</option>
              </select>
            </li>
            <li className={style.storySettingItem}>
              <p>Текст історії</p>
              <input type="text" placeholder="Ваша історія тут" />
            </li>
          </ul>
        </Container>
      </main>
      <Footer />
    </>
  );
};
