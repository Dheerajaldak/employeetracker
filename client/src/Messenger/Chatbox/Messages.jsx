import React, { use, useEffect } from "react";
import SingleMessage from "./SingleMessage";
import { useSelector } from "react-redux";
import { useRef } from "react";

const Messages = ({socketId}) => {
  const messages = useSelector(
    (state) => state.messenger.chatHistory[socketId]
  );
  const scrollRef=useRef(null);
  const scrollToBottom = () => {
      scrollRef.current.scrollIntoView({behavior:"smooth"});
  }

  useEffect(scrollToBottom,[messages]);
   return (
    <div className="flex flex-col gap-2 p-3">
      {messages?.map((message) => (
        <SingleMessage
          key={message.id}
          content={message.content}
          myMessage={message.myMessage}
        />
      ))}
      <div ref={scrollRef}/>
    </div>
  );
};

export default Messages;
