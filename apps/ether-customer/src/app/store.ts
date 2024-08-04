import { configureStore } from '@reduxjs/toolkit';
import { cmsApi, configApi } from '@ether/data-access';

export const store = configureStore({
  reducer: {
    [configApi.reducerPath]: configApi.reducer,
    [cmsApi.reducerPath]: cmsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      configApi.middleware,
      cmsApi.middleware
    );
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
