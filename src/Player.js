import React from 'react';
import {Component} from 'react';
import './Player.css';
import Counter from './Counter';

class Player extends Component {
  render() {
    return (
      <div className="player">
        <div className="player-name">
            {this.props.name}
        </div>
        <div className="player-score">
          <Counter score = {this.props.score} onChange={this.props.onScoreChange} />
        </div>
      </div>
    )
  }
}

export default Player;
