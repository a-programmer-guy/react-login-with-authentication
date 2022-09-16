import React from 'react';
import useAuth from '../../api/hooks/useAuth';

const About = () => {
  const { auth } = useAuth();
  return (
    <div>
      <h1>About {auth.username}</h1>
    </div>
  );
};

export default About;
