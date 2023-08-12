import { FC } from "react";

interface IHeaderBarProps {
  setUserListVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatHeaderBar: FC<IHeaderBarProps> = ({
  setSearchVisibility,
  setUserListVisibility,
}) => {
  return (
    <div className="flex items-center">
      <button
        title="Все участники"
        className="flex justify-center items-center m-[1vmin] duration-200 hover:bg-gray-900"
        onClick={() => setUserListVisibility(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          fill="white"
          className="h-[6vmin] w-[6vmin] md:h-[2vmin] md:w-[2vmin]"
        >
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
      </button>
      <button
        title="Найти сообщение"
        className="flex justify-center items-center m-[1vmin] duration-200 hover:bg-gray-900"
        onClick={() => setSearchVisibility(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          fill="white"
          className="h-[6vmin] w-[6vmin] md:h-[2vmin] md:w-[2vmin]"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </button>
    </div>
  );
};

export default ChatHeaderBar;
