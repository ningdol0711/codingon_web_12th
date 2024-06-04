import { useRef, useState } from "react";

function RefConst() {
  const refId = useRef(1);
  const [ID, setId] = useState(10);

  const plus = () => {
    refId.current += 1;
    setId(ID + 1)
  }

  const minus = () => {
    refId.current -= 1;
    setId(ID - 1)
  }

  return ( 
    <div>
      <h2>Ref변수</h2>
      <div>{refId.current} || {ID}</div>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
    </div>
   );
}

export default RefConst;