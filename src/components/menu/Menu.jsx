import React from 'react';
import Palette from './Palette.jsx';
import PanelView from './players/PanelView.jsx';
import Button from '../Button.jsx';

class Menu extends React.Component {
  render() {
    var {players, colors, showGame, setName, toggleActive, setSelected, setColor, maxPlayers, usedColors} = this.props;
    return (
      <div className="container">
        <PanelView
          players={players}
          setName={setName}
          toggleActive={toggleActive}
          setSelected={setSelected}
          maxPlayers={maxPlayers}
        />
        <Palette
          colors={colors}
          setColor={setColor}
          usedColors={usedColors}
        />
        <div className="menu buttons container">
          <Button
            value="New Game"
            clickFn={showGame}
          />
        </div>
      </div>
    );
  }
}

export default Menu;
