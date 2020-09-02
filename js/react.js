// 探探
import React from "react";
export class Com extends React.Component {
  state = { val: 0 };

  componentDidMount() {
    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val); // 0
    this.setState({ val: this.state.val + 1 });
    console.log(this.state.val); // 0
    setTimeout((_) => {
      console.log(this.state.val); // 1
      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val); // 2
    }, 0);
  }
  render() {
    return <div className="game">{this.state.val}</div>;
  }
}

