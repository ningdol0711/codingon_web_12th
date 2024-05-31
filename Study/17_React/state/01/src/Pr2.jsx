import { useState } from "react";

function Pr2() {
  const [Number, setNumber] = useState(0);

  return ( 
    <div>
        <h1>{Number}</h1>
        <button onClick={() => {setNumber(Number + 1)}}>Increase</button>
        <button onClick={() => {setNumber(Number - 2)}}>Decrease</button>
      </div>
   );
}

export default Pr2;