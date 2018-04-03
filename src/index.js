

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
      players: [{name: '', color: '', isActive: true},
                {name: '', color: '', isActive: true},
                {name: '', color: '', isActive: false},
                {name: '', color: '', isActive: false}],
      boardSize: {width: 7, height: 6},
      colors: ['blue', 'red', 'green', 'orange', 'purple', 'black', 'white', 'cyan'],
      showGame: false,
      selected: -1,
    };
  }
  setName(index, name) {
    var {players} = this.state;
    players[index].name = name;
    this.setState({
      players: players,
    })
  }
  setColor(index) {
    var {players, colors, selected} = this.state;
    if (selected < 0) {
      return;
    }
    players[selected].color = colors[index];
    this.setState({players})
  }
  setSelected(index) {
    this.setState({
      selected: index,
    });
  }
  toggleActivePlayer(index) {
    var {players} = this.state;
    players[index].isActive = !players[index].isActive;
    this.setState({players});
  }
  toggleView() {
    this.setState({
      showGame: !this.state.showGame,
    })
  }
  render() {
    const {boardSize, players, showGame, colors} = this.state;
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
            toggleActive={this.toggleActivePlayer.bind(this)}
            showGame={this.toggleView.bind(this)}
            setColor={this.setColor.bind(this)}
            setSelected={this.setSelected.bind(this)}
            players={players}
            colors={colors}
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


