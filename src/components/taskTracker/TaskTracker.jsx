import TaskHeader from './TaskHeader'
import Tasks from './Tasks'
import './tasktracker.css'
import AddTask from './AddTask'

const TaskTracker = ({tasks, onDelete, onToggle, onAdd }) => {
  return (
    <div className='task_container'>
      <TaskHeader />
      <AddTask onAdd={onAdd}/>
      {tasks.length > 0 ?
      <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle}/>
      :
      <div className='task'>No tasks available</div>}
    </div>
  )
}

export default TaskTracker