import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Landing from './components/landing/Landing';
import Layout from './components/Layout';
import ForgotPassword from './components/login/ForgotPassword';
import Login from './components/login/Login';
import Navigation from './components/nav/Nav';
import Register from './components/register/Register';
import TaskTracker from './components/taskTracker/TaskTracker';
import User from './components/user/User';
import Missing from './components/utility/Missing';
import Unauthorized from './components/utility/Unauthorized';

function App() {
  // Array of task objects
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'task 1',
      day: 'April 3rd at 2:30pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'task 2',
      day: 'April 3rd at 2:30pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'task 3',
      day: 'April 3rd at 2:30pm',
      reminder: false,
    },
  ]);

  // Add a task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    console.log(id);

    // Task object with id, and spread of other task properties
    const newTask = { id, ...task };

    // Pass in the array of existing tasks and add the newly created task
    setTasks([...tasks, newTask]);
  };
  // Delete a task
  const deleteTask = (id) => {
    // Filter out the task to be deleted from the list of tasks
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Set/Remove reminder
  const toggleReminder = (id) => {
    // Loop through the tasks, if task id matches, toggle the reminder property, otherise just leave the task as is
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Protected Routes - Protected by Require Auth component */}
          <Route element={<RequireAuth />}>
            <Route
              path="/tasks"
              element={
                <TaskTracker
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                  onAdd={addTask}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/user/:id" element={<User />} />
          </Route>
          {/* Catch All */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
