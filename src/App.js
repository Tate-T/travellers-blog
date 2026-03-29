import "./App.css";

import { Header } from "./commponents/Header/Header";
import { Footer } from "./commponents/Footer/Footer";

import { AddStoryPage } from "./pages/AddStoryPage/AddStoryPage";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import StoriesPage from "./pages/StoriesPage/StoriesPage";
import { StoryPage } from "./pages/StoryPage/StoryPage";
import { TravellerPage } from "./pages/TravellerPage/TravellerPage";
import { TravellersPage } from "./pages/TravellersPage/TravellersPage";
import { PageNotFound } from "./commponents/PageNotFound/PageNotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Header />
      <main>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/stories/:storyId" element={<StoryPage />} />
          <Route path="/travellers" element={<TravellersPage />} />
          <Route path="/profile/:profileId" element={<ProfilePage />} />
          <Route path="/addstory" element={<AddStoryPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />

    </div>
  );
}

export default App;
