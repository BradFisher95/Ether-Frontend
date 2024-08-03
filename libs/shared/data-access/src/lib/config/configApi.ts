import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const configApi = createApi({
  reducerPath: 'configApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1000',
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints: () => ({}), // Extended in /endpoints
});

export default configApi;
