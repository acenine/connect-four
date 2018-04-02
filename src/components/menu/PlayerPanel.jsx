import React from 'react';
import Input from './Input.jsx';
import Swatch from './Swatch.jsx';

class PlayerPanel extends React.Component {
  render() {
    var {player, setName, index} = this.props;
    return (
      <div className="container panel">
        {
          <Input
            placeholder={"Name"}
            value={player.name} // can do some toggle for value a placeholder with input and default value
            setName={this.setName.bind(this)}
          />
        }
        <Swatch color={player.color}/>
      </div>
    );
  }
  setName(value) {
    var {setName, index} = this.props;
    setName(index, value)
  }
}

export default PlayerPanel;


// when you click on a panel it becomes active,
//   the input field becomes editable and
//   if you click on a swatch in the palette, the panel swatch becomes that color
//     that color swatch is then disabled in the palette
// ** bonus : if you click anywhere outside of the panel it stops being active **
// needs a delete button too
