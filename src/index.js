import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "easy-peasy";
import { globalState } from "./database/globalState";

// ReactDOM.hydrate(
//   <StoreProvider store={globalState}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </StoreProvider>,
//   document.getElementById("root")
// );

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
    <StoreProvider store={globalState}>
      <App />
    </StoreProvider>,
    rootElement
  );
} else {
  ReactDOM.render(
    <StoreProvider store={globalState}>
      <App />
    </StoreProvider>,

    rootElement
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
