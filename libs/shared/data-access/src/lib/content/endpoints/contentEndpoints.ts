import { cmsApi } from '../cmsApi';
import { Content } from '../types/content';

export const contentApi = cmsApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchContent: builder.query<{ data: Content[] }, string | void>({
      query(app: string) {
        return `/content?content=${app}`;
      },
    }),
  }),
  overrideExisting: false,
});

export const { useFetchContentQuery } = contentApi;
