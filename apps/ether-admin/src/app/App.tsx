import '@ether/styles';
import { useDynamicTheme } from '@ether/dynamic-theme';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './Routes';

export function App() {
  useDynamicTheme();

  return <RouterProvider router={AppRouter}></RouterProvider>;
}

export default App;
