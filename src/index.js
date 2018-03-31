

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

class App extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      players: [{name: 'Lucy', color:'blue'}, {name: 'Chad', color: 'red'}],
      board: Array(7).fill(Array(6).fill(null)),
    }
  }
  newGame() {
    this.setState({
      board: Array(7).fill(Array(6).fill(null)),
    })
  }
  setName(index, name) {
    var {players} = this.state;
    players[index].name = name;
    this.setState({

    })
  }
  render() {
    return (
      <div className="app container">
        <h1 className="title">Connect Four</h1>
        {<Menu/> || <Game players={this.state.players} columns={this.state.board} newGame={this.newGame}/>}
      </div>
    );
  }
}

// shows Menu first for players to choose their name and color
//   that gets saved in state.players
//   new game button resets board to initial


// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


///////////////////////////////////////////////////////////////////// < ------ End ------ > ////////////////////////////////////////////////////////////////////


