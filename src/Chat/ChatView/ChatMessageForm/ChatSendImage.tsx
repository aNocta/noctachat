import { FC, useState } from "react";
import useSendMessage from "../../../hooks/useSendMessage";

interface IChatSendImageProps {
  chatId: number;
}

const ChatSendImage: FC<IChatSendImageProps> = ({ chatId }) => {
  const [input, setInput] = useState<string>("");
  const sendMessage = useSendMessage({
    author_id: 0,
    chat_id: chatId,
    type: "image",
  });
  const sendImageForm = () => {
    if (input.trim() !== "") {
      sendMessage(input);
      setInput("");
    }
  };
  return (
    <div className="min-h-[100px] justify-center flex flex-col m-[1vmin]">
      <div className="flex">
        <input
          className="w-full rounded-xl p-[1vmin] border-2 duration-200 focus:outline-none focus:border-blue-400"
          type="text"
          placeholder="URL"
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
        ></input>
        <button
          onClick={sendImageForm}
          className="bg-blue-400 text-white font-bold p-[1vmin] ml-[1vw] rounded-xl duration-200 hover:bg-blue-500"
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export { ChatSendImage };
