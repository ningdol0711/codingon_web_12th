import './App.css'

function App() {
  const name = "lee";
  const name1 = "Jun";
  const title = 50;
  const ani = "Reo";

  return ( 
    <div className="App">
      {/* jsx 문법  */}
      {/* 1. 하나로 감싸인 요소 */}
      {/* 2. JS 표현식 사용 가능 */}
      {/* {}사용시 JS 표현식 사용 가능, if문, for문 사용 불가, 삼항연산자만 사용 */}
      <p>Hi {name}{name1}</p>
      <p>{`${name1}`}</p>

      <p>{title} | likes</p>
      <p>my pets name is {ani}</p>
    </div>
   );
}

export default App;