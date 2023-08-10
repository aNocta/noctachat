import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../Layout";
import { addChat } from "../store";
import Window from "../Window";

const ChatCreation: FC = () => {
  const dp = useDispatch();
  const currentUserId = useSelector((state: any) => state.currentUser);
  const chats = useSelector((state: any) => state.chat.chats);
  const chatId = chats[chats.length - 1].id + 1;
  const [img, setImg] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [layoutVisibility, setLayoutVisibility] = useState<boolean>(false);

  const createChat = () => {
    dp(
      addChat({
        id: chatId,
        creator_id: currentUserId,
        members: [currentUserId],
        imgSrc:
          "https://media.4-paws.org/3/e/5/6/3e56785d2a08c27be3ca72082c20fd0a4545586d/VIER%20PFOTEN_2015-04-27_010-1927x1333-1920x1328.jpg",
        title: input,
      })
    );
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 rounded-xl shadow-lg h-auto ml-5 min-w-[400px] overflow-hidden md:w-[40vw]">
      <Layout stateCallback={setLayoutVisibility} visible={layoutVisibility}>
        <Window closeFunc={setLayoutVisibility} title="Задать изображение">
          <p>Ок</p>
        </Window>
      </Layout>
      <div className="bg-gray-800 p-[1vmin] w-full flex justify-between">
        <span className="text-white text-3xl font-bold">Добавить чат</span>
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        <button onClick={() => setLayoutVisibility(true)}>
          {img && <img src="#" />}
          {!img && (
            <div className="bg-gray-700 overflow-hidden rounded-[50%] w-[25vmin] h-[25vmin] mb-[2vh]"></div>
          )}
        </button>
        <input
          className="rounded-xl p-[1vmin] border-2 duration-200 focus:outline-none focus:border-blue-400"
          type="text"
          value={input}
          onInput={(e) => setInput(e.currentTarget.value)}
        />
        <button
          onClick={createChat}
          className="bg-blue-400 text-white font-bold p-[1vmin] rounded-xl mt-[2vh] duration-200 hover:bg-blue-500"
        >
          Добавить
        </button>
      </div>
    </div>
  );
};
export default ChatCreation;
