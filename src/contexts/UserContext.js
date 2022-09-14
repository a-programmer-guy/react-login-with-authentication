import { createContext, useState, useEffect } from 'react';

// Create the user context
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState('');

  // Fetch user data
  const fetchUser = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/users/1');
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const userData = await fetchUser();
      setUser(userData);
    };
    getUser();
  }, []);

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
