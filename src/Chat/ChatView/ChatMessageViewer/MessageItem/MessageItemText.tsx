import { FC } from "react";
import styles from "./MessageItem.module.scss";
import { IMessageItemContentProps } from "./messageItemProps";

const MessageItemsText: FC<IMessageItemContentProps> = ({
  myMessage,
  currentUser,
  message,
}) => {
  return (
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
        <span className={styles.content}>{message.content}</span>
        <div
          className={`text-gray-300 flex ${!myMessage ? "justify-end" : ""}`}
        >
          {message.time}
        </div>
      </div>
    </span>
  );
};

export default MessageItemsText;
