import React from "react";
import PropTypes from "prop-types";
import "./tasktracker.css";
import Button from "../Button";

const TaskHeader = ({ title }) => {

  const handleClick = () => {
    console.log('Click!')
  }

  return (
    <div className="task_container">
      <header className="task_header">
        <h1>{title}</h1>
        <Button name="add_task_btn" text="Add" onClick={handleClick} />
      </header>
    </div>
  );
};

TaskHeader.defaultProps = {
  title: "Task Tracker",
};

TaskHeader.propTypes = {
  title: PropTypes.string
};

export default TaskHeader;