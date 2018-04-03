import React from 'react';
import PlayerPanel from './PlayerPanel.jsx';

class PanelView extends React.Component {
  render() {
    const {players, setName, toggleActive, setSelected} = this.props;
    return (
      <div className="panels container">
        {players.map((player, i) => {
          return (
            <PlayerPanel
              key={i}
              index={i}
              player={player}
              setName={setName}
              toggleActive={toggleActive}
              setSelected={setSelected}
            />);
        })}
      </div>
    );
  }
}

export default PanelView;
