import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Header from './Header';
import Player from './Player';

var PLAYERS = [
  {
      name: "Jim Hoskins",
      score: 31,
      id: 1,
  },
  {
      name: "Bob Hope",
      score: 31,
      id: 2,
  },
  {
      name: "Andrew Chalkey",
      score: 32,
      id: 3,
  },
]

var Application = React.createClass({

    getDefaultProps: function() {
        return ({
            title: "Scoreboard",
        }
    )},

    getInitialState: function() {
        return {
            players: this.props.initialPlayers,
        };
    },

    onScoreChange: function(index, delta) {
        this.state.players[index].score += delta;
        this.setState(this.state);
    },

    render() {
      return (
        <div className="scoreboard">
            <Header title={this.props.title} />

            <div className="players">
            {this.state.players.map(function(player, index) {
            return (
                <Player
                onScoreChange={function(delta) {this.onScoreChange(index , delta)}.bind(this)}
                name={player.name}
                score={player.score}
                key={player.id} />
            );
            }.bind(this))}
            </div>
        </div>
    );
}
});

/* you'll notice we defined our PropTypes by assigning to Application.propTypes with a lower case p for our application but
our type definitions are on React.PropTypes with a capital p. That's something to just take a note of.*/
ReactDOM.render(<Application initialPlayers={PLAYERS} />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
