import React from 'react';
import Input from './Input.jsx';
import Swatch from './Swatch.jsx';

class PlayerPanel extends React.Component {
  render() {
    var player = this.props.player;
    return (
      <div className="container panel">
        {player.name}
        <Swatch color={player.color}/>
      </div>
    );
  }
}

export default PlayerPanel;


// when you click on a panel it becomes active,
//   the input field becomes editable and
//   if you click on a swatch in the palette, the panel swatch becomes that color
//     that color swatch is then disabled in the palette
// ** bonus : if you click anywhere outside of the panel it stops being active **
// needs a delete button too
