import { configApi } from '../configApi';
import { Theme } from '../types/theme';

export const themeApi = configApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchTheme: builder.query<Theme, string | void>({
      query(theme = 'light') {
        return `/theme?theme=${theme}`;
      },
    }),
  }),
  overrideExisting: false,
});

export const { useFetchThemeQuery } = themeApi;
