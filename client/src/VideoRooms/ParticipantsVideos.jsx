import React from 'react'
import { useSelector } from 'react-redux'
import Video from './Video';
import VideoRoomButtons from './VideoRoomButtons';

const ParticipantsVideos = () => {
    const inRoom = useSelector((state) => state.videoRooms.inRoom);
    const localStream = useSelector((state) => state.videoRooms.localStream);
   const remoteStreams = useSelector((state) => state.videoRooms.remoteStreams);
    if (!inRoom) return null;
    return (
    <div className="flex flex-wrap justify-center items-center gap-2 p-2 bg-gray-100 rounded-lg ">
       
        {inRoom && localStream && <Video stream={localStream} muted/>}
        
       {inRoom && remoteStreams && <Video stream={remoteStreams} />}
        {inRoom && <VideoRoomButtons inRoom={inRoom}/>}
    </div>
  )
}

export default ParticipantsVideos
