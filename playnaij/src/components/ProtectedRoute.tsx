import { JSX } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; // or check token

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
