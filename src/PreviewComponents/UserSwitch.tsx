import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../store";
import { IUser } from "../types/ChatTypes";

const UserSwitch: FC = () => {
  const dp = useDispatch();
  const users: IUser[] = useSelector((state: any) => state.users.users);
  const currentUserId: number = useSelector((state: any) => state.currentUser);
  return (
    <div className="hidden md:flex flex-col">
      {users.map((x, k) => (
        <button
          onClick={() => dp(setCurrentUser({ id: x.id }))}
          title={x.name}
          key={k}
        >
          <img
            src={x.imgSrc}
            className={`w-[7.5vmin] h-[7.5vmin] rounded-[50%] m-[1vmin] duration-200 ${
              x.id === currentUserId ? "scale-110 border-blue-400 border-4" : ""
            } hover:scale-110`}
          />
        </button>
      ))}
    </div>
  );
};

export default UserSwitch;
