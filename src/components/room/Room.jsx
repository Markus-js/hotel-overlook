import React, {useState, useEffect} from "react";
import { fetch2api } from "../../helpers/helper";
import classes from "./Room.module.scss";

export default function Room({place}) {
  const [roomData, setRoomData] = useState({});
 // Fetch API
 const getRoomData = async () => {
    const url = "https://api.mediehuset.net/overlook/rooms/by_hotel/11";
    const result = await fetch2api(url);
    setRoomData(result?.items);
  };
  // Lifecycle management
  useEffect(() => {
    //setHotelToggle(false)
    getRoomData();
  }, []);
  console.log("ROOM")
console.log(roomData)
  return (
    <div>
      <h1>{roomData.id} </h1>
    </div>
  );
}
