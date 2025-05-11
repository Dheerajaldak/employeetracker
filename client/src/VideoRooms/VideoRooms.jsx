import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import CreateRoomButton from "./CreateRoomButton";
import RoomJoinButton from "./RoomJoinButton";
import {
  HiOutlineChevronDoubleUp,
  HiOutlineChevronDoubleDown,
} from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import ParticipantsVideos from "./ParticipantsVideos";

// Helper to convert the room object to an array with needed details
const convertRoomsToArray = (videoRooms) => {
  const rooms = [];
  Object.entries(videoRooms).forEach(([key, value]) => {
    const participants = Array.isArray(value.participants)
      ? value.participants
      : [];
    rooms.push({
      id: key,
      creatorUsername: participants[0]?.username || "Unknown",
      amountOfParticipants: participants.length,
      participants: participants,
    });
  });
  return rooms;
};

const RoomsList = ({ minimized }) => {
  const rooms = useSelector((store) => store.videoRooms.rooms || {});
  const roomArray = useMemo(() => convertRoomsToArray(rooms), [rooms]);

  if (minimized) {
    return (
      <div className="overflow-x-auto sm:overflow-y-auto max-w-full sm:max-h-[60vh] p-2 sm:p-4">
        <div className="flex flex-row sm:flex-col gap-2 sm:gap-3">
          {roomArray.map((room) => (
            <RoomJoinButton
              key={room.id}
              creatorUsername={room.creatorUsername}
              roomId={room.id}
              amountOfParticipants={room.amountOfParticipants}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-[90vw] sm:w-80 bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 max-h-[70vh] overflow-y-auto transition-all duration-300">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
          <FiUsers className="text-xl" />
          Rooms
        </h2>
        <CreateRoomButton />
      </div>

      <div className="flex flex-col gap-2">
        {roomArray.map((room) => (
          <div
            key={room.id}
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <RoomJoinButton
              creatorUsername={room.creatorUsername}
              roomId={room.id}
              amountOfParticipants={room.amountOfParticipants}
            />
            <div className="truncate">
              <p className="font-semibold text-gray-800 dark:text-white truncate">
                {room.creatorUsername}
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <FiUsers />
                {room.amountOfParticipants} participant
                {room.amountOfParticipants > 1 ? "s" : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const VideoRooms = () => {
  const [minimized, setMinimized] = useState(false);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 sm:bottom-4 sm:right-4 sm:left-auto z-50 
        flex ${
          minimized
            ? "justify-start sm:flex-col sm:items-start"
            : "justify-center sm:items-start sm:flex-col"
        } 
        px-2 sm:px-0 pb-2 sm:pb-0 `}
    >
      <div
        className={`relative bg-white dark:bg-gray-900 rounded-xl shadow-xl 
          transition-all duration-300 overflow-hidden 
          ${minimized ? "w-full sm:w-auto" : "w-full sm:w-80"}`}
      >
        <div className="overflow-hidden">
          {" "}
          {/* Ensure ParticipantsVideos doesn't overflow */}
          <ParticipantsVideos />
        </div>
        <RoomsList minimized={minimized} />

        <button
          onClick={() => setMinimized((prev) => !prev)}
          className="absolute top-2 right-2 bg-gray-700 text-white text-sm w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-600 transition"
          aria-label={minimized ? "Maximize" : "Minimize"}
        >
          {minimized ? (
            <HiOutlineChevronDoubleDown size={16} />
          ) : (
            <HiOutlineChevronDoubleUp size={16} />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoRooms;
