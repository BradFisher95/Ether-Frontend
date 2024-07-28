import { useEffect, useState } from 'react';
import { useFetchThemeQuery, Theme } from './slices/themeSlice';
import { camelToKebab } from '@ether/core';

export function DynamicTheme() {
  const [theme, setTheme] = useState('dark');
  const { data } = useFetchThemeQuery(theme);

  useEffect(() => {
    if (data) {
      mapToCssVars(data);
    }
  });

  const updateTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  const mapToCssVars = (theme: Theme) => {
    for (const styleKey in theme) {
      const snakeKey = `--${camelToKebab(styleKey)}`;
      const root = document.documentElement;
      root.style.setProperty(snakeKey, data[styleKey]);
    }
  };

  return (
    <div>
      <h1>Theme: {data?.backgroundColor}</h1>
      <button onClick={updateTheme}>Swap Theme</button>
    </div>
  );
}

export default DynamicTheme;
