import React from "react";
import ReactDOM from "react-dom";
import { Global } from "@emotion/react";
import normalize from "emotion-normalize";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={normalize} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
