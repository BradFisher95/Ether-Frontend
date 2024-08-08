import { Link } from 'react-router-dom';
import { AppRoutes } from '../../Routes';

export function NotFound() {
  return (
    <div>
      <p>NotFound</p>
      <Link to={AppRoutes.LOGIN}>Back To Login</Link>
    </div>
  );
}

export default NotFound;
