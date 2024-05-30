import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ClassComponent from "./classComp";
import reportWebVitals from "./reportWebVitals";
import FuncComponent from "./FuncComp";
import FuncProps from "./FuncProps";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <App />
      <ClassComponent />
      <FuncComponent />

      {[1, 2, 3, 4].map((e) => (
        <FuncProps key={`${e}`} name={`${e}`} lunch="sova" />
      ))}
      <FuncProps name="1" lunch="sova" />
      <FuncProps name="2" lunch="jet" />
      <FuncProps name="3" />
    </React.StrictMode>
  </>
);

reportWebVitals();
