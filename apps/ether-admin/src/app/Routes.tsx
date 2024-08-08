import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/not-found/NotFound';

export const AppRoutes = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
};

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={AppRoutes.LOGIN} />,
  },
  {
    path: AppRoutes.LOGIN,
    element: <Login />,
  },
  {
    path: AppRoutes.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
