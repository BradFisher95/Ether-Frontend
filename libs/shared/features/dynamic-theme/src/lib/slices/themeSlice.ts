import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Theme {
  backgroundColor: string;
  panelColor: string;
  borderColor: string;
  fontColor: string;
  primaryColor: string;
  primaryHoverColor: string;
  accentColor: string;
  errorColor: string;
  placeholderText: string;
  disabledColor: string;
}

export const themeAPISlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1000',
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchTheme: builder.query<Theme, string | void>({
        query(theme = 'light') {
          return `/theme?theme=${theme}`;
        },
      }),
    };
  },
});

export const { useFetchThemeQuery } = themeAPISlice;
