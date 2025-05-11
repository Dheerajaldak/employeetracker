// import React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import { useSelector } from "react-redux";

// const containerStyle = {
//   width: "100%",
//   height: "600px",
// };

// const MapPage = () => {
//   const myLocation = useSelector((state) => state.map.myLocation);
//   const onlineUsers = useSelector((state) => state.map.onlineUsers);
//   if (!myLocation) {
//     return <div>Loading map...</div>;
//   }

//   const center = {
//     lat: myLocation.latitude,
//     lng: myLocation.longitude,
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao">
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
//         {/* Marker for your own location */}
//         <Marker position={center} label={{ text: "Me" }} />

//         {/* Markers for all online users */}
//         {onlineUsers.map((user) => (
//           <Marker
//             key={user.socketId}
//             position={{
//               lat: user.coords.latitude,
//               lng: user.coords.longitude,
//             }}
//             label={{
//               text: user.username,
//               color: "white",
//               fontWeight: "bold",
//               fontSize: "14px",
//             }}
//           />

//         ))}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapPage;

// import React from "react";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";
// import { useSelector } from "react-redux";
// import Marker1 from "./Marker";
// import UserInfoCard from "./UserInfoCard/UserInfoCard";

// const containerStyle = {
//   width: "100%",
//   height: "650px",
// };

// const MapPage = () => {
//   const myLocation = useSelector((state) => state.map.myLocation);
//   const onlineUsers = useSelector((state) => state.map.onlineUsers);
//   const cardChosenOption = useSelector((state) => state.map.cardChosenOption);

//   if (!myLocation) {
//     return <div>Loading map...</div>;
//   }

//   const center = {
//     lat: myLocation.latitude,
//     lng: myLocation.longitude,
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao">
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
//         {/* Custom Marker for your own location */}
//         <Marker1
//           lat={center.lat}
//           lng={center.lng}
//           myself={true}
//           socketId={"me"}
//           username={"Me"}
//           coords={{ lat: center.lat, lng: center.lng }}
//         />

//         {/* Custom Markers for all online users */}
//         {onlineUsers.map((onlineUser) => (
//           <Marker1
//             lat={onlineUser.coords.latitude}
//             lng={onlineUser.coords.longitude}
//             key={onlineUser.socketId}
//             myself={onlineUser.myself}
//             socketId={onlineUser.socketId}
//             username={onlineUser.username}
//             coords={onlineUser.coords}
//           />
//         ))}
//       </GoogleMap>
//       {cardChosenOption && (
//         <UserInfoCard
//           socketId={cardChosenOption.socketId}
//           username={cardChosenOption.username}
//           userLocation={cardChosenOption.coords}
//         />
//       )}
//     </LoadScript>
//   );
// };

// export default MapPage;

import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import UserInfoCard from "./UserInfoCard/UserInfoCard"; // Make sure this path is correct
import Messenger from "../Messenger/Messenger";
import VideoRooms from "../VideoRooms/VideoRooms";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const MapPage = () => {
  const myLocation = useSelector((state) => state.map.myLocation);
  const onlineUsers = useSelector((state) => state.map.onlineUsers);

  const [selectedUser, setSelectedUser] = useState(null); // For tracking clicked marker

  if (!myLocation) {
    return <div>Loading map...</div>;
  }

  const center = {
    lat: myLocation.latitude,
    lng: myLocation.longitude,
  };
  
  return (
    <LoadScript googleMapsApiKey="AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Marker for your own location */}
        <Marker
          position={center}
          label={{
            text: "Me",
            color: "white",
            fontWeight: "bold",
            fontSize: "14px",
          }}
          icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          onClick={() =>
            setSelectedUser({
              socketId: "me",
              username: "Me",
              coords: { latitude: center.lat, longitude: center.lng },
            })
          }
        />

        {/* Markers for all online users */}
        {onlineUsers.map((user) => (
          <Marker
            key={user.socketId}
            position={{
              lat: user.coords.latitude,
              lng: user.coords.longitude,
            }}
            label={{
              text: user.username,
              color: "white",
              fontWeight: "bold",
              fontSize: "14px",
            }}
            onClick={() => setSelectedUser(user)} // Set selected user on click
          />
        ))}
      </GoogleMap>
<Messenger/>
<VideoRooms/>
      {/* Show UserInfoCard if a user is selected */}
      {selectedUser && (
        <UserInfoCard
          socketId={selectedUser.socketId}
          username={selectedUser.username}
          userLocation={selectedUser.coords}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </LoadScript>
  );
};

export default MapPage;
