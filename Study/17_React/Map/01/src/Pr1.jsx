import { useState } from "react";

function Pr1() {
  const [state, addState] = useState(1);

  return ( 
    <div>
      <button onClick={() => {addState(state + 1)}}>{state % 2 === 0 ? "사라져라" : "보여라"}</button>
      <div>{state % 2 === 0 && "안녕하세요"}</div>
    </div>
   );
}

export default Pr1;