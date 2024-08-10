import { LoginButton } from '@ether/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import './Login.scss';

export function Login() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/dashboard');
  };

  return (
    <div className="login">
      <div className="login__hero">hero</div>
    </div>
  );
}

export default Login;
