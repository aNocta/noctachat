import { IMessage, IUser } from "../../../../types/ChatTypes";

interface IMessageItemContentProps {
  myMessage: boolean;
  currentUser: IUser;
  message: IMessage;
}

export type { IMessageItemContentProps };
export {};
