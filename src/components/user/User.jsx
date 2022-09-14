import { useState, useEffect } from 'react';

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const userData = await fetchUser();
      setUser(userData);
    };
    getUser();
  }, []);

  // Fetch user data
  const fetchUser = async () => {
    const res = await fetch('http://localhost:5000/api/users/3');
    const data = await res.json();
    return data;
  };

  return <div>{user.username}</div>;
};

export default User;
