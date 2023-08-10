import { FC } from "react";
import { useSelector } from "react-redux";
import { IUser } from "../../../types/ChatTypes";

interface IMessageSearchItemProps {
  creatorId: number;
  content: string;
}

const MessageSearchItem: FC<IMessageSearchItemProps> = ({
  content,
  creatorId,
}) => {
  const currentUser: IUser = useSelector(
    (state: any) => state.users.users
  ).filter((x: IUser) => x.id == creatorId)[0];
  return (
    <div
      className={`flex p-[1vmin] mb-[1vmin] text-white rounded-xl bg-gray-800 hover:bg-gray-700`}
    >
      <div className="flex flex-col ml-[1vmin]">
        <strong>{currentUser.name}</strong>
        <span>{content}</span>
      </div>
    </div>
  );
};

export { MessageSearchItem };
