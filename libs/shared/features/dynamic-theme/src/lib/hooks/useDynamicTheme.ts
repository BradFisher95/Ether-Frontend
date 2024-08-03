import { useEffect, useState } from 'react';
import { camelToKebab } from '@ether/core';
import { Theme, useFetchThemeQuery } from '@ether/data-access';

export function useDynamicTheme() {
  const [theme, setTheme] = useState('dark');
  const { data } = useFetchThemeQuery(theme);

  useEffect(() => {
    if (data) {
      mapToCssVars(data);
    }
  }, [data]);

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
