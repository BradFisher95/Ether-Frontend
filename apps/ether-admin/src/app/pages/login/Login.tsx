import { LoginButton } from '@ether/auth';
import { Navigate, useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/dashboard');
  };

  return <div className="login-container"></div>;
}

export default Login;
