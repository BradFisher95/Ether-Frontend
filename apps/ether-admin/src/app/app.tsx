import { useDynamicTheme } from '@ether/dynamic-theme';
import '@ether/styles';
import { Loader } from '@ether/ui';

export function App() {
  useDynamicTheme();

  return (
    <div>
      <Loader></Loader>
    </div>
  );
}

export default App;
