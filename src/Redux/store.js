import { configureStore } from '@reduxjs/toolkit';

import authSliceReducer from './Slices.js/AuthSlice';

const store = configureStore({
  reducer: {
    auth: authSliceReducer,

  },
  devTools: true,
});

export default store;