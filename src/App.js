import "./App.css";
import { AddStoryPage } from "./pages/AddStoryPage/AddStoryPage";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import StoriesPage from "./pages/StoriesPage/StoriesPage";
import { StoryPage } from "./pages/StoryPage/StoryPage";
import { TravellerPage } from "./pages/TravellerPage/TravellerPage";
import { TravellersPage } from "./pages/TravellersPage/TravellersPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/auth" element={<AuthPage />} />
         <Route path="/" element={<HomePage />} />
         <Route path="/stories" element={<StoriesPage />} />
         <Route path="/traveller" element={<TravellerPage />} />
                {/* <Route path="/story" element={<StoryPage />} /> */}
         <Route path="/travellers" element={<TravellersPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/addstory" element={<AddStoryPage />} />
      </Routes>
    </div>
  );
}

export default App;