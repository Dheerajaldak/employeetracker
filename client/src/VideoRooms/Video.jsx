import React, { useEffect, useRef } from "react";

const Video = ({ stream, muted }) => {
  const videoEl = useRef(null);

  useEffect(() => {
    if (videoEl.current && stream) {
      videoEl.current.srcObject = stream;
      videoEl.current.onloadedmetadata = () => {
        videoEl.current.play().catch((err) => console.error("Video play error:", err));
      };
    }
  }, [stream]);

  return (
    <div className="w-60 h-40 sm:w-72 sm:h-48 lg:w-80 lg:h-36 rounded-lg overflow-hidden shadow-lg border border-gray-300 bg-black relative">
      <video
        ref={videoEl}
        className="w-full h-full object-cover"
        playsInline
        autoPlay
        muted={muted}
      />
      <div className="absolute bottom-1 right-1 text-white text-xs bg-black bg-opacity-50 px-2 py-0.5 rounded">
        {muted ? "You" : "Guest"}
      </div>
    </div>
  );
};

export default Video;
