import React from 'react';
import Swatch from './Swatch.jsx';

class Palette extends React.Component {
  render() {
    var colors = this.props.colors;
    return (
      <div className="container palette">
        {colors.map((color, i) => {
          return (
            <Swatch color={color} key={i}/>
          )
        })}
      </div>
    );
  }
};

export default Palette;
