import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentMessageId } from "../../../../store";
import { IMessage, IUser } from "../../../../types/ChatTypes";
import styles from "./MessageItem.module.scss";

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
      console.log(message.id);
      dispatch(setCurrentMessageId({ id: message.id }));
    }
  };
  return (
    <div
      className={`w-full px-[1vmin] my-2 ${styles.messageItem} ${
        myMessage ? styles.myMessageItem : ""
      }`}
    >
      <span
        className={`flex items-center text-white text-lg px-[1vw] py-[1vh] rounded-2xl shadow-xl min-w-[25%] ${
          myMessage ? styles.myMessageItem__text : styles.messageItem__text
        }`}
      >
        <img
          src={currentUser.imgSrc}
          className="w-[7.5vmin] h-[7.5vmin] rounded-[50%]"
          alt=""
        />
        <div className="flex flex-col ml-[2vmin]">
          <div className="text-white text-xl font-semibold">
            {currentUser.name}
          </div>

          {message.content}
          <div
            className={`text-gray-300 flex ${!myMessage ? "justify-end" : ""}`}
          >
            {message.time}
          </div>
        </div>
      </span>
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
