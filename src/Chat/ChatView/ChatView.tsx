import { useState } from "react";
import { useSelector } from "react-redux";
import { Layout } from "../../Layout";
import { IChat, IMessage } from "../../types/ChatTypes";
import Window from "../../Window";
import { IChatListItemProperties } from "../ChatList/ChatListItem";
import { ChatHeader } from "./ChatHeader";
import { ChatMembers } from "./ChatMembers";
import { ChatMessageForm, ChatSendImage } from "./ChatMessageForm";
import { ChatMessageViewer } from "./ChatMessageViewer";
import MessageRemove from "./ChatMessageViewer/MessageRemove";
import { MessageSearch } from "./MessageSearch";

interface IChatViewProps {
  currentChat: IChat;
}

const ChatView = ({ currentChat }: IChatViewProps): JSX.Element => {
  const messages = useSelector((state: any) => state.messages.messages).filter(
    (x: IMessage) => x.chat_id == currentChat.id
  );
  const [layoutVisibility, setLayoutVisibility] = useState<boolean>(false);
  const [putImageVisibility, setPutImageVisibility] = useState<boolean>(false);
  const [allMembersVisibility, setAllMembersVisibility] =
    useState<boolean>(false);
  const [searchFormVisibility, setSearchFormVisibility] =
    useState<boolean>(false);
  return (
    <div className="absolute flex flex-col bg-gray-900 shadow-lg min-w-[400px] overflow-hidden  h-full w-full  md:rounded-xl md:h-auto md:static md:ml-5 md:w-[40vw]">
      <Layout visible={layoutVisibility} stateCallback={setLayoutVisibility}>
        <Window title="Удалить сообщение?" closeFunc={setLayoutVisibility}>
          <MessageRemove setVisibility={setLayoutVisibility} />
        </Window>
      </Layout>
      <Layout
        visible={putImageVisibility}
        stateCallback={setPutImageVisibility}
      >
        <Window title="Отправить изображение" closeFunc={setPutImageVisibility}>
          <ChatSendImage chatId={currentChat.id ? currentChat.id : 0} />
        </Window>
      </Layout>
      <Layout
        visible={allMembersVisibility}
        stateCallback={setAllMembersVisibility}
      >
        <Window title="Все участники" closeFunc={setAllMembersVisibility}>
          <ChatMembers
            chatId={currentChat.id}
            membersId={currentChat.members}
          />
        </Window>
      </Layout>
      <Layout
        visible={searchFormVisibility}
        stateCallback={setSearchFormVisibility}
      >
        <Window title="Найти сообщение" closeFunc={setSearchFormVisibility}>
          <MessageSearch defaultMessages={messages} />
        </Window>
      </Layout>
      <ChatHeader
        currentChat={currentChat}
        setSearchVisibility={setSearchFormVisibility}
        setUserListVisibility={setAllMembersVisibility}
      />
      <ChatMessageViewer
        messages={messages}
        setVisibilityOfLayout={setLayoutVisibility}
      />
      <ChatMessageForm
        currentChatId={currentChat.id ? currentChat.id : 0}
        visibilityCallback={setPutImageVisibility}
      />
    </div>
  );
};

export default ChatView;
