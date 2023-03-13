import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      if (state !== null && state !== undefined) {
        state.loading = true;
      }
    },
    loginSuccess: (state, action) => {
      if (state !== null && state !== undefined) {
        state.loading = false;
        state.currentUser = action.payload._id;
      }
    },
    loginFailure: (state) => {
      if (state !== null && state !== undefined) {
        state.loading = false;
        state.error = true;
      }
    },
    logout: (state) => {
      if (state !== null && state !== undefined) {
        state.currentUser = null;
        state.loading = false;
        state.error = false;
      }
    },
    subscription: (state, action) => {
      if (
        state !== null &&
        state !== undefined &&
        state.currentUser !== null &&
        state.currentUser !== undefined
      ) {
        if (state.currentUser.subscribedUsers.includes(action.payload)) {
          state.currentUser.subscribedUsers.splice(
            state.currentUser.subscribedUsers.findIndex(
              (channelId) => channelId === action.payload
            ),
            1
          );
        } else {
          state.currentUser.subscribedUsers.push(action.payload);
        }
      }
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, subscription } =
  userSlice.actions;

export default userSlice.reducer;
