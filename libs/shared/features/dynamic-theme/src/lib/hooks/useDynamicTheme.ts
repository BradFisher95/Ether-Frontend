import { useEffect, useState } from 'react';
import { camelToKebab } from '@ether/core';
import { Theme, useFetchThemeQuery } from '@ether/data-access';

export function useDynamicTheme(defaultTheme: 'dark' | 'light' = 'dark') {
  const [theme, setTheme] = useState(defaultTheme);
  const { data, isError, error } = useFetchThemeQuery(theme);

  useEffect(() => {
    if (data) {
      mapToCssVars(data);
    }
  }, [data]);

  if (isError) {
    console.error('Theme not found, using default theme.');
    console.error(error);
  }

  const updateTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const mapToCssVars = (theme: Theme) => {
    for (const styleKey in theme) {
      const kebabKey = `--${camelToKebab(styleKey)}`;
      const root = document.documentElement;
      root.style.setProperty(kebabKey, theme[styleKey]);
    }
  };

  return { theme, updateTheme };
}
