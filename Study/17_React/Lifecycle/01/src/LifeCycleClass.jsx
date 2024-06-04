import { Component } from "react";
import LifeCycleClassChild from "./LifeCycleClassChild";

class LifeCycleClass extends Component {
  state = {
    Number: 0,
    visible: true,
  }

  changeNumber = () => {
    this.setState({Number: this.state.Number + 1})
  }

  changeVisible = () => {
    this.setState({visible: !this.state.visible})
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Class</h2>
        <button onClick={this.changeNumber}>Plus</button>
        <button onClick={this.changeVisible}>On/Off</button>
        {this.state.visible === true && <LifeCycleClassChild Number={this.state.Number}/>}
      </div>
    )
  }
}

export default LifeCycleClass;