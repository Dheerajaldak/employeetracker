import React from "react";
import Chatbox from "./Chatbox/Chatbox";
import { useSelector } from "react-redux";
// const DUMMY_CHATBOXES = [
//   {
//     username: "Dummy",
//     socketId: 3213123,
//     messages: [],
//   },
//   {
//     username: "Test",
//     socketId: 1234,
//     messages: [],
//   },
// ];

const Messenger = () => {
const chatbox = useSelector((state) => state.messenger.chatboxes);
  return (
    <div className="fixed bottom-0  flex flex-wrap gap-4 p-4 z-50">
      {chatbox.map((chatbox) => (
        <Chatbox key={chatbox.socketId} socketId={chatbox.socketId} username={chatbox.username}/>
      ))}
    </div>
  );
};

export default Messenger;
