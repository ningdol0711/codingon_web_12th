import { useState } from "react";

function HandlerEx3() {
  const [State, changeText] = useState(0)
  const [buttonText, changeButton] = useState("Show!");
  const [Text, changeHi] = useState("");

  const changeState = () => {
    if(State === 1) {
      changeButton("Show!");
      changeHi("");
      changeText(0);
    }
    else {
      changeButton("Disappear!");
      changeHi("Hi!");
      changeText(1);
    }
  }

  return ( 
    <div className="App">
      <button onClick={changeState}>{buttonText}</button>
      <p>{Text}</p>
    </div>
   );
}

export default HandlerEx3;