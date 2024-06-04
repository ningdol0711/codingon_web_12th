import { useRef, useState } from "react";

function Pr2() {
  const selectInput1 = useRef();
  const selectInput2 = useRef();
  const [nameInputValue, setNameValue] = useState("");
  const [titleInputValue, settitleValue] = useState("");
  const [chat, setChat] = useState([]);

  const checkValue = () => {
    if(nameInputValue === "") {
      selectInput1.current.focus();
    }
    else if(titleInputValue === "") {
      selectInput2.current.focus();
    }
    else {
      const newChat = chat.concat({
        name: nameInputValue,
        title: titleInputValue,
      })
      setChat(newChat);
    }
  }


  return (
    <div className="App">
      <span>작성자 : </span>
      <input
        type="text"
        ref={selectInput1}
        onChange={(e) => {setNameValue(e.target.value)}}
      />
      <br />
      <span>제목 : </span>
      <input
        type="text"
        ref={selectInput2}
        onChange={(e) => {settitleValue(e.target.value)}}
      />
      <button onClick={checkValue}>작성</button>
      <br />
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          {chat.map((e, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{e.name}</td>
                <td>{e.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Pr2;
