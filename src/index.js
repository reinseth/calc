import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Calculator } from "./ui";
import { formatDisplay, handleAction, initialState } from "./domain";

let state = initialState;

const root = ReactDOM.createRoot(document.getElementById("root"));

function dispatch(action) {
  console.log("dispatch:", action);
  state = handleAction(state, action);
  console.log("updated state:", state);
  render();
}

function render() {
  root.render(
    <Calculator display={formatDisplay(state)} dispatch={dispatch} />
  );
}

render();
