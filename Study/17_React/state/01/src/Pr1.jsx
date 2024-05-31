import { Component } from "react";

export default class Pr1 extends Component {
  state = {
    Number: 0,
  }

  render() {
    const {Number} = this.state;

    return (
      <div>
        <h1>{Number}</h1>
        <button onClick={() => {this.setState({Number: Number + 2})}}>+2</button>
        <button onClick={() => {this.setState({Number: Number - 1})}}>-1</button>
      </div>
    )
  }
}