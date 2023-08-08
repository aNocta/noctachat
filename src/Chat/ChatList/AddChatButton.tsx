import { FC } from "react";
import { NavLink } from "react-router-dom";

const AddChatButton: FC = () => {
  return (
    <NavLink to="/addChat/">
      <div className="flex justify-center m-[1vmin]">
        <button className="bg-blue-400 text-white font-bold p-[1vmin] rounded-xl ml-5 duration-200 hover:bg-blue-500">
          Добавить чат
        </button>
      </div>
    </NavLink>
  );
};

export default AddChatButton;
