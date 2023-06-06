import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./core/store/store";
import App from "./core/components/App";
import "./index.css";

ReactDOM.createRoot(document.querySelector(".container") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
