import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import Router from "Views/Router";

import "Config/fontawesome";

import "Assets/Style/global.css";

ReactDOM.render(<Router />, document.getElementById("root"));

serviceWorker.register();
