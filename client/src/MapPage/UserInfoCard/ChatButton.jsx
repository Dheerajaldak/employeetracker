import React from "react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addChatbox } from "../../Messenger/messengerSlice";
const ChatButton = ({ socketId, username }) => {
  const dispatch = useDispatch();

  const handleAddChatbox = () => {
    dispatch(
      addChatbox({
        username,
        socketId,
      })
    );
  };
  return (
    <button
      onClick={handleAddChatbox}
      className="flex items-center gap-2 px-4 py-2 bg-cyan-900 hover:bg-teal-900 text-white rounded-md shadow-md transition duration-200 "
      title={`Chat with ${username}`}
    >
      <IoChatboxEllipsesOutline size={22} className="text-white" />
      <span className=" sm:inline text-sm font-medium">Chat</span>
    </button>
  );
};

export default ChatButton;
