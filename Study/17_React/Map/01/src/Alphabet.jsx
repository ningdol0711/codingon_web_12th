import { useState } from "react";

function Alphabet() {
  // let list = ['a', 'b', 'c', 'd', 'e'];
  // const items = list.map((e, index, arr) => {
  //   return e + index;
  // });

  // return ( 
  //   <ol>
  //     {list.map((e,index) => {
  //       return (<li key={index}>{e}</li>);
  //     })}
  //   </ol>
  //  );

  const [alphabet, setAlphabet] = useState([
  ])
  const [inputAlpha, setInputAlpha] = useState('');

  const addAlpha = () => {
    if(inputAlpha.trim().length === 0) return;

    const newAlpha = alphabet.concat({
      id: alphabet + 1,
      text: inputAlpha,
    })
    setAlphabet(newAlpha);
    setInputAlpha('');
  }

  const deleteAlpha = (targetId) => {
    const newAlpha = alphabet.filter((e) => {
      return e.id !== targetId;
    })

    setAlphabet(newAlpha);
  } 

  return(
    <div>
      {/* <ol>
        {alphabet.map((e) => {
          return (<li key={e.id}>{e.text}</li>)
        })}
      </ol> */}

      <input type="text" placeholder="type text" onChange={(e) => {setInputAlpha(e.target.value)}}/>

      <button onClick={addAlpha}>Add</button>
      
      {alphabet.length === 0 && <div>알파벳을 입력해 주세요!</div>}
      {null || <div>값이 정의되지 않았어요!</div>}

      {alphabet.length !== 0 ? (
        <ol>
          {alphabet.map((e) => {
            return (<li key={e.id} onDoubleClick={() => {deleteAlpha(e.id)}}>{e.text}</li>)
          })}
        </ol>
      ) : <div>빈 배열</div>}
    </div>
  )
}

export default Alphabet;