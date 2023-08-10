import { FC, useEffect, useState } from "react";
import useSearch from "../../../hooks/useSearch";
import { IMessage } from "../../../types/ChatTypes";
import { MessageSearchInput } from "./MessageSearchInput";
import { MessageSearchItem } from "./MessageSearchItem";

interface IMessageSearchProps {
  defaultMessages: IMessage[];
}

const MessageSearch: FC<IMessageSearchProps> = ({ defaultMessages }) => {
  const { input, setInput, localList, setLocalList } = useSearch(
    defaultMessages,
    undefined,
    true
  );
  useEffect(() => {
    setLocalList(defaultMessages);
  }, [defaultMessages]);
  return (
    <div className="min-h-[200px] justify-center flex flex-col m-[1vmin]">
      <MessageSearchInput input={input} setInput={setInput} />
      <div className="flex flex-col max-h-[300px] overflow-y-auto mt-[1vmin]">
        {localList?.map(
          (x, k) =>
            !x.type && (
              <MessageSearchItem
                creatorId={x.author_id}
                content={x.content}
                key={k}
              />
            )
        )}
      </div>
    </div>
  );
};

export { MessageSearch };
