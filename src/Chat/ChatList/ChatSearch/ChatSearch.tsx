import React, { useEffect, useState } from "react";
import useSearch from "../../../hooks/useSearch";
import { IChat } from "../../../types/ChatTypes";

interface IChatProperties {
  chatList: IChat[];
  chatListSetter: React.Dispatch<React.SetStateAction<IChat[]>>;
}

const ChatSearch = ({ chatList, chatListSetter }: IChatProperties) => {
  const [drawButton, setDrawButton] = useState<boolean>(false);
  const { input, setInput } = useSearch(chatList, chatListSetter);
  return (
    <div className="p-[1vmin] mb-4 flex justify-between duration-200">
      <input
        className="w-full rounded-xl p-[1vmin] border-2 duration-200 focus:outline-none focus:border-blue-400"
        type="text"
        value={input}
        onInput={(e) => {
          setInput(e.currentTarget.value);
          e.currentTarget.value.length > 0
            ? setDrawButton(true)
            : setDrawButton(false);
        }}
        placeholder="Поиск"
      ></input>
      {drawButton && (
        <button
          onClick={() => {
            setInput("");
            setDrawButton(false);
          }}
          className="bg-blue-400 text-white font-bold p-[1vmin] rounded-xl ml-5 duration-200 hover:bg-blue-500"
        >
          Очистить
        </button>
      )}
    </div>
  );
};

export default ChatSearch;
