import React from 'react';
import Input from '../Input.jsx';
import Swatch from '../Swatch.jsx';
import AddPlayer from './AddPlayer.jsx'
import Button from '../../Button.jsx';

class PlayerPanel extends React.Component {
  render() {
    var {player, index, toggleActive, setSelected} = this.props;
    var seen = index > 1 ? 'show' : 'hide';
    return (
      <div className="container panel">
        {<Button
          className={"delete " + seen}
          clickFn={() => toggleActive(index)}
          value='x'
        />}
        <Input
          placeholder={"Name"}
          value={player.name} // can do some toggle for value a placeholder with input and default value
          setName={this.setName.bind(this)}
        />
        <Swatch
          color={player.color}
          clickFn={() => {setSelected(index)}}
        />
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
