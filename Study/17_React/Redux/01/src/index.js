import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./store";
// import App2 from "./App2";
// import App3 from "./App3";
import Pr1 from "./Pr1";

// store : 전역 상태를 관리하는 공간 (한 프로젝트에 한 공간)
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({ reducer: rootReducer });

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App2 />
      <App3 /> */}
      <Pr1 />

    </Provider>
  </React.StrictMode>
);
