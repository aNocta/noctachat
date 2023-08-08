import { createSlice } from "@reduxjs/toolkit";
import { IChat } from "../../types/ChatTypes";

interface IChatState {
  chats: IChat[];
}

const initialState: IChatState = {
  chats: [
    {
      id: 0,
      creator_id: 0,
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      title: "SomeChat",
      lastMessage: "Last message",
      lastMessageTime: "18:30",
      members: [0, 1],
    },
    {
      id: 1,
      creator_id: 1,
      imgSrc:
        "https://i0.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1&w=640",
      title: "JS chat",
      lastMessage: "First message",
      lastMessageTime: "19:30",
      members: [0, 1],
    },
  ],
};

const chatSlice = createSlice({
  name: "ChatSlice",
  initialState,
  reducers: {
    addChat: (store, action) => {
      store.chats.push(action.payload.chat);
    },
    removeChat: (store, action) => {
      store.chats = store.chats.filter((x) => x.id == action.payload.id);
    },
  },
});

export const { addChat, removeChat } = chatSlice.actions;
export default chatSlice.reducer;
