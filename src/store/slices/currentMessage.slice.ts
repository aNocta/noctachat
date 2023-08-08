import { createSlice } from "@reduxjs/toolkit";

interface ICurrentMessageState {
  message_id: number;
}

const initialState: ICurrentMessageState = {
  message_id: 0,
};

const currentMessageSlice = createSlice({
  name: "Current message",
  initialState,
  reducers: {
    setCurrentMessageId: (state, action) => {
      state.message_id = action.payload.id;
    },
  },
});

export const { setCurrentMessageId } = currentMessageSlice.actions;
export default currentMessageSlice.reducer;
