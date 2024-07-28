import { useEffect, useState } from 'react';
import { useFetchThemeQuery } from './slices/themeSlice';

export function DynamicTheme() {
  const [theme, setTheme] = useState('dark');
  const { data } = useFetchThemeQuery(theme);

  useEffect(() => {
    if (data) {
      const root = document.querySelector(':root') as any;
      root.style.setProperty('--background-color', data.backgroundColor);
    }
  });

  const updateTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <div>
      <h1>Theme: {data?.backgroundColor}</h1>
      <button onClick={updateTheme}>Swap Theme</button>
    </div>
  );
}

export default DynamicTheme;
