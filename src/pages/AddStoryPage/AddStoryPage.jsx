import {Header} from "../../commponents/Header/Header.jsx"
import {Footer} from "../../commponents/Footer/Footer.jsx"

export const AddStoryPage = () => {
  return (
    <>
      <Header />
      <main>
        <input type="file" download/>
      </main>
      <Footer />
    </>
  );
};
