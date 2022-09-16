import { useState, useEffect } from 'react';
import axios from '../../api/axios';
import useAuth from '../../api/hooks/useAuth';
import useRefreshToken from '../../api/hooks/useRefreshToken';
import Button from '../button/Button';

const Users = () => {
  const [users, setUsers] = useState();
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  // Abourt controller is used to cancel a request if the component unmounts
  // Empty dependency array so it loads on initial rendering
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axios.get('/users', {
          // signal will allow us to cancel the request
          signal: controller.signal,
        });
        console.log(response.data);
        // If ismounted is true, set users with the response data
        isMounted && setUsers(response.data.items);
      } catch (err) {}
    };

    getUsers();
    // Clean up function for useEffect runs when the component unmounts
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <article>
      <h2>User List for {auth.username}</h2>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users exist</p>
      )}
      <Button onClick={() => refresh()} text="Refresh" name="sign_up_btn" />
    </article>
  );
};

export default Users;
