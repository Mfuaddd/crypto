import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MainProvider from "./contexts/MainProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MainProvider>
  </React.StrictMode>
);
