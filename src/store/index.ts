import { configureStore } from "@reduxjs/toolkit";
import chat from "./slices/chat.slice";
import messages from "./slices/messages.slice";
import user from "./slices/user.slice";
import currentMessage from "./slices/currentMessage.slice";
import currentUser from "./slices/currentUser.slice";

export * from "./slices/chat.slice";
export * from "./slices/messages.slice";
export * from "./slices/currentMessage.slice";
export * from "./slices/currentUser.slice";

export const store = configureStore({
  reducer: {
    chat: chat,
    messages: messages,
    users: user,
    currentMessage: currentMessage,
    currentUser: currentUser,
  },
});
