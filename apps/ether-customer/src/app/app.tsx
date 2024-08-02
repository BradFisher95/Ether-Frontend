import { Loader } from '@ether/ui';
import { useDynamicTheme } from '@ether/dynamic-theme';
import '@ether/styles';

export function App() {
  useDynamicTheme();

  return (
    <div>
      <Loader></Loader>
    </div>
  );
}

export default App;
