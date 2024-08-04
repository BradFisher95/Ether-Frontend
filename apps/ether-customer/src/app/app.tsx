import '@ether/styles';
import { Loader } from '@ether/ui';
import { useDynamicTheme } from '@ether/dynamic-theme';

export function App() {
  useDynamicTheme('dark');

  return (
    <div>
      <Loader></Loader>
    </div>
  );
}

export default App;
