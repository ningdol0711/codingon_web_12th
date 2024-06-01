import { Component } from "react";

class ClassBind extends Component {
  // Class 내부의 변수는 필드라고 한다.
  // Class 내부의 함수는 메소드라고 한다.
  state = {
    name: "codingOn",
  }
  // Class 컴포넌트에서 Event 사용 = () => {} 사용
  // 인자가 없는 경우
  printConsole = () => {
    console.log("this", this); //현재 컴포넌트
    console.log("this.state", this.state); //현재 컴포넌트에 저장된 state
  }

  // 인자를 전달하는 경우
  printConsole2 = (e) => {
    console.log("this", this)
    console.log(e);
  }

  printConsole3 = (e, msg) => {
    console.log("this", this);
    console.log(e);
    console.log(msg);
  }

  render() { 
    return ( 
      <div className="App">
        <h1>Class Component</h1>
        <button onClick={this.printConsole}>Print Console</button>
        <button onClick={() => this.printConsole2("hi2")}>Print Console2</button>
        <button onClick={() => this.printConsole3("hi3")}>Print Console3</button>
      </div>
     );
  }
}
 
export default ClassBind;