import React from 'react';
import PropTypes from 'prop-types';

class Swatch extends React.Component {
  render() {
    const color = this.props.color;
    return (
      <button className={`swatch ${color}`}>
      </button>
    );
  }
}

Swatch.propTypes = {
  color: PropTypes.string.isRequired,
}

export default Swatch;
