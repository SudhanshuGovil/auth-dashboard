import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "./authentication.asyncActions";

const initialState = {
  token: "",
  isAuthenticated: false,
};

export default createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = "";
    },
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      if (!action.payload || action.payload.error) return;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      if (!action.payload || action.payload.error) return;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    });
  },
});
