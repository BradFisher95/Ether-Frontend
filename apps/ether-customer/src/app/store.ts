import { configureStore } from '@reduxjs/toolkit';
import { themeAPISlice } from '@ether/dynamic-theme';

export const store = configureStore({
  reducer: {
    [themeAPISlice.reducerPath]: themeAPISlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(themeAPISlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
