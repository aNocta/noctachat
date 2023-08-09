import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store";

interface IUseSendMessageProps {
  author_id: number;
  chat_id: number;
  type?: string;
}
const useSendMessage = ({ author_id, chat_id, type }: IUseSendMessageProps) => {
  const messages = useSelector((state: any) => state.messages.messages);
  const disp = useDispatch();
  const sendMessage = (content: string) => {
    const date = new Date();
    disp(
      addMessage({
        message: {
          id: messages[messages.length - 1].id + 1,
          author_id: author_id,
          chat_id: chat_id,
          content: content,
          time: `${date.getHours()}:${date.getMinutes()}`,
          type: type,
        },
      })
    );
  };
  return sendMessage;
};

export default useSendMessage;
