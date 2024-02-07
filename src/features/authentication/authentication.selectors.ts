import { RootState } from "../../store";
import slice from "./authentication.slice";

export const selectSlice = (state: RootState) => state[slice.name];

export const selectToken = (state: RootState) => selectSlice(state).token;

export const selectIsAuthenticated = (state: RootState) =>
  selectSlice(state).isAuthenticated;
