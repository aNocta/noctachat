import { useSelector } from "react-redux/es/exports";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatCreation from "./ChatCreation";
import { ChatList } from "./ChatList";
import ChatNotSelected from "./ChatNotSelected";
import { ChatView } from "./ChatView";

const Chat = (): JSX.Element => {
  const chatList = useSelector((state: any) => state.chat.chats);
  return (
    <div className="flex flex-col h-[600px] md:flex-row">
      <BrowserRouter>
        <ChatList chatList={chatList} />
        <Routes>
          <Route path="/" element={<ChatNotSelected />}></Route>
          <Route path="/addChat" element={<ChatCreation />}></Route>
          <Route
            path="/chat/0"
            element={<ChatView currentChat={chatList[0]} />}
          />
          <Route
            path="/chat/1"
            element={<ChatView currentChat={chatList[1]} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Chat;
