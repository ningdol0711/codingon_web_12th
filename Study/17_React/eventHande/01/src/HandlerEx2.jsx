import { useState } from "react"

export default function HandlerEx2() {
  const [textColor, changeColor] = useState({});
  const [Text, changeText] = useState("Black Text");
  
  const changeColorRed = () => {
    changeColor({color: "red"});
    changeText("Red Text");
  }

  const changeColorBlue =() => {
    changeColor({color: "Blue"});
    changeText("Blue Text");
  }

  return (
    <div className="App">
      <h2 style={textColor}>{Text}</h2>
      <button onClick={changeColorRed}>Red</button>
      <button onClick={changeColorBlue}>Blue</button>
    </div>
  )
}