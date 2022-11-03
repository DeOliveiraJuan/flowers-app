import { Navigate } from "react-router-dom";
import { useAuthContext } from '../../contexts/AuthContext';

const ProtectedRoute = ({ children, onlyAdmin }) => {
  const { user, isAuthFetched } = useAuthContext()

  if (isAuthFetched && !user) {
    return <Navigate to="/login" replace />;
  }

  if (onlyAdmin && !user.isAdmin) {
    return <Navigate to="/users" replace />;
  }

  return children;
};

export default ProtectedRoute;