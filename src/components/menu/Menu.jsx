import React from 'react';
import Palette from './Palette.jsx';
import PlayerPanel from './PlayerPanel.jsx';
import Button from '../Button.jsx';

class Menu extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   };
  // }
  render() {
    var {players, colors, addPlayer, showGame, setName} = this.props;
    return (
      <div className="container">
        <div className="menu buttons container">
          <Button
            value="Add Player"
            clickFn={addPlayer}
          />
          <Button
            value="New Game"
            clickFn={showGame}
          />
        </div>
        <div className="panels container">
          {players.map((player, i) => {
            return (
              <PlayerPanel
                key={i}
                index={i}
                player={player}
                setName={setName}
              />);
          })}
        </div>
        <Palette colors={colors}/>
      </div>
    );
  }
}

export default Menu;

// either i will add a board size selector or if the number of players is increased, the size increases automatically. perhaps both
// different player numbers will default to certain board sizes, but players can manually set the board size too.
