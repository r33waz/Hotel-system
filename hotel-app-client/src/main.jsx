import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import HeaderComponent from "../src/components/header.components.tsx";
import FooterComponent from "../src/components/footer.components.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeaderComponent />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <FooterComponent />
  </React.StrictMode>
);
