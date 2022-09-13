import React from 'react';
import Button from '../button/Button';
import Header from '../header/Header';
import './landing.css';
import { useNavigate, Navigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing_container">
      <Header title="Welcome" />
      <h5 className="landing_h5">
        Please login or create an account to continue
      </h5>
      <Button
        text="Login"
        name="login_btn"
        onClick={() => {
          navigate('/login');
        }}
      />
      <Button
        text="Register"
        name="register_btn"
        onClick={() => {
          navigate('/register');
        }}
      />
    </div>
  );
};

export default Landing;
