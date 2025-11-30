// import { Header } from "../../commponents/Header/Header.jsx";
// import { Footer } from "../../commponents/Footer/Footer.jsx";
// import { Container } from "../../commponents/Container/Container";
// import { TravellersStories } from "../../commponents/TravellersStories/TravellersStories.jsx";
// import stories from "../../data/travel-articles.json";
// import { MessageNoStories } from "../../commponents/MessageNoStories/MessageNoStories.jsx";
// import Avatar from "../../images/profile-page-avatar.png";
// import style from "./ProfilePage.module.css";

// export const ProfilePage = () => {
//   const visibleCount = 9;
//   return (
//     <>
//       <Header />
//       <main>
//         <section className={style.profile}>
//           <Container>
//             <div className={style["profile-info__box"]}>
//               <img src={Avatar} alt="avatar" />
//               <div className={style.info__text}>
//                 <h2 className={style["profile-info__name"]}>Анастасія Олійник</h2>
//                 <p className={style["profile-info__desc"]}>
//                   Люблю активні подорожі та дослідження нових місць. Ділюся практичними порадами та маршрутами для мандрівників.
//                 </p>
//               </div>
//             </div>
//           </Container>
//         </section>
//         <section>
//           <Container>
//             <h1 className={style.stories__title}>Історії Мандрівника</h1>
//             {TravellersStories.length ? (<TravellersStories stories={stories} count={visibleCount}/>) : (<MessageNoStories/>) }
//           </Container>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// };

import { Header } from "../../commponents/Header/Header.jsx";
import { Footer } from "../../commponents/Footer/Footer.jsx";
import { Container } from "../../commponents/Container/Container";
import { TravellersStories } from "../../commponents/TravellersStories/TravellersStories.jsx";
import stories from "../../data/travel-articles.json";
import { MessageNoStories } from "../../commponents/MessageNoStories/MessageNoStories.jsx";
import Avatar from "../../images/profile-page-avatar.png";
import style from "./ProfilePage.module.css";

export const ProfilePage = ({ isOwner, pageMode, hasStories }) => {
  const visibleCount = 9;

  const profileData = isOwner
    ? {
        name: "Назар Ткаченко",
        description: "Прихильник культурного туризму. Пишу про історичні локації, архітектуру та цікаві місцеві традиції.",
        avatar: Avatar,
      }
    : {
        name: "Анастасія Олійник",
        description: "Люблю активні подорожі та дослідження нових місць. Ділюся практичними порадами та маршрутами для мандрівників.",
        avatar: Avatar,
      };

  const pageTitle = isOwner ? (pageMode === "savedStories" ? "Збережені історії" : "Мої історії") : "Історії Мандрівника";

  let messageProps;
  if (!hasStories) {
    if (isOwner) {
      if (pageMode === "myStories") {
        messageProps = {
          title: "Ви ще нічого не публікували, поділіться своєю першою історією!",
          linkText: "Опублікувати історію",
          linkHref: "../../AddStoryPage/AddStoryPage.jsx",
        };
      } else {
        // pageMode === 'savedStories'
        messageProps = {
          title: "У вас ще немає збережених історій, мерщій збережіть вашу першу історію!",
          linkText: "До історій",
          linkHref: "../StoriesPage/StoriesPage.jsx",
        };
      }
    } else {
      messageProps = {
        title: "Цей користувач ще не публікував історій",
        linkText: "Назад до історій",
        linkHref: "../StoriesPage/StoriesPage.jsx",
      };
    }
  }
  const hasContent = hasStories && stories.length > 0;
  return (
    <>
      <Header />
      <main>
        <section className={style.profile}>
          <Container>
            <div className={style["profile-info__box"]}>
              <img src={profileData.avatar} alt="avatar" />
              <div className={style.info__text}>
                <h2 className={style["profile-info__name"]}>{profileData.name}</h2>
                <p className={style["profile-info__desc"]}>{profileData.description}</p>
              </div>
            </div>
            {isOwner && (
              <div className={style.tabs}>
                <button className={pageMode === "savedStories" ? style.activeTab : ""}>Збережені історії</button>
                <button className={pageMode === "myStories" ? style.activeTab : ""}>Мої історії</button>
              </div>
            )}
          </Container>
        </section>
        <section>
          <Container>
            <h1 className={style.stories__title}>{pageTitle}</h1>
            {hasContent ? (
              <TravellersStories stories={stories} count={visibleCount} />
            ) : (
              <MessageNoStories title={messageProps.title} linkText={messageProps.linkText} linkHref={messageProps.linkHref} />
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};
