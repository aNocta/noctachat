import { FC } from "react";

interface IChatMembersItemProps {
  id: number;
  name: string;
  imgSrc: string;
}

const ChatMembersItem: FC<IChatMembersItemProps> = ({ id, name, imgSrc }) => {
  return (
    <div
      className={`flex p-[1vmin] mb-[1vmin] text-white rounded-xl ${
        id == 0
          ? "bg-blue-400  hover:bg-blue-500"
          : "bg-gray-800  hover:bg-gray-700"
      }`}
    >
      <img src={imgSrc} className="w-[3vmin] h-[3vmin] rounded-[50%]" alt="" />
      <span className="ml-[1vmin]">{name}</span>
    </div>
  );
};

export { ChatMembersItem };
