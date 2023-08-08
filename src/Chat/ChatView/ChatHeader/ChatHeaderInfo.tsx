interface IChatHeaderInfo {
  chatName: string;
  imgSrc: string;
}

const ChatHeaderInfo = ({ chatName, imgSrc }: IChatHeaderInfo): JSX.Element => {
  return (
    <div className="flex items-center">
      <img src={imgSrc} className="w-[5vmin] h-[5vmin]" />
      <h5 className="text-white text-xl ml-4">{chatName}</h5>
    </div>
  );
};

export { ChatHeaderInfo };
