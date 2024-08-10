import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../authSlice';

const LoginButton: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: Partial<{ auth: { isAuthenticated: boolean } }>) =>
      state?.auth?.isAuthenticated
  );
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button onClick={isAuthenticated ? handleLogout : handleLogin}>
      {isAuthenticated ? 'Logout' : 'Login'}
    </button>
  );
};

export default LoginButton;
