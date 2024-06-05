import { useMemo } from "react";
import { useState } from "react";

function HookPr1() {
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");

  const matchText = useMemo(() => {
    const count = inputText.split(searchText).length - 1;
    return count;
  }, [inputText, searchText]);

  return ( 
    <div>
      <input type="text" onChange={(e) => {setInputText(e.target.value)}}/>
      <input type="text" onChange={(e) => {setSearchText(e.target.value)}}/>
      <div>{searchText} 단어의 빈도수 : {matchText >= 1 ? matchText : "없음"}</div>
    </div>
   );
}

export default HookPr1;