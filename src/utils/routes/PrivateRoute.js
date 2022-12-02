import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn,selectIsRefreshing } from '../../redux/Auth/authSelectors';
import { useSelector } from 'react-redux';


export const PublicRoute=({ children })=> {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  
  return isLoggedIn ? <Navigate to={'/'} /> : children;
}
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
