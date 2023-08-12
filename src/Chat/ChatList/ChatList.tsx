import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IChat } from "../../types/ChatTypes";
import AddChatButton from "./AddChatButton";
import { ChatListItem } from "./ChatListItem";
import { ChatSearch } from "./ChatSearch";

interface IChatListProperties {
  chatList: IChat[];
}

const ChatList = ({ chatList }: IChatListProperties): JSX.Element => {
  const [currentChatList, setCurrentChatList] = useState(chatList);
  useEffect(() => {
    setCurrentChatList(chatList);
  }, [chatList]);
  const currentUserId = useSelector((state: any) => state.currentUser);
  return (
    <div className="h-full flex flex-col bg-gray-800 shadow-lg min-w-[400px] md:h-auto md:rounded-xl md:w-[25vw]">
      <ChatSearch chatList={chatList} chatListSetter={setCurrentChatList} />
      <div
        className={`flex flex-col h-full ${
          currentChatList.length > 6 ? "overflow-y-scroll" : "overflow-y-hidden"
        }`}
      >
        {currentChatList
          .filter((x: IChat) => x.members.some((v) => v === currentUserId))
          .map((chat, k) => (
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
