import Header from './components/header/Header';
import Login from './components/login/Login';
import Navigation from './components/nav/Nav';
import Register from './components/register/Register'
import TaskHeader from './components/taskTracker/TaskHeader';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Header title='Welcome'/>
      <TaskHeader title='Task Tracker'/>
      <Login />
      <Register />
    </div>
  );
}

export default App;
