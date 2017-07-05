import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
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

// function Header(props) {
//     return (
//         <div className="header">
//             <h1>{props.title}</h1>
//         </div>
//     );
// }

// Header.propTypes = {
//     title: React.PropTypes.string.isRequired,
// };



// function Counter(props) {
//     return (
//         <div className="counter">
//             <button className="counter-action decrement" onClick={function() {props.onChange(-1);}} > - </button>
//             <div className="counter-score"> {props.score} </div>
//             <button className="counter-action increment" onClick={function() {props.onChange(1);}} > + </button>
//         </div>
//     );
// }

// Counter.propTypes = {
//     score: React.PropTypes.number.isRequired,
//     onChange: React.PropTypes.func.isRequired,
// }

// function Player(props) {
//     return (
//     <div className="player">
//             <div className="player-name">
//                 {props.name}
//             </div>
//             <div className="player-score">
//             <Counter score = {props.score} onChange={props.onScoreChange} />
//             </div>
//         </div>
//     );
// }
//
// /* Now since we've created new properties for our player, we wanna setup the prop types. */

// Player.propTypes = {
// name: React.PropTypes.string.isRequired,
// score: React.PropTypes.number.isRequired,
// onScoreChange: React.PropTypes.func.isRequired,
// };

var Application = React.createClass({
    // propTypes: {
    //     title: React.PropTypes.string.isRequired,
    //     /* less specific version:       players: React.PropTypes.array.isRequired, */
    //     /* slightly more specific:      players: React.PropTypes.arrayOf(React.PropTypes.object).isRequired, */
    //     initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
    //     name: React.PropTypes.string.isRequired,
    //     score: React.PropTypes.number.isRequired,
    //     id: React.PropTypes.number.isRequired,
    //     })).isRequired,
    // },

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
        console.log('onScoreChange', index, delta);
        this.state.players[index].score += delta;
        this.setState(this.state);
    },

    render: function() {
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
