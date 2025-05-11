import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const SingleMessage = ({ content, myMessage }) => {
  return (
    <div className={`flex items-start gap-2 ${myMessage ? 'justify-end' : 'justify-start'}`}>
      {!myMessage && <FaUserCircle className="text-gray-400 mt-1" size={25} />}
      <div
        className={`px-4 py-2 rounded-lg text-sm max-w-[70%] break-words ${
          myMessage ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        {content}
      </div>
      {myMessage && <FaUserCircle className="text-black mt-2" size={20} />}
    </div>
  );
};

export default SingleMessage;
