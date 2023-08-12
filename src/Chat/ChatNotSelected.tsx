import { FC } from "react";

const ChatNotSelected: FC = () => {
  return (
    <div className="hidden md:flex justify-center items-center bg-gray-900 rounded-xl shadow-lg h-auto ml-5 min-w-[400px] overflow-hidden md:w-[40vw]">
      <span className="rounded-2xl p-[1vmin] text-white bg-gray-800">
        Чат не выбран
      </span>
    </div>
  );
};

export default ChatNotSelected;
