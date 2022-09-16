import { createContext, useState } from 'react';

const AuthContext = createContext({});
// Children represent the nested components inside the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
