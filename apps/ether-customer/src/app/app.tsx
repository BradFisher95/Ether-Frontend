import '@ether/styles';
import { useFetchThemeQuery } from '@ether/dynamic-theme';
import { useState } from 'react';

export function App() {
  const [theme, setTheme] = useState('dark');

  const { data, isLoading, isSuccess, isError } = useFetchThemeQuery(theme);

  let content;

  if (isLoading) {
    content = <div>Loading!</div>;
  } else if (isSuccess) {
    content = <div>Retrieved theme successfully.</div>;
  } else if (isError) {
    content = <div>Error!</div>;
  }

  return (
    <div>
      <p>Customer</p>
      <br />
      <div>
        <p>Theme to fetch:</p>
        <select
          value={theme}
          onChange={(e) => setTheme(String(e.target.value))}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="crazy">Crazy</option>
        </select>
      </div>
      <br />
      {content}
      <br />
      <div>Theme: {data?.backgroundColor};</div>
    </div>
  );
}

export default App;
