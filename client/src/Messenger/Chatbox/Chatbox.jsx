import React from 'react';
import NavBar from './NavBar';
import Messages from './Messages';
import NewMessage from './NewMessage';

const Chatbox = (props) => {
  const { socketId } = props;

  return (
    <div className="flex flex-col w-[400px] max-w-xs sm:max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      <NavBar {...props} />
      
      {/* Scrollable messages area */}
      <div className="flex-1 overflow-y-auto max-h-[250px] scroll-smooth custom-scrollbar">
        <Messages socketId={socketId} />
      </div>

      <NewMessage socketId={socketId} />
    </div>
  );
};

export default Chatbox;
