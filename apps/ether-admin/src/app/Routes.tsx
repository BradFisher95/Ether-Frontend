import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/not-found/NotFound';
import { ProtectedRoute } from '@ether/core';

export const AppRoutes = {
  ROOT: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  NOT_FOUND: '*',
};

export const AppRouter = createBrowserRouter([
  {
    path: AppRoutes.ROOT,
    element: <Navigate to={AppRoutes.LOGIN} />,
  },
  {
    path: AppRoutes.LOGIN,
    element: <Login />,
  },
  {
    path: AppRoutes.DASHBOARD,
    element: <ProtectedRoute element={<Dashboard />} />,
  },
  {
    path: AppRoutes.NOT_FOUND,
    element: <NotFound />,
  },
]);
