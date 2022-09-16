import React from 'react';
import { Link } from 'react-router-dom';
import Users from './Users';

const UsersPage = () => {
  return (
    <section>
      <h1>Users Page</h1>
      <br />
      <Users />
      <br />
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default UsersPage;
