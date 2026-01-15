import "./App.css";
import { AddStoryPage } from "./pages/AddStoryPage/AddStoryPage";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import StoriesPage from "./pages/StoriesPage/StoriesPage";
import { StoryPage } from "./pages/StoryPage/StoryPage";

import { TravellersPage } from "./pages/TravellersPage/TravellersPage";

function App() {
  return (
    <div className="App">
      <AuthPage />
      <HomePage />
      <StoriesPage />
      <StoryPage />
      <TravellersPage />
      <ProfilePage />
      <AddStoryPage />
    </div>
  );
}

export default App;
