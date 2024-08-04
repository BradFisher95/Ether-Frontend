import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cmsApi = createApi({
  reducerPath: 'cmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1001',
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints: () => ({}), // Extended in /endpoints
});

export default cmsApi;
