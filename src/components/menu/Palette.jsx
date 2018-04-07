import React from 'react';
import Swatch from './Swatch.jsx';

class Palette extends React.Component {
  render() {
    var {colors, setColor, usedColors} = this.props;
    return (
      <div className="container palette">
        {colors.map((color, i) => {
          var fade = usedColors.has(color);
          return (
            <Swatch
              color={color}
              key={i}
              clickFn={() => {!fade && setColor(i)}}
              className={fade && 'fade'}
            />
          )
        })}
      </div>
    );
  }
  chooseColor() {

  }
};

export default Palette;
