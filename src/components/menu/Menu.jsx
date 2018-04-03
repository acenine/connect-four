import React from 'react';
import Palette from './Palette.jsx';
import PanelView from './PanelView.jsx';
import Button from '../Button.jsx';

class Menu extends React.Component {
  render() {
    var {players, colors, showGame, setName, toggleActive, setSelected, setColor} = this.props;
    return (
      <div className="container">
        <div className="menu buttons container">
          <Button
            value="New Game"
            clickFn={showGame}
          />
        </div>
        <PanelView
          players={players}
          setName={setName}
          toggleActive={toggleActive}
          setSelected={setSelected}
        />
        <Palette
          colors={colors}
          setColor={setColor}
        />
      </div>
    );
  }
}

export default Menu;

// either i will add a board size selector or if the number of players is increased, the size increases automatically. perhaps both
// different player numbers will default to certain board sizes, but players can manually set the board size too.
