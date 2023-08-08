import React, { useEffect, useRef } from "react";
import { IMessage } from "../../../types/ChatTypes";
import { MessageItem } from "./MessageItem/MessageItem";

interface IChatMessageViewer {
  messages: IMessage[];
  setVisibilityOfLayout?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatMessageViewer = ({
  messages = [],
  setVisibilityOfLayout,
}: IChatMessageViewer): JSX.Element => {
  const messagesRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    messagesRef.current?.scrollTo(0, messagesRef.current.scrollHeight);
  }, []);
  if (messages[0])
    return (
      <div
        ref={messagesRef}
        className="flex flex-col h-full overflow-y-scroll items-center pb-[1vmin]"
      >
        {messages.map((message, k) => (
          <MessageItem
            myMessage={message.author_id == 0}
            deleteButtonAction={setVisibilityOfLayout}
            message={message}
            userId={message.author_id}
            key={k}
          />
        ))}
      </div>
    );
  return (
    <div className="flex h-full justify-center items-center">
      <span className="rounded-2xl p-[1vmin] text-white bg-gray-800">
        Нет сообщений
      </span>
    </div>
  );
};

export { ChatMessageViewer };
