import { FC } from "react";
import { IMessageItemContentProps } from "./messageItemProps";
import styles from "./MessageItem.module.scss";

const MessageItemImage: FC<IMessageItemContentProps> = ({
  myMessage,
  currentUser,
  message,
}) => {
  return (
    <span
      className={`flex flex-col text-white text-lg px-[1vw] py-[1vh] rounded-2xl shadow-xl min-w-[25%] ${
        myMessage ? styles.myMessageItem__text : styles.messageItem__text
      }`}
    >
      <div className="text-white text-xl mb-[1vh] font-semibold">
        {currentUser.name}
      </div>
      <a href={message.content}>
        <img src={message.content} className="max-w-[500px] max-h-[500px]" />
      </a>
      <div className={`text-gray-300 flex ${!myMessage ? "justify-end" : ""}`}>
        {message.time}
      </div>
    </span>
  );
};

export default MessageItemImage;
