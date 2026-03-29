import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { CurrentStoryProvider } from "./commponents/context/CurrentStoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/travellers-blog">
      <CurrentStoryProvider>
        <App />
      </CurrentStoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
