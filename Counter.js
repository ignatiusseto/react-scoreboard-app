import React from 'react';
import './Counter.css';



class Counter extends React.Component {
  render() {
    return <div className="counter">
        <button className="counter-action decrement" onClick={function() {this.props.onChange(-1);}} > - </button>
        <div className="counter-score"> {this.props.score} </div>
        <button className="counter-action increment" onClick={function() {this.props.onChange(1).bind(this);}} > + </button>
    </div>
  }
}

export default Counter
