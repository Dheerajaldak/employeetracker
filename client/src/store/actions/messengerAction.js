import { v4 as uuid } from "uuid";
import store from "../store";
import { addChatbox, addChatMessage } from "../../Messenger/messengerSlice";
import * as socketConn from "../../socketConnection/socketConn";

export const sendChatMessage = (receiverSocketId, content) => {
  const message = {
    content,
    receiverSocketId,
    id: uuid(),
  };

  socketConn.sendChatMessage(message);

  store.dispatch(
    addChatMessage({
      socketId: receiverSocketId,
      content: content,
      myMessage: true,
      id: message.id,
    })
  );
};
export const chatMessageHandler = (messageData) => {
  store.dispatch(
    addChatMessage({
      socketId: messageData.senderSocketId,
      content: messageData.content,
      myMessage: false,
      id: messageData.id,
    })
  );

  openChatboxIfCloed(messageData.senderSocketId);
};

export const openChatboxIfCloed = (socketId) => {
  const chatbox = store
    .getState()
    .messenger.chatboxes.find((c) => c.socketId === socketId);
  const username = store
    .getState()
    .map.onlineUsers.find((user) => user.socketId === socketId)?.username;
  if (!chatbox) {
    store.dispatch(addChatbox({ socketId, username }));
  } else {
    return null;
  }
};
