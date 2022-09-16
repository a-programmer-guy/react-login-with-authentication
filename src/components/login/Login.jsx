import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './login.css';
import axios from '../../api/axios';
import useAuth from '../../api/hooks/useAuth';
const Login = () => {
  const LOGIN_URL = '/tokens';
  // Use the global useAuth hook to set authentication context
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  // References
  const errRef = useRef();
  const userRef = useRef();
  // State
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  // With an empty array, useEffect will only occur on initial render
  // Focus will be on the username input
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // If the user changes the username/password it will remove the error
  useEffect(() => {
    setErrMsg('');
  }, [username, password]);
  const [userFocus, setUserFocus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        {},
        // JSON.stringify({ username, password }),
        {
          auth: {
            username: username,
            password: password,
          },
        }
      );
      console.log(JSON.stringify(response?.data));
      console.log('tk: ', response.data);
      const token = response.data;
      setAuth({ username, password, token });
      setUser('');
      setPassword('');
      /* Redirect to the page the user was trying to access
         before they logged in */
      // navigate(from, { replace: true });
      navigate('/about');
    } catch (err) {
      if (!err?.response.status === null) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="Auth-form-title">Sign In</h1>
          <div className="form-group mt-3">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={username}
              required
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="sign_in_btn">
              Sign In
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="/forgot">password?</a>
            <a href="/register" className="register_link">
              Register
            </a>
          </p>
          <p className="forgot-password text-right mt-2"></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
