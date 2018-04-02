

///////////////////////////////////////////////////////////////////// < ------ Break ------ > ////////////////////////////////////////////////////////////////////


// a Board has 7 Columns
// a Column has 6 Slots
// a piece can be placed in a Column if there is a free space (Column is not full)
// when a piece is placed in the selected column, the piece goes to the bottom most free space
// once 7 pieces are placed, it is necessary to check if there is a winner.
// if 42 pieces are placed the game ends either in a win or a draw

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//  --- Modules ---
import Game from './components/game/Game.jsx';
import Menu from './components/menu/Menu.jsx';

// [ {name: 'Lucy', color:'blue'}, {name: 'Chad', color: 'red'}, {name: 'Mark', color: 'green'}, {name: 'Faye', color: 'orange'} ]
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [ {name: 'Lucy', color:'blue'}, {name: 'Chad', color: 'red'}],
      boardSize: {width: 7, height: 6},
      colors: ['blue', 'red', 'green', 'orange', 'purple', 'black', 'white', 'cyan'],
      showGame: false,
    };
  }
  setName(index, name) {
    var {players} = this.state;
    players[index].name = name;
    this.setState({
      players: players,
    })
  }
  addPlayer() {
    var {players, colors} = this.state;
    if (players.length === 4) {
      return;
    }
    players.push({name: 'Name', color: colors[players.length]});
    this.setState({players})
  }
  toggleView() {
    var {showGame} = this.state;
    this.setState({
      showGame: !showGame,
    })
  }
  render() {
    const {boardSize, players, showGame} = this.state;
    return (
      <div className="app container">
        <h1 className="title">Connect Four</h1>
        {showGame ?
          <Game
            players={players}
            width={boardSize.width}
            height={boardSize.height}
            showMenu={this.toggleView.bind(this)}
          />
          :
          <Menu
            setName={this.setName.bind(this)}
            addPlayer={this.addPlayer.bind(this)}
            showGame={this.toggleView.bind(this)}
            players={this.state.players}
            colors={this.state.colors}
          />
        }
      </div>
    );
  }
}

// shows Menu first for players to choose their name and color
//   that gets saved in state.players
//   new game button resets board to initial
// i am thinking about putting the menu so that all four player spaces are displayed but the last two are disabled
// when you hover over that area, or perhaps just always, it says add player
//   when you click it, that becomes an active player module thus editable
//   then the delete button only appears after it has been activated

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


///////////////////////////////////////////////////////////////////// < ------ End ------ > ////////////////////////////////////////////////////////////////////


