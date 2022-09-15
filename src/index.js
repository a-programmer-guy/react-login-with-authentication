import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { UserContextProvider } from './contexts/UserContext';
import { AuthProvider } from './contexts/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
