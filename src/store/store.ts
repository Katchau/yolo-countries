import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/slices';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;