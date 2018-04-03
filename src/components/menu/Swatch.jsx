import React from 'react';
import PropTypes from 'prop-types';

class Swatch extends React.Component {
  render() {
    const {color, clickFn, className} = this.props;
    return (
      <button className={`swatch ${color} ${className}`} onClick={clickFn}>
      </button>
    );
  }
}


export default Swatch;
