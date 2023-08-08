interface IChat {
  id: number;
  creator_id: number;
  members: number[];
  imgSrc: string;
  title: string;
  lastMessage?: string;
  lastMessageTime?: string;
}

interface IMessage {
  id: number;
  author_id: number;
  chat_id: number;
  content: string;
  time: string;
  type?: string;
}

interface IUser {
  id: number;
  name: string;
  imgSrc: string;
}
export type { IMessage, IChat, IUser };
