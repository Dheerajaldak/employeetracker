import store from "../store";
import { setOnlineUsers, removeDisconnectedUser } from "../../MapPage/MapSlice";

export const onlineUsersHandler = (socketId, userData) => {
  store.dispatch(
    setOnlineUsers(
      userData.map((user) => {
        if (user.socketId === socketId) {
          user.myself = true;
        }
        return user;
      })
    )
  );
};

export const userDisconnectedHandler=(disconnectedUserSocketId)=>{
  store.dispatch(removeDisconnectedUser(disconnectedUserSocketId));
}
