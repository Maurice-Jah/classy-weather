import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 8 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    return this.setState((curState) => ({ count: curState.count - 1 }));
  }

  handleIncrement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  render() {
    const date = new Date();
    date.setDate(date.getDate() + this.state.count);
    const time = date.toDateString();

    return (
      <div style={{ textAlign: "center" }}>
        <p>{time} </p>
        <button onClick={this.handleDecrement}>-</button>

        <span>{this.state.count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
