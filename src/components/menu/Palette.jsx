import React from 'react';
import Swatch from './Swatch.jsx';

class Palette extends React.Component {
  render() {
    var {colors, setColor} = this.props;
    return (
      <div className="container palette">
        {colors.map((color, i) => {
          return (
            <Swatch color={color} key={i} clickFn={() => {setColor(i)}}/>
          )
        })}
      </div>
    );
  }
};

export default Palette;
