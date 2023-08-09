import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { IMessage, IUser } from "../../../types/ChatTypes";
import { IChatListItemProperties } from "./ChatListItemProperties";
import "./item.scss";

const ChatListItem = ({
  id = 0,
  imgSrc,
  title,
}: IChatListItemProperties): JSX.Element => {
  const messages = useSelector((state: any) => state.messages.messages).filter(
    (x: IMessage) => x.chat_id === id
  );
  let lastMessage = messages[messages.length - 1];
  let lastMessageTime = lastMessage.time;
  useEffect(() => {
    lastMessage = messages[messages.length - 1];
    lastMessageTime = lastMessage.time;
  }, [messages]);
  const currentUser: IUser = useSelector(
    (state: any) => state.users.users
  ).filter((x: IUser) => x.id === lastMessage.author_id)[0];
  return (
    <NavLink to={`/chat/${id}`}>
      <div className="flex box-border p-[1vmin] hover:cursor-pointer hover:bg-gray-700 duration-200 chatListItem">
        <img src={imgSrc} className="w-[15%] h-auto" />
        <div className="flex flex-col justify-between w-full ml-[5%]">
          <div className="flex justify-between">
            <h4 className="text-white text-xl">{title}</h4>
            <span className="text-gray-300 text-xl">{lastMessageTime}</span>
          </div>
          <span className="text-gray-300 text-lg">
            <b>{currentUser.name}</b>:{" "}
            {lastMessage.content.length > 20
              ? `${lastMessage.content.substring(0, 20)}...`
              : lastMessage.content}
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default ChatListItem;
