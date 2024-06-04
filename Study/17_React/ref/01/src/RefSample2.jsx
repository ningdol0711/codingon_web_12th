import React from "react";
import { Component } from "react";

class RefSample2 extends Component {
  myInput = React.createRef();

  handleFocus = () => {
    this.myInput.current.focus();
  }

  render() { 
    return ( 
      <div className="App">
        <p>RefSample2</p>
        <input type="text" ref={this.myInput} />
        <button onClick={this.handleFocus}>Focus</button>
      </div>
     );
  }
}
 
export default RefSample2;