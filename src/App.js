import { useState } from "react"

import Header from './components/header/Header';
import Login from './components/login/Login';
import Navigation from './components/nav/Nav';
import Register from './components/register/Register'
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
  return (
    <div className="App">
      <Navigation />
      <Header title='Welcome' />
      <TaskTracker tasks={tasks} />
      <Login />
      <Register />
    </div>
  );
}

export default App;
