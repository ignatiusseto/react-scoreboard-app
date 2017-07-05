import React from 'react';
import { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(){
    super();

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement(){
    this.props.onChange(-1);
  }

  increment(){
    this.props.onChange(+1);
  }

  render() {
    return(
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrement} > - </button>
        <div className="counter-score"> {this.props.score} </div>
        <button className="counter-action increment" onClick={this.increment} > + </button>
      </div>
    )
  }
}

export default Counter;
