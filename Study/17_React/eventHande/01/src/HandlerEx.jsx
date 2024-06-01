import { Component } from "react";

class HandlerEx1 extends Component {
  state = {
    World: "Hello World!",
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.World}</h1>
        <button onClick={() => {this.setState({World: "Goodbye World!"})}}>Change State</button>
      </div>
    )
  }
}

export default HandlerEx1;