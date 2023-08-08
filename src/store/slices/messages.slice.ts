import { createSlice } from "@reduxjs/toolkit";
import { IMessage } from "../../types/ChatTypes";

interface IMessageState {
  messages: IMessage[];
}

const initialState: IMessageState = {
  messages: [
    {
      id: 0,
      author_id: 0,
      chat_id: 0,
      content: "This is text",
      time: "19:30",
    },
    {
      id: 1,
      author_id: 1,
      chat_id: 0,
      content: "Yes, this is text",
      time: "19:30",
    },
    {
      id: 2,
      author_id: 1,
      chat_id: 1,
      content: "Hello, world",
      time: "19:30",
    },
  ],
};

const messagesSlice = createSlice({
  name: "Messages",
  initialState,
  reducers: {
    addMessage: (store, action) => {
      console.log(action.payload.message.id);
      store.messages.push(action.payload.message);
    },
    removeMessage: (store, action) => {
      store.messages = store.messages.filter(
        (x: IMessage) => x.id !== action.payload.id
      );
    },
  },
});

export const { addMessage, removeMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
