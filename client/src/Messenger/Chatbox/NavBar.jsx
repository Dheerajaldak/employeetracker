import React from "react";
import { FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeChatbox } from "../messengerSlice";

const NavBar = ({ username, socketId }) => {
  const dispatch = useDispatch();

  const handleCloseChatbox = () => {
    dispatch(removeChatbox(socketId));
  };

  return (
    <div className="bg-blue-600 px-4 py-2 flex justify-between items-center">
      <p className="font-semibold text-white truncate">{username}</p>
      <button
        onClick={handleCloseChatbox}
        className="text-white hover:text-gray-300 transition-colors duration-200"
        aria-label="Close chat"
      >
        <FiX size={20} />
      </button>
    </div>
  );
};

export default NavBar;
