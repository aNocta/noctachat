import { FC } from "react";
import { useSelector } from "react-redux";
import { IUser } from "../../../types/ChatTypes";
import { ChatMembersItem } from "./ChatMembersItem";

interface IChatMembersProps {
  membersId: number[];
}

const ChatMembers: FC<IChatMembersProps> = ({ membersId }) => {
  const members: IUser[] = useSelector(
    (state: any) => state.users.users
  ).filter((user: IUser) =>
    membersId.some((value: number) => value == user.id)
  );
  return (
    <div className="min-h-[100px] justify-center flex flex-col m-[1vmin]">
      {members.map((x, i) => (
        <ChatMembersItem id={x.id} imgSrc={x.imgSrc} name={x.name} key={i} />
      ))}
    </div>
  );
};

export { ChatMembers };
