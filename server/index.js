const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const { Socket } = require("dgram");
const { disconnect } = require("process");
const { ExpressPeerServer } = require("peer");
const { log } = require("console");

const server = http.createServer(app);

// app.use(cors());
app.use(cors({
  origin: "https://salestrackerdheeraj.vercel.app",
  methods: ["GET", "POST"],
  credentials: true,
}));


// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     // methods: ["GET", "POST"],
//   },
// });
const io = new Server(server, {
  cors: {
    origin: "https://salestrackerdheeraj.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  },
  transports: ["websocket", "polling"],
});


app.get("/", (req, res) => {
  res.send("hello location");
});
const https = require("https");
app.get("/ice-servers", (req, res) => {
  const body = JSON.stringify({ format: "urls" });

  const authString = Buffer.from("Dheeraj:65dcc07c-313f-11f0-aad9-0242ac150003").toString("base64");

  const options = {
    host: "global.xirsys.net",
    path: "/_turn/salestrack",
    method: "PUT",
    headers: {
      Authorization: "Basic " + authString,
      "Content-Type": "application/json",
      "Content-Length": body.length,
    },
  };

  console.log("Sending ICE request to Xirsys with options:", options);

  const request = https.request(options, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      try {
        console.log("Xirsys response raw:", data);
        const parsedData = JSON.parse(data);
        res.json(parsedData.v);
      } catch (error) {
        console.error("Failed to parse Xirsys response:", error);
        res.status(500).json({ error: "Failed to parse ICE server response" });
      }
    });
  });

  request.on("error", (error) => {
    console.error("Error requesting ICE servers from Xirsys:", error);
    res.status(500).json({ error: "Failed to fetch ICE servers from Xirsys" });
  });

  request.write(body);
  request.end();
});

let onlineUsers = {};
let videoRooms = {};

io.on("connection", (socket) => {
  console.log(`user connected of the id: ${socket.id}`);

  socket.on(`user-login`, (data) => loginEventHandler(socket, data));

  socket.on("chat-message", (data) => chatMessageHandler(socket, data));

  socket.on("video-room-create", (data) =>
    videoRoomCreateHandler(socket, data)
  );

  socket.on("video-room-join", (data) => {
    videoRoomJoinHandler(socket, data);
  });

  socket.on("video-room-leave", (data) => {
    videoRoomLeaveHandler(socket, data);
  });

  socket.on("disconnect", () => {
    disconnectEventHandler(socket);
  });
});

// const peerServer = PeerServer({ port: 9000, path: "/peer" });
const peerServer = ExpressPeerServer(server, {
  path: "/peer",
  // config: {
  //     iceServers: [
  //       { urls: "stun:stun.l.google.com:19302" },
  //       {
  //         urls: "turn:openrelay.metered.ca:80",
  //         username: "openrelayproject",
  //         credential: "openrelayproject"
  //       }
  //     ]
  //   }
});
app.use("/peerjs", peerServer);

const PORT = process.env.PORT || 3003;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

//socket event
const loginEventHandler = (socket, data) => {
  socket.join("logged-users");

  onlineUsers[socket.id] = {
    username: data.username,
    coords: data.coords,
  };
  console.log(onlineUsers);

  io.to("logged-users").emit("online-users", convertOnlineUsersToArray());

  broadcastVideoRooms();
};

const disconnectEventHandler = (socket) => {
  console.log(`user disconnected of the id:${socket.id}`);
  checkIfUserIsInCall(socket);
  removeOnlineUser(socket.id);
  broadcastDisconnectedUserDetails(socket.id);
};

const chatMessageHandler = (socket, data) => {
  const { receiverSocketId, content, id } = data;

  if (onlineUsers[receiverSocketId]) {
    console.log("message received", data);
    console.log("sending message to");
    io.to(receiverSocketId).emit("chat-message", {
      senderSocketId: socket.id,
      content,
      id,
    });
  }
};
//helper fun
const videoRoomCreateHandler = (socket, data) => {
  const { peerId, newRoomId } = data;

  videoRooms[newRoomId] = {
    participants: [
      {
        socketId: socket.id,
        username: onlineUsers[socket.id].username,
        peerId,
      },
    ],
  };

  broadcastVideoRooms();
  console.log("New Room", data);
};

const videoRoomJoinHandler = (socket, data) => {
  const { roomId, peerId } = data;

  if (videoRooms[roomId]) {
    videoRooms[roomId].participants.forEach((participant) => {
      socket.to(participant.socketId).emit("video-room-init", {
        newParticipantPeerId: peerId,
      });
    });

    videoRooms[roomId].participants = [
      ...videoRooms[roomId].participants,
      {
        socketId: socket.id,
        username: onlineUsers[socket.id].username,
        peerId,
      },
    ];

    broadcastVideoRooms();
  }
};

// const videoRoomLeaveHandler = (socket, data) => {
//   const { roomId } = data;

//   const room = videoRooms[roomId];
//   if (!room) return;

//   // Remove the participant
//   room.participants = room.participants.filter(
//     (participant) => participant.socketId !== socket.id
//   );

//   // If any participants are left, notify the first one
//   if (room.participants.length > 0) {
//     socket
//       .to(room.participants[0].socketId)
//       .emit("video-call-disconnect");
//   }

//   // If no participants left, delete the room
//   if (room.participants.length < 1) {
//     delete videoRooms[roomId];
//   }

//   broadcastVideoRooms();
// };

// const videoRoomLeaveHandler = (socket, data) => {
//   const { roomId } = data;
//   if (videoRooms[roomId]) {
//     videoRooms[roomId].participants = videoRooms[roomId].participants.filter(
//       (p) => p.socketId !== socket.id
//     );
//   }
//   if (videoRooms[roomId].participants.length > 0) {
//     socket
//       .to(videoRooms[roomId].participants[0].socketId)
//       .emit("video-call-disconnect");
//   }
//   if (videoRooms[roomId].participants.length < 1) {
//     delete videoRooms[roomId];
//   }
//   broadcastVideoRooms();
// };

const videoRoomLeaveHandler = (socket, data) => {
  const { roomId } = data;
  const room = videoRooms[roomId];

  // Exit early if the room doesn't exist
  if (!room) return;

  // Filter out the participant
  room.participants = room.participants.filter((p) => p.socketId !== socket.id);

  if (room.participants.length > 0) {
    socket.to(room.participants[0].socketId).emit("video-call-disconnect");
  } else {
    delete videoRooms[roomId];
  }

  broadcastVideoRooms();
};

//helper function
const removeOnlineUser = (id) => {
  if (onlineUsers[id]) {
    delete onlineUsers[id];
  }
  console.log(onlineUsers);
};
const checkIfUserIsInCall = (socket) => {
  Object.entries(videoRooms).forEach(([key, value]) => {
    const participant = value.participants.find(
      (p) => p.socketId === socket.id
    );
    if (participant) {
      removeUserFromTheVideoRoom(socket.id, key);
    }
  });
};
const removeUserFromTheVideoRoom = (socketId, roomId) => {
  videoRooms[roomId].participants = videoRooms[roomId].participants.filter(
    (p) => p.socketId !== socketId
  );
  //remove room if no participants left
  if (videoRooms[roomId].participants.length < 1) {
    delete videoRooms[roomId];
  } else {
    //still have participants left, notify the first one

    io.to(videoRooms[roomId].participants[0].socketId).emit(
      "video-call-disconnect"
    );
  }
  broadcastVideoRooms();
};
const broadcastDisconnectedUserDetails = (disconnectedUserSocketId) => {
  io.to("logged-users").emit("user-disconnected", disconnectedUserSocketId);
};

const broadcastVideoRooms = () => {
  io.to("logged-users").emit("video-rooms", videoRooms);
};
const convertOnlineUsersToArray = () => {
  const onlineUsersArray = [];

  Object.entries(onlineUsers).forEach(([key, value]) => {
    onlineUsersArray.push({
      socketId: key,
      username: value.username,
      coords: value.coords,
    });
  });
  return onlineUsersArray;
};
