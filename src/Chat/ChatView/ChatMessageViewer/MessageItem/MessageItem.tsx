import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentMessageId } from "../../../../store";
import { IMessage, IUser } from "../../../../types/ChatTypes";
import styles from "./MessageItem.module.scss";
import MessageItemImage from "./MessageItemImage";
import MessageItemsText from "./MessageItemText";

interface IMessageItem {
  message: IMessage;
  myMessage: boolean;
  userId: number;
  deleteButtonAction?: React.Dispatch<React.SetStateAction<boolean>>;
}

const MessageItem: FC<IMessageItem> = ({
  deleteButtonAction,
  message,
  userId,
  myMessage,
}) => {
  const currentUser = useSelector((state: any) => state.users.users).filter(
    (x: IUser) => x.id === userId
  )[0];
  const dispatch = useDispatch();

  const activateDeleteButton = () => {
    if (myMessage) {
      deleteButtonAction && deleteButtonAction(true);
      dispatch(setCurrentMessageId({ id: message.id }));
    }
  };
  return (
    <div
      className={`w-full px-[1vmin] my-2 ${styles.messageItem} ${
        myMessage ? styles.myMessageItem : ""
      }`}
    >
      {message.type === "image" ? (
        <MessageItemImage
          myMessage={myMessage}
          currentUser={currentUser}
          message={message}
        />
      ) : (
        <MessageItemsText
          myMessage={myMessage}
          currentUser={currentUser}
          message={message}
        />
      )}
      <button
        onClick={activateDeleteButton}
        className="bg-red-400 text-white font-bold p-[1vmin] rounded-xl duration-200 hover:bg-red-500"
      >
        удалить
      </button>
    </div>
  );
};

export { MessageItem };
