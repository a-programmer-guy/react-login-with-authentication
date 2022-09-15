import { useRef, useState } from 'react';
import './login.css';

const ForgotPassword = () => {
  const emailRef = useRef();

  const [email, setEmail] = useState('');
  const [emailFocus, setEmailFocus] = useState(true);

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h1 className="Auth-form-title">Forgot Password</h1>
          <small>Please enter your email for further instructions</small>
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
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="sign_in_btn">
                Send Email
              </button>
              <p className="forgot-password text-right mt-2">
                Back to <a href="/login">login</a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
