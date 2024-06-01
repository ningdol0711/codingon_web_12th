import { useState } from "react";

function FuncCount() {
  const [Number, setNumber] = useState(0);

  return ( 
    <div className="App">
      <h2>{Number}</h2>
      <button onClick={() => {setNumber(Number + 1)}}>Increase</button>
      <button onClick={() => {setNumber(Number - 1)}}>Decrease</button>
    </div>
   );
}

export default FuncCount;