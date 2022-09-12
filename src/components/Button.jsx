import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text, name, onClick }) => {
  return (
    <button
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
  name: 'btn btn-primary',
  text: 'Submit',
};

Button.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
