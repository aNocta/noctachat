import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
    if (input)
      dp(
        addChat({
          id: chatId,
          creator_id: currentUserId,
          members: [currentUserId],
          imgSrc: img
            ? img
            : "https://media.4-paws.org/3/e/5/6/3e56785d2a08c27be3ca72082c20fd0a4545586d/VIER%20PFOTEN_2015-04-27_010-1927x1333-1920x1328.jpg",
          title: input,
        })
      );
  };

  return (
    <div className="absolute flex flex-col bg-gray-900 shadow-lg min-w-[400px] overflow-hidden  h-full w-full  md:rounded-xl md:h-auto md:static md:ml-5 md:w-[40vw]">
      <Layout stateCallback={setLayoutVisibility} visible={layoutVisibility}>
        <Window closeFunc={setLayoutVisibility} title="Задать изображение">
          <div className="min-h-[100px] justify-center flex flex-col m-[1vmin]">
            <div className="flex">
              <input
                className="w-full rounded-xl p-[1vmin] border-2 duration-200 focus:outline-none focus:border-blue-400"
                type="text"
                placeholder="URL"
                value={img}
                onChange={(e) => setImg(e.currentTarget.value)}
              ></input>
            </div>
          </div>
        </Window>
      </Layout>
      <div className="bg-gray-800 p-[1vmin] w-full flex justify-between">
        <span className="text-white text-3xl font-bold">Добавить чат</span>
        <Link
          to="/"
          className="bg-blue-400 text-white font-bold p-[1vmin] rounded-xl ml-5 duration-200 hover:bg-blue-500 block md:hidden"
        >
          Назад
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        <button onClick={() => setLayoutVisibility(true)}>
          {img && (
            <img
              className="overflow-hidden object-cover rounded-[50%] w-[25vmin] h-[25vmin] mb-[2vh] hover:cursor-pointer"
              src={img}
            />
          )}
          {!img && (
            <div className="flex justify-center items-center text-white bg-gray-700 overflow-hidden rounded-[50%] w-[25vmin] h-[25vmin] mb-[2vh] hover:cursor-pointer">
              Задать изображение
            </div>
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
