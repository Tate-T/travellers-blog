import "./App.css";
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
      <AuthPage />
      <HomePage />
      <StoriesPage />
      <StoryPage />
      <TravellerPage />
      <TravellersPage />
      <ProfilePage />
      <AddStoryPage />
    </div>
  );
}

export default App;