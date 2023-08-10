import React, { FC, useState } from "react";

interface IMessageSearchInput {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const MessageSearchInput: FC<IMessageSearchInput> = ({ input, setInput }) => {
  const [drawButton, setDrawButton] = useState<boolean>(false);
  return (
    <div className="flex">
      <input
        className="w-full rounded-xl p-[1vmin] border-2 duration-200 focus:outline-none focus:border-blue-400 mb-[1vmin]"
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

export { MessageSearchInput };
