import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/components/App.tsx";
import { Provider } from "react";
import "./index.css";

ReactDOM.createRoot(document.querySelector(".container") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
