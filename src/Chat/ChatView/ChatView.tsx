import { useState } from "react";
import { useSelector } from "react-redux";
import { Layout } from "../../Layout";
import { IMessage } from "../../types/ChatTypes";
import Window from "../../Window";
import { IChatListItemProperties } from "../ChatList/ChatListItem";
import { ChatHeader } from "./ChatHeader";
import { ChatMessageForm, ChatSendImage } from "./ChatMessageForm";
import { ChatMessageViewer } from "./ChatMessageViewer";
import MessageRemove from "./ChatMessageViewer/MessageRemove";

interface IChatViewProps {
  currentChat: IChatListItemProperties;
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
    <div className="flex flex-col bg-gray-900 rounded-xl shadow-lg h-auto ml-5 min-w-[400px] overflow-hidden md:w-[40vw]">
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
          <ChatSendImage />
        </Window>
      </Layout>
      <Layout
        visible={allMembersVisibility}
        stateCallback={setAllMembersVisibility}
      >
        <Window title="Все участники" closeFunc={setAllMembersVisibility}>
          <p></p>
        </Window>
      </Layout>
      <Layout
        visible={searchFormVisibility}
        stateCallback={setSearchFormVisibility}
      >
        <Window title="Найти сообщение" closeFunc={setSearchFormVisibility}>
          <p></p>
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
