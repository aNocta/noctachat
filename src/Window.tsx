import React, { FC, ReactNode } from "react";

interface IWindowProps {
  title: string;
  closeFunc: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

const Window: FC<IWindowProps> = ({ title, closeFunc, children }) => {
  return (
    <div className="flex flex-col bg-gray-900 rounded-xl shadow-lg h-auto ml-5 overflow-hidden min-w-[25vw] pb-[2vmin]">
      <div className="flex justify-between items-center bg-gray-800 p-[1vmin]">
        <span className="text-white text-xl font-semibold">{title}</span>
        <button
          onClick={() => closeFunc(false)}
          className="bg-blue-400 text-white font-bold p-[1vmin] rounded-xl duration-200 hover:bg-blue-500"
        >
          Закрыть
        </button>
      </div>
      <>{children}</>
    </div>
  );
};

export default Window;
