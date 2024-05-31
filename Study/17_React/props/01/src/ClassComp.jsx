import { Component } from "react";

class ClassComp extends Component {
  render() {
    const { name, children } = this.props;

    return (
      <div>
        <p>This is FuncComp</p>
        <p>{name}</p>
        <div>{children}</div>
      </div>
    );
  }
}

ClassComp.defaultProps = {
  name: "default",
}

export default ClassComp;