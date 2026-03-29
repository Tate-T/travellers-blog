import "./App.css";
import { AddStoryPage } from "./pages/AddStoryPage/AddStoryPage";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import StoriesPage from "./pages/StoriesPage/StoriesPage";
import { StoryPage } from "./pages/StoryPage/StoryPage";
import { TravellersPage } from "./pages/TravellersPage/TravellersPage";
import { PageNotFound } from "./commponents/PageNotFound/PageNotFound";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
function App() {
  return (
    <div className="App">
      <Suspense fallback={
        <div>
          Завантаження
        </div>
      }>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/story" element={<StoryPage />} />
        {/* <Route path="/story" element={<StoryPage />} /> */}
        <Route path="/travellers" element={<TravellersPage />} />
        <Route path="/profile/:profileId" element={<ProfilePage />} />
        <Route path="/addstory" element={<AddStoryPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;