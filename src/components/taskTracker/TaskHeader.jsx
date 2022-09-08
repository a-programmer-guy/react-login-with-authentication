import React from "react";
import PropTypes from "prop-types";
const TaskHeader = ({ title }) => {
  return (
    <header className="task_header">
      <h1>{title}</h1>
    </header>
  );
};

TaskHeader.defaultProps = {
  title: "Task Tracker",
};

TaskHeader.propTypes = {
  title: PropTypes.string,
};

export default TaskHeader;
