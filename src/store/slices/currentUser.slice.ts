import { createSlice } from "@reduxjs/toolkit";

const currentUser = createSlice({
  name: "CurrentUserId",
  initialState: 2,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      return payload.id;
    },
  },
});

export const { setCurrentUser } = currentUser.actions;
export default currentUser.reducer;
