import { createSlice } from "@reduxjs/toolkit";

export const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: {
    role: null,
    current_period_start: null,
    current_period_end: null,
  },
  reducers: {
    setSubscription: (state, action) => {
      state.role = action.payload.role;
      state.current_period_start = action.payload.current_period_start;
      state.current_period_end = action.payload.current_period_end;
    },
  },
});

export const { setSubscription } = subscriptionSlice.actions;

export const getSubscription = (state) => state.subscription;

export default subscriptionSlice.reducer;
