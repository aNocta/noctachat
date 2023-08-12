import React from "react";
import { Link } from "react-router-dom";
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
      <Link
        to="/"
        className="bg-blue-400 text-white font-bold p-[1vmin] rounded-xl ml-5 duration-200 hover:bg-blue-500 block md:hidden"
      >
        Назад
      </Link>
      <ChatHeaderBar
        setSearchVisibility={setSearchVisibility}
        setUserListVisibility={setUserListVisibility}
      />
    </div>
  );
};

export { ChatHeader };
