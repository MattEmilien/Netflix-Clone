import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export interface RootState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state: UserState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = null;
    },
    setError: (state: UserState, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export all actions

export const { setUser, setLoading, setError } = userSlice.actions;

// Export the reducer

export default userSlice.reducer;
