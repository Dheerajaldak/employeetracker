import React, { useState } from "react";
import {
  MdCallEnd,
  MdVideocam,
  MdVideocamOff,
  MdMic,
  MdMicOff,
} from "react-icons/md";
import { leaveVideoRoom } from "../store/actions/videoRoomAction";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsMicOn,
  setIsCameraOn,
} from "../realtimeCommunication/videoRoomsSlice";

const VideoRoomButtons = () => {
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [micEnabled, setMicEnabled] = useState(true);
  const isMicOn = useSelector((state) => state.videoRooms.isMicOn);
  const isCameraOn = useSelector((state) => state.videoRooms.isCameraOn);
  const localStream = useSelector((state) => state.videoRooms.localStream);

  const dispatch = useDispatch();

  const handleLeaveRoom = ({ inRoom }) => {
    console.log("Leave room clicked");
    leaveVideoRoom(inRoom);
  };
  const handleMuteUnmuteChange = () => {
    localStream.getAudioTracks()[0].enabled =
      !localStream.getAudioTracks()[0].enabled;
    dispatch(setIsMicOn(!isMicOn));
    setMicEnabled((prev) => !prev);
  };
  const handleCameraOnOffChange = () => {
    localStream.getVideoTracks()[0].enabled =
      !localStream.getVideoTracks()[0].enabled;
    dispatch(setIsCameraOn(!isCameraOn));
    setCameraEnabled((prev) => !prev);
  };

  // const toggleCamera = () => {
  //   setCameraEnabled((prev) => !prev);
  // };

  // const toggleMic = () => {
  //   setMicEnabled((prev) => !prev);
  // };

  return (
    <div className="flex items-center justify-center gap-6 ">
      {/* Camera Toggle Button */}
      <button
        // onClick={toggleCamera}
        onClick={handleCameraOnOffChange}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition duration-200 ${
          cameraEnabled
            ? "bg-gray-300 hover:bg-gray-400"
            : "bg-red-400 hover:bg-red-500"
        }`}
        aria-label="Toggle Camera"
      >
        {cameraEnabled ? (
          <MdVideocam className="text-2xl text-black" />
        ) : (
          <MdVideocamOff className="text-2xl text-white" />
        )}
      </button>

      {/* End Call Button */}
      <button
        className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition duration-200"
        onClick={handleLeaveRoom}
        aria-label="Disconnect Call"
      >
        <MdCallEnd className="text-3xl" />
      </button>

      {/* Mic Toggle Button */}
      <button
        // onClick={toggleMic}
        onClick={handleMuteUnmuteChange}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition duration-200 ${
          micEnabled
            ? "bg-gray-300 hover:bg-gray-400"
            : "bg-red-400 hover:bg-red-500"
        }`}
        aria-label="Toggle Microphone"
      >
        {micEnabled ? (
          <MdMic className="text-2xl text-black" />
        ) : (
          <MdMicOff className="text-2xl text-white" />
        )}
      </button>
    </div>
  );
};

export default VideoRoomButtons;
