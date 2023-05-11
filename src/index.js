import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import App1 from "./App1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <App1 />
  </React.StrictMode>
);
