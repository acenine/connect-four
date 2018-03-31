

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [{name: 'Lucy', color:'blue'}, {name: 'Chad', color: 'red'}],
      boardSize: {width: 7, height: 6},
    };
  }
  // setName(index, name) {
  //   var {players} = this.state;
  //   players[index].name = name;
  //   this.setState({
  //     players: players,
  //   })
  // }
  render() {
    const {boardSize, players} = this.state;
    return (
      <div className="app container">
        <h1 className="title">Connect Four</h1>
        {
          // <Menu/>
          <Game
            players={players}
            width={boardSize.width}
            height={boardSize.height}
          />
        }
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


