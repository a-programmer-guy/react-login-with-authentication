import axios from '../axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  // Refresh token - with credentials allows us to use cookies
  // The cookie is secure and never seen inside the JS code
  const refresh = async () => {
    const response = await axios.get('/tokens', {
      withCredentials: true,
    });
    // prev uses the previous state
    // Replace the previous token with the newly refreshed token
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.token);
      return { ...prev, token: response.data.token };
    });
    return response.data.token;
  };
  return refresh;
};

export default useRefreshToken;
