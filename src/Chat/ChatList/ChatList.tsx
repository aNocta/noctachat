import { useState } from "react";
import { IChat } from "../../types/ChatTypes";
import AddChatButton from "./AddChatButton";
import { ChatListItem } from "./ChatListItem";
import { ChatSearch } from "./ChatSearch";

interface IChatListProperties {
  chatList: IChat[];
}

const ChatList = ({ chatList }: IChatListProperties): JSX.Element => {
  const [currentChatList, setCurrentChatList] = useState(chatList);
  return (
    <div className="flex flex-col bg-gray-800 rounded-xl shadow-lg h-auto min-w-[400px] md:w-[25vw]">
      <ChatSearch chatList={chatList} chatListSetter={setCurrentChatList} />
      <div
        className={`flex flex-col h-full ${
          currentChatList.length > 6 ? "overflow-y-scroll" : "overflow-y-hidden"
        }`}
      >
        {currentChatList.map((chat, k) => (
          <ChatListItem
            key={k}
            id={chat.id}
            imgSrc={chat.imgSrc}
            title={chat.title}
          />
        ))}
      </div>
      <AddChatButton />
    </div>
  );
};

export default ChatList;
