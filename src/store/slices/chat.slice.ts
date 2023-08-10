import { createSlice } from "@reduxjs/toolkit";
import { IChat } from "../../types/ChatTypes";
import { addMessage } from "./messages.slice";

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
      members: [0, 1, 2],
    },
    {
      id: 2,
      creator_id: 0,
      imgSrc:
        "https://i0.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1&w=640",
      title: "General chat",
      members: [0, 1, 2],
    },
  ],
};

const chatSlice = createSlice({
  name: "ChatSlice",
  initialState,
  reducers: {
    addChat: (store, { payload }) => {
      store.chats.push(payload);
    },
    removeChat: (store, action) => {
      store.chats = store.chats.filter((x) => x.id == action.payload.id);
    },
    kickMember: (store, { payload }) => {
      const chatId = payload.chatId;
      const currentChat = store.chats.filter((x: IChat) => x.id === chatId)[0];
      const memberId = payload.memberId;

      currentChat.members = currentChat.members.filter((x) => x !== memberId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addMessage, (state, { payload }) => {
      const chatId = payload.message.chat_id;
      const currentChatMembers = state.chats.filter(
        (x: IChat) => x.id === chatId
      )[0].members;
      const authorId = payload.message.author_id;
      if (!currentChatMembers.some((val) => val == authorId))
        currentChatMembers.push(authorId);
    });
  },
});

export const { addChat, removeChat, kickMember } = chatSlice.actions;
export default chatSlice.reducer;
