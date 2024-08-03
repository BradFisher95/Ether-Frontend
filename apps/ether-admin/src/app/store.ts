import { configureStore } from '@reduxjs/toolkit';
import { configApi } from '@ether/data-access';

export const store = configureStore({
  reducer: {
    [configApi.reducerPath]: configApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(configApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
