import PropTypes from 'prop-types';
import './tasktracker.css';
import Button from '../button/Button';

const TaskHeader = ({ title, onAdd, showAdd }) => {
  return (
    <header className="task_header">
      <h1>{title}</h1>
      <Button
        text={showAdd ? 'Close' : 'Add'}
        color={showAdd ? 'red' : ''}
        onClick={onAdd}
        name="add_task_btn"
      />
    </header>
  );
};

TaskHeader.defaultProps = {
  title: 'Task Tracker',
};

TaskHeader.propTypes = {
  title: PropTypes.string,
};

export default TaskHeader;
