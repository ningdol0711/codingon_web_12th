import React, { Component } from "react";

class Pr1 extends Component {
  selectInput1 = React.createRef();
  selectInput2 = React.createRef();

  state = {
    nameInputValue: "",
    titleInputValue: "",
    chat: [],
  }

  checkValue = () => {
    const {nameInputValue, titleInputValue, chat} = this.state;

    if(nameInputValue === "") {
      this.selectInput1.current.focus();
    }
    else if(titleInputValue === "") {
      this.selectInput2.current.focus();
    } 
    else {
      const newChat = chat.concat({
        name: nameInputValue,
        title: titleInputValue,
      })
      this.setState({chat: newChat})
      console.log(chat);  
    }
  }

  render() {
    const {chat} = this.state;
    return (
      <div className="App">
        <span>작성자 : </span>
        <input type="text" ref={this.selectInput1} onChange={(e) => {this.setState({nameInputValue: e.target.value})}}/>
        <br />
        <span>제목 : </span>
        <input type="text" ref={this.selectInput2} onChange={(e) => {this.setState({titleInputValue: e.target.value})}}/>
        <button onClick={this.checkValue}>작성</button>
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
              <tr
                key={index}
              >
                <td>{index + 1}</td>
                <td>{e.name}</td>
                <td>{e.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    ) 
  }
}

export default Pr1