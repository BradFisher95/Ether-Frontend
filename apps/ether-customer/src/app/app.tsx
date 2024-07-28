import { useDynamicTheme } from '@ether/dynamic-theme';
import '@ether/styles';

export function App() {
  useDynamicTheme();

  return (
    <div>
      <h1>Customer</h1>
    </div>
  );
}

export default App;
