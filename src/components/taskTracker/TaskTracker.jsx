import TaskHeader from './TaskHeader'
import Tasks from './Tasks'
import './tasktracker.css'

const TaskTracker = ({tasks}) => {
  return (
    <div className='task_container'>
      <TaskHeader />
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default TaskTracker