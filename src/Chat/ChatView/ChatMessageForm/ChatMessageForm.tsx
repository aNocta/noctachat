import { FC, useState } from "react";
import { useSelector } from "react-redux";
import useSendMessage from "../../../hooks/useSendMessage";

interface IChatMessageFormProps {
  currentChatId: number;
  visibilityCallback: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatMessageForm: FC<IChatMessageFormProps> = ({
  currentChatId,
  visibilityCallback,
}) => {
  const [input, setInput] = useState<string>("");
  const currentUserId = useSelector((state: any) => state.currentUser);
  const sendMessage = useSendMessage({
    author_id: currentUserId,
    chat_id: currentChatId,
  });
  const sendMessageForm = () => {
    if (input.trim() != "") {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="bg-gray-800 p-[1vmin] flex justify-between">
      <button
        title="Отправить изображение"
        className="flex justify-center items-center w-[4vw] duration-200 hover:bg-gray-900"
        onClick={() => visibilityCallback(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          fill="white"
          className="w-[6vmin] h-[6vmin] md:w-[2.5vmin] md:h-[2.5vmin]"
        >
          <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
        </svg>
      </button>
      <input
        className="w-full ml-5 rounded-xl p-[1vmin] border-2 duration-200 focus:outline-none focus:border-blue-400"
        type="text"
        placeholder="Написать сообщение..."
        value={input}
        onInput={(e) => setInput(e.currentTarget.value)}
      ></input>
      <button
        onClick={sendMessageForm}
        className="bg-blue-400 text-white font-bold p-[1vmin] rounded-xl ml-5 duration-200 hover:bg-blue-500"
      >
        Отправить
      </button>
    </div>
  );
};

export { ChatMessageForm };
