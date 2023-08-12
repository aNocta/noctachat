import { useSelector } from "react-redux/es/exports";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserSwitch from "../PreviewComponents/UserSwitch";
import { IChat } from "../types/ChatTypes";
import ChatCreation from "./ChatCreation";
import { ChatList } from "./ChatList";
import ChatNotSelected from "./ChatNotSelected";
import { ChatView } from "./ChatView";

const Chat = (): JSX.Element => {
  const chatList: IChat[] = useSelector((state: any) => state.chat.chats);
  return (
    <div className="flex flex-col h-full w-full md:w-fit md:h-[600px] md:flex-row">
      <BrowserRouter>
        <ChatList chatList={chatList} />
        <Routes>
          <Route path="/" element={<ChatNotSelected />}></Route>
          <Route path="/addChat" element={<ChatCreation />}></Route>
          {chatList.map((x) => (
            <Route
              path={`/chat/${x.id}`}
              element={<ChatView currentChat={x} />}
              key={x.id}
            />
          ))}
        </Routes>
        <UserSwitch />
      </BrowserRouter>
    </div>
  );
};
export default Chat;
