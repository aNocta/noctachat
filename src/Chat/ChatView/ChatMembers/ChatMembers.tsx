import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { kickMember } from "../../../store";
import { IUser } from "../../../types/ChatTypes";
import { ChatMembersItem } from "./ChatMembersItem";

interface IChatMembersProps {
  chatId: number;
  membersId: number[];
}

const ChatMembers: FC<IChatMembersProps> = ({ membersId, chatId }) => {
  const members: IUser[] = useSelector(
    (state: any) => state.users.users
  ).filter((user: IUser) =>
    membersId.some((value: number) => value == user.id)
  );
  const dp = useDispatch();
  const currentUserId = useSelector((state: any) => state.currentUser);
  const iam: IUser[] = members.filter((x: IUser) => currentUserId == x.id);
  const exitFromChat = () => {
    dp(
      kickMember({
        chatId: chatId,
        memberId: currentUserId,
      })
    );
  };
  return (
    <div className="min-h-[100px] justify-center flex flex-col m-[1vmin]">
      <div className="bg-gray-800 p-[1vmin] text-white text-lg">
        <span>Добавте участника по ссылке!:</span>
        <br />
        <span className="font-semibold">{window.location.href}</span>
      </div>
      <div className="flex flex-col max-h-[300px] overflow-y-auto mt-[1vmin]">
        {iam[0] && (
          <ChatMembersItem
            id={iam[0].id}
            imgSrc={iam[0].imgSrc}
            name={iam[0].name}
            key={iam[0].id}
          />
        )}
        {members
          .filter((x: IUser) => currentUserId != x.id)
          .map((x, i) => (
            <ChatMembersItem
              id={x.id}
              imgSrc={x.imgSrc}
              name={x.name}
              key={x.id}
            />
          ))}
      </div>
      {iam[0] && (
        <button
          onClick={exitFromChat}
          className="bg-red-400 text-white font-bold p-[1vmin] rounded-xl duration-200 hover:bg-red-500"
        >
          Выйти
        </button>
      )}
    </div>
  );
};

export { ChatMembers };
