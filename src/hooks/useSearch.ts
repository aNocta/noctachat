import { useEffect, useState } from "react";
import { IChat, IMessage, IUser } from "../types/ChatTypes";

function filterList<T extends IMessage | IUser | IChat>(
  query: string,
  list: T[]
) {
  return list.filter((x) => {
    if ("title" in x) {
      return x.title.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    } else if ("content" in x) {
      return x.content.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    } else if ("name" in x) {
      return x.name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    }
  });
}

function useSearch<T extends IMessage | IUser | IChat>(
  list: T[],
  setList?: any,
  useLocalList?: boolean
): { input: string; setInput: any; localList?: T[]; setLocalList?: any } {
  const [input, setInput] = useState<string>("");
  const [localList, setLocalList] = useState<T[]>([]);

  useEffect(() => {
    const searchedList = filterList(input, list);
    if (useLocalList) setLocalList(searchedList);
    else if (setList) setList(searchedList);
  }, [input]);

  if (useLocalList) return { input, setInput, localList, setLocalList };
  return { input, setInput };
}

export default useSearch;
