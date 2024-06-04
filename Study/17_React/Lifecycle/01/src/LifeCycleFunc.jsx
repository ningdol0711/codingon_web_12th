import { useState } from "react";
import LifeCycleFuncChild from "./LifeCycleFuncChild";

function LifeCycleFunc() {
  const [number, UseNumber] = useState(0);
  const [visible, UseVisible] = useState(true);

  const changeNumber = () => {
    UseNumber(number + 1);
  };

  const changeVisible = () => {
    UseVisible(!visible);
  };

  return (
    <div>
      <h2>Lifecycle Class</h2>
      <button onClick={changeNumber}>Plus</button>
      <button onClick={changeVisible}>On/Off</button>
      {visible && <LifeCycleFuncChild Number={number}/>}
    </div>
  );
}

export default LifeCycleFunc;
