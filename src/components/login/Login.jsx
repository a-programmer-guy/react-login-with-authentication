import { useRef, useState, useEffect } from 'react';
import './login.css';
import ForgotPassword from './ForgotPassword';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [forgotPassword, setForgotPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h1 className="Auth-form-title">Sign In</h1>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailRef}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
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
              ref={passwordRef}
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
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
