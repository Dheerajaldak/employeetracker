// import { configureStore } from "@reduxjs/toolkit";
// import mapReducer from "../MapPage/MapSlice.js";
// import messengerReducer from "../Messenger/messengerSlice";
// import videoRoomsReducer from "../realtimeCommunication/videoRoomsSlice.jsx";
// const store = configureStore({
//   reducer: {
//     map: mapReducer,
//     messenger: messengerReducer,
//     videoRooms: videoRoomsReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoreActions: [
//           "videoRooms/setLocalStream",
//           "videoRooms/setRemoteStream",
//         ],
//         ignoredPaths: ["videoRooms.localStream", "videoRooms.remoteStream"],
//       },
//     }),
// });
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "../MapPage/MapSlice.js";
import messengerReducer from "../Messenger/messengerSlice";
import videoRoomsReducer from "../realtimeCommunication/videoRoomsSlice.jsx";

const store = configureStore({
  reducer: {
    map: mapReducer,
    messenger: messengerReducer,
    videoRooms: videoRoomsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "videoRooms/setLocalStream",
          "videoRooms/setRemoteStreams", // ✅ corrected
        ],
        ignoredPaths: [
          "videoRooms.localStream",
          "videoRooms.remoteStreams",   // ✅ corrected
        ],
      },
    }),
});

export default store;

