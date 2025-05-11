import io from "socket.io-client";
import {
  onlineUsersHandler,
  userDisconnectedHandler,
} from "../store/actions/usersActions";
import { chatMessageHandler } from "../store/actions/messengerAction";
import { videoRoomsListHandler } from "../store/actions/videoRoomAction";
import { call, disconnect } from "../realtimeCommunication/webRTCHandler";

let socket = null;

export const connectWithSocketIOServer = () => {
  socket = io(`${import.meta.env.VITE_SOCKET_URL}`);
  
  // socket = io("http://localhost:3003");
  // socket = io("https://salestrackervisysdheeraj-a.onrender.com");
  // socket = io("https://salestrackerbackend.onrender.com");


  socket.on("connect", () => {
    console.log("connected to socket.io");
  });

  socket.on("online-users", (usersData) => {
    console.log(usersData);
    onlineUsersHandler(socket.id, usersData);
  });

  socket.on("chat-message", (messagedata) => {
    // console.log('message received',messagedata);
    chatMessageHandler(messagedata);
  });

  socket.on("video-rooms", (videoRooms) => {
    // console.log("new list of room received");
    videoRoomsListHandler(videoRooms);
  });
  socket.on("video-room-init", (data) => {
    call(data);
  });

  socket.on("video-call-disconnect", () => {
    disconnect();
  });
  socket.on("user-disconnected", (disconnectedUserSocketId) => {
    userDisconnectedHandler(disconnectedUserSocketId);
  });
};

export const login = (data) => {
  socket.emit("user-login", data);
};

export const sendChatMessage = (data) => {
  socket.emit("chat-message", data);
};

export const createVideoRoom = (data) => {
  socket.emit("video-room-create", data);
};

export const joinVideoRoom = (data) => {
  console.log("emitting event to join room", data);

  socket.emit("video-room-join", data);
};

export const leaveVideoRoom = (data) => {
  socket.emit("video-room-leave", data);
};
