import React from 'react';
import Button from '../Button';
import Header from '../header/Header';
import './landing.css';

const Landing = () => {
  return (
    <div className="landing_container">
      <Header title="Welcome" />
      <h5 className="landing_h5">
        Please login or create an account to continue
      </h5>
      <Button text="Login" name="login_btn" />
      <Button text="Register" name="register_btn" />
    </div>
  );
};

export default Landing;
