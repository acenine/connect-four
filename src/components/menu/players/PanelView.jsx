import React from 'react';
import PlayerPanel from './PlayerPanel.jsx';
import AddPlayer from './AddPlayer.jsx'

class PanelView extends React.Component {
  render() {
    const {players, setName, toggleActive, setSelected} = this.props;
    return (
      <div className="panels container">
        {players.map((player, i) => {
          return (
            player.isActive ?
              <PlayerPanel
                key={i}
                index={i}
                player={player}
                setName={setName}
                toggleActive={toggleActive}
                setSelected={setSelected}
              />
            :
              <AddPlayer
                key={i}
                index={i}
                player={player}
                toggleActive={toggleActive}
              />
          );
        })}
      </div>
    );
  }
}

export default PanelView;
