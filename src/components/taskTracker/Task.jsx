import { FaTimes } from "react-icons/fa"
// Change class name with doubleClick -  toggleReminder
// Delete a task by clicking on red X. Both functions are passed from global level in App.js
const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
          <FaTimes style={{color: 'red'}}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <small>{task.day}</small>
    </div>
  )
}

export default Task