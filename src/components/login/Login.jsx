import { useRef, useState, useEffect, useContext } from 'react';
import './login.css';
import ForgotPassword from './ForgotPassword';
import axios from '../../api/axios';
import AuthContext from '../../contexts/AuthProvider';

const Login = () => {
  const LOGIN_URL = '/tokens';
  const { setAuth } = useContext(AuthContext);

  // References
  const errRef = useRef();
  const userRef = useRef();
  // State
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  // With an empty array, useEffect will only occur on load
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // If the user changes the username/password it will remove the error
  useEffect(() => {
    setErrMsg('');
  }, [username, password]);
  const [userFocus, setUserFocus] = useState(false);

  const [passwordFocus, setPasswordFocus] = useState(false);

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
      setAuth(username, password, response.data.token);
      setUser('');
      setPassword('');
      console.log(response?.data);
      console.log('Token!!: ', response?.data.token);
      console.log(JSON.stringify(response));
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
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
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
