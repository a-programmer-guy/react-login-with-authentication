import { useState } from 'react';
import TaskHeader from './TaskHeader';
import Tasks from './Tasks';
import './tasktracker.css';
import AddTask from './AddTask';

const TaskTracker = ({ tasks, onDelete, onToggle, onAdd }) => {

    // Toggle add task form
    const [showAddTask, setShowAddTask] = useState(false)

  return (
    <div className="task_container">
      <TaskHeader onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={onAdd} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
      ) : (
        <div className="task">No tasks available</div>
      )}
    </div>
  );
};

export default TaskTracker;
