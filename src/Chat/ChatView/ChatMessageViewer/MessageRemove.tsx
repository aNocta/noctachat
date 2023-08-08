import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMessage } from "../../../store";
import { IMessage } from "../../../types/ChatTypes";

interface IMessageRemoveProps {
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const MessageRemove: FC<IMessageRemoveProps> = ({ setVisibility }) => {
  const currentMessageId = useSelector(
    (state: any) => state.currentMessage.message_id
  );

  const message: IMessage = useSelector(
    (state: any) => state.messages.messages
  ).filter((x: IMessage) => x.id === currentMessageId)[0];

  const dispatch = useDispatch();
  const deleteMessage = () => {
    dispatch(removeMessage({ id: currentMessageId }));
    setVisibility(false);
  };

  return (
    <div className="min-h-[100px] flex flex-col justify-between m-[1vmin]">
      <p className="text-white">{message ? message.content : ""}</p>
      <div className="flex">
        <button
          onClick={deleteMessage}
          className="bg-red-400 text-white font-bold p-[1vmin] rounded-xl duration-200 hover:bg-red-500"
        >
          удалить
        </button>
      </div>
    </div>
  );
};

export default MessageRemove;
