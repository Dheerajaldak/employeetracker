import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { useSelector } from "react-redux";
import { sendChatMessage } from "../../store/actions/messengerAction";

const NewMessage = ({ socketId }) => {
  const [message, setMessage] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);
  const onlineUsers = useSelector((state) => state.map.onlineUsers);

  const handleMessageValueChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPressed = (event) => {
    if (event.code === "Enter" && message.length > 0) {
      proceedChatMessage();
      setMessage("");
    }
  };

  const proceedChatMessage = () => {
    if (onlineUsers.find((user) => user.socketId === socketId)) {
      sendChatMessage(socketId, message);
    }else{
    setInputDisabled(true);
    alert("User is not online means socketid not mateched");
    alert("you cannot send message to yourself");
    
    }
  };

  return (
    <div className="p-3 border-t border-gray-200 flex items-center gap-2">
      <input
        type="text"
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyPressed}
        placeholder="Type your message..."
        disabled={inputDisabled}
        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={proceedChatMessage}
        className="text-blue-600 hover:text-blue-800 transition"
        aria-label="Send message"
      >
        <FiSend size={20} />
      </button>
    </div>
  );
};

export default NewMessage;
