import { useState } from "react";

function FuncCount() {
  const [Number, setNumber] = useState(0);

  const printAlert = (e) => {
    alert(e);
  }

  const printConsole = (e, msg) => {
    console.log(e, msg);
  }

  return ( 
    <div className="App">
      <h2>{Number}</h2>
      <button onClick={() => {setNumber(Number + 1)}}>Increase</button>
      <button onClick={() => {setNumber(Number - 1)}}>Decrease</button>

      <button onClick={() => {printAlert("Hello")}}>Alert print</button>
      <button onClick={() => {printConsole("World")}}>Console print</button>
    </div>
   );
}

export default FuncCount;