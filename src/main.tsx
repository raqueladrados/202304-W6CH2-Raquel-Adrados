import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/components/App.tsx";
import "./index.css";

ReactDOM.createRoot(document.querySelector(".container") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
