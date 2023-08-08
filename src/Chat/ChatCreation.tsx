import { FC, useState } from "react";
import { Layout } from "../Layout";
import Window from "../Window";

const ChatCreation: FC = () => {
  const [img, setImg] = useState<string>("");
  const [layoutVisibility, setLayoutVisibility] = useState<boolean>(false);

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
        />
        <button className="bg-blue-400 text-white font-bold p-[1vmin] rounded-xl mt-[2vh] duration-200 hover:bg-blue-500">
          Добавить
        </button>
      </div>
    </div>
  );
};
export default ChatCreation;
