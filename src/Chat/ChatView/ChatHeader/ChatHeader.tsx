import React from "react";
import { IChatListItemProperties } from "../../ChatList/ChatListItem";
import ChatHeaderBar from "./ChatHeaderBar";
import { ChatHeaderInfo } from "./ChatHeaderInfo";

interface IChatHeaderProps {
  setUserListVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  currentChat: IChatListItemProperties;
}

const ChatHeader = ({
  currentChat,
  setSearchVisibility,
  setUserListVisibility,
}: IChatHeaderProps) => {
  return (
    <div className="bg-gray-800 p-[1vmin] flex justify-between">
      <ChatHeaderInfo
        chatName={currentChat.title}
        imgSrc={currentChat.imgSrc}
      />
      <ChatHeaderBar
        setSearchVisibility={setSearchVisibility}
        setUserListVisibility={setUserListVisibility}
      />
    </div>
  );
};

export { ChatHeader };
