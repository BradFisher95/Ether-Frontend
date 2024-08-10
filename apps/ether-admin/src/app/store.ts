import { configureStore } from '@reduxjs/toolkit';
import { cmsApi, configApi } from '@ether/data-access';
import { authReducer } from '@ether/auth';

export const store = configureStore({
  reducer: {
    auth: authReducer,
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
