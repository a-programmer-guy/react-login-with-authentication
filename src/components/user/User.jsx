import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const User = () => {
  // Access the user context value
  const user = useContext(UserContext);

  return <div>{user.username}</div>;
};

export default User;
