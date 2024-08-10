import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  element: JSX.Element;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const isAuthenticated = useSelector(
    (state: Partial<{ auth: { isAuthenticated: boolean } }>) =>
      state?.auth?.isAuthenticated
  );

  if (!isAuthenticated) {
    console.error('Returning to login, unauthenticated');
  }

  return isAuthenticated ? element : <Navigate to="/login" />;
};
