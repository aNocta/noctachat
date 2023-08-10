import { createSlice } from "@reduxjs/toolkit";

const currentUser = createSlice({
  name: "CurrentUserId",
  initialState: 2,
  reducers: {
    setCurrentUser(state, { payload }) {
      state = payload;
    },
  },
});

export default currentUser.reducer;
