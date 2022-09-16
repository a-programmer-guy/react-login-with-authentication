import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../api/hooks/useAuth';

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  /* If the user is authenticated, show the routes available to
  an authenticated user as children of the outlet component.
  Otherwise redirect them to the login page and replace the
  their navigation history with the location they tried to
  access as an unauthenticated user, so they can be redirected
  to that URL once they successfully log in */

  return auth?.username ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
