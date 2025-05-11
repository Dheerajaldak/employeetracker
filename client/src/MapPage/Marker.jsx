// import React from "react";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { setCardChosenOption } from "./MapSlice";
// const Marker1 = (props) => {
//   const { myself, socketId, username, coords } = props;
//   const dispatch = useDispatch();
//   const handleOptionChoose = () => {
//     if (!myself) {
//       dispatch(
//         setCardChosenOption({
//           socketId: socketId,
//           username: username,
//           coords: coords,
//         })
//       );
//     }
//   };

//   const markerStyle = {
//     color: myself ? "dodgerblue" : "red",
//     fontSize: "24px",
//     transform: "translate(-50%, -100%)", 
//     textAlign: "center",
//     position: "relative",
//   };

//   const labelStyle = {
//     position: "absolute",
//     top: "-20px",
//     left: "50%",
//     transform: "translateX(-50%)",
//     backgroundColor: "#fff",
//     padding: "2px 5px",
//     borderRadius: "4px",
//     fontSize: "12px",
//     boxShadow: "0 0 4px rgba(0,0,0,0.3)",
//     whiteSpace: "nowrap",
//   };

//   return (
//     <div style={markerStyle} onClick={handleOptionChoose}>
//       <div style={labelStyle}>{username}</div>
//       <FaMapMarkerAlt />
//     </div>
//   );
// };

// export default Marker1;


import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setCardChosenOption } from "./MapSlice";
import { OverlayView } from "@react-google-maps/api";

const Marker1 = (props) => {
  const { lat, lng, myself, socketId, username, coords } = props;
  const dispatch = useDispatch();

  const handleOptionChoose = () => {
    if (!myself) {
      dispatch(
        setCardChosenOption({
          socketId: socketId,
          username: username,
          coords: coords,
        })
      );
    }
  };

  return (
    <OverlayView
  position={{ lat, lng }}
  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
>
  
  <div
    className="relative flex flex-col items-center cursor-pointer"
    onClick={handleOptionChoose}
  >
    {/* Username Label */}
    {!myself && (
      <div className="text-white font-bold ">
        {username}
      </div>
    )}

    {/* Marker Icon */}
    <FaMapMarkerAlt
      className={`text-3xl drop-shadow-md ${
        myself ? "text-blue-500" : "text-red-600"
      }`}
    />
  </div>
</OverlayView>

  );
};

export default Marker1;
