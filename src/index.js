import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./store.js"; // Import your Redux store
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Wrap your App component with Provider and pass the store */}
      <App />
    </Provider>
  </React.StrictMode>
);
