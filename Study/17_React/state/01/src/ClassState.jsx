import { Component } from "react";

export default class ClassState extends Component {
  state = {
    Number: 0,
  }

  render() {
    const {Number} = this.state;
    return(
      <div className="App">
        <h1>{Number}</h1>

        <button onClick={() => {this.setState({Number: 2})}}>Change State</button>
        <button onClick={() => {this.setState({Number: Number + 1})}}>Increse State</button>
        <button onClick={() => {this.setState((prestate) => {return ({Number: prestate.Number + 2})})}}>Increse State</button>
      </div>
    )
  }
}
