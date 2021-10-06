import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "virtual:windi.css";
import "antd/dist/antd.css";
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)