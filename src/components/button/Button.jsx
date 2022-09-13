import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ color, text, name, onClick }) => {
  return (
    <button
      color={color}
      className={name}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'primary',
  name: 'btn',
  text: 'Submit',
};

Button.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
