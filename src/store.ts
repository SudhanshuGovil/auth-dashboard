import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./features/authentication/authentication.slice";

export const store = configureStore({
  reducer: {
    [authenticationSlice.name]: authenticationSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
