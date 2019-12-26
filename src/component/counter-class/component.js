import React, { Component } from 'react';

class Counterd extends Component {
  state = {
    number: 100
  };
  tambah = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  kurang = () => {
    this.setState({
      number: this.state.number - 1
    });
  };
  bagi = () => {
    this.setState({
      number: this.state.number / 2
    });
  };
  kali = () => {
    this.setState({
      number: this.state.number * 2
    });
  };
  render() {
    return (
      <div>
        <h1>hallo</h1>
        <h1>{this.state.number}</h1>
        <div>
          <button onClick={this.tambah}>+</button>
          <button onClick={this.kurang}>-</button>
          <button onClick={this.bagi}>/</button>
          <button onClick={this.kali}>*</button>
        </div>
      </div>
    );
  }
}

export default Counterd;
