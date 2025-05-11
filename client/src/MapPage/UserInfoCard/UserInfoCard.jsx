import React from "react";
import { useSelector } from "react-redux";
import { calculateDistanceBetweenCoords } from "../../utils/location";
import ActionButton from "./ActionButton";
import { AiOutlineClose, AiOutlineMessage } from "react-icons/ai";
import CreateRoomButton from "../../VideoRooms/CreateRoomButton";

const Label = ({ fontSize, text }) => {
  return (
    <p className="text-gray-700" style={{ fontSize }}>
      {text}
    </p>
  );
};

const UserInfoCard = ({ username, userLocation, socketId, onClose }) => {
  const myLocation = useSelector((state) => state.map.myLocation);

  return (
    <div className="fixed top-10 left-1/7 transform -translate-x-1/2 bg-white rounded-lg shadow-xl px-6 py-4 z-50 w-[350px] animate-fade-in-up">
      {/* Close button */}
      <button
        onClick={onClose} // 👈 Trigger close
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        aria-label="Close"
      >
        <AiOutlineClose />
      </button>

      <h2 className="text-lg font-semibold mb-2 text-gray-800">User Info</h2>
      <Label text={`Name: ${username}`} fontSize="16px" />
      <Label
        text={`Dist: ${calculateDistanceBetweenCoords(
          myLocation,
          userLocation
        )} km`}
        fontSize="16px"
      />

      <ActionButton socketId={socketId} username={username} />

      <div className="mt-4 flex justify-end gap-3 text-sm">
        <button className="flex items-center gap-1 bg-cyan-900 hover:bg-teal-900 text-white py-2 px-4 rounded-md shadow-md transition duration-300">
          <AiOutlineMessage className="text-3xl" />
          
          Chat with {username.split(" ")[0]}
        </button>
        
        <CreateRoomButton />
      </div>
    </div>
  );
};

export default UserInfoCard;
