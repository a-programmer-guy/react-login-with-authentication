import { useState } from "react"

import Header from './components/header/Header';
import Login from './components/login/Login';
import Navigation from './components/nav/Nav';
import Register from './components/register/Register'
import AddTask from "./components/taskTracker/AddTask";
import TaskHeader from './components/taskTracker/TaskHeader';
import Tasks from './components/taskTracker/Tasks';
import TaskTracker from './components/taskTracker/TaskTracker';
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "task 1",
      day: 'April 3rd at 2:30pm',
      reminder: false
    },
    {
      id: 2,
      text: "task 2",
      day: 'April 3rd at 2:30pm',
      reminder: false
    },
    {
      id: 3,
      text: "task 3",
      day: 'April 3rd at 2:30pm',
      reminder: false
    }
  ]
  )
  // Add a task
  const addTask = (task) => {
    console.log(task)
  }
  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // Set/Remove reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder } : task))
  }
  return (
    <div className="App">
      <Navigation />
      <Header title='Welcome' />
      <TaskTracker
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
        onAdd={addTask}
      />
      <Login />
      <Register />
    </div>
  );
}

export default App;
