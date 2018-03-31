import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  return (
    <button className={`button ${props.className}`} onClick={props.clickFn}>
      {props.value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  clickFn: PropTypes.func,
};

export default Button;
