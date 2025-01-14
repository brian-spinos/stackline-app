import { configureStore } from "@reduxjs/toolkit";

import exampleReducer from "./mainSlice";

const store = configureStore({
  reducer: {
    product: exampleReducer,
    // Add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
