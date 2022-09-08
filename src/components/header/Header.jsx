import React from "react";
import PropTypes from "prop-types";
import "./header.css";
const Header = ({ title }) => {
  return (
    <header className="header_title">
      <h1>{title}</h1>
    </header>
  );
};
// Define default values if property is not passed
Header.defaultProps = {
  title: "Welcome",
};
// Define the data type for each property
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
