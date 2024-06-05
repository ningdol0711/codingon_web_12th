import { useMemo } from "react";
import { useState } from "react";

function UseMenoFunc() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const calc = useMemo(() => {
    console.log("Hi")
    for(let i=0; i<10000; i++) {}
    return count **2;
  }, [count])

  return ( 
    <div>
      <h2>UseMemo</h2>
      <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>
      <button onClick={() => {setCount(count + 1)}}>Plus</button>

      <p>Count : {count}</p>

      <p>Calc : {calc}</p>
    </div>
   );
}

export default UseMenoFunc;