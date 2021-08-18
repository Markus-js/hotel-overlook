import React, { useState, useEffect } from "react";
import { fetch2api } from "../../helpers/helper";
import classes from "./Room.module.scss";

export default function Room({ data, roomID, setHotelID }) {
  const [roomData, setRoomData] = useState([]);
  // Fetch API
  const getRoomData = async () => {
    const url = `https://api.mediehuset.net/overlook/rooms/by_hotel/${roomID}`;
    const result = await fetch2api(url);
    setRoomData(result?.items);
  };
  // Lifecycle management
  useEffect(() => {
    //setHotelToggle(false)
    getRoomData();
    setHotelID(false);
    
  }, [roomID]);
  console.log("ROOM");
  console.log(roomData);
  return (
    <>
      <h3>Vores værelser</h3>
      {roomID && roomData.map((room) => {
        return (
          <div >
            <div>
              <img src={room.images[0].image} alt={room.images[0].title} />
            </div>
            <div>
              <h3>{room.room_title} </h3>
              <p>
                {room.area} Plads til {room.num_persons} personer.
              </p>
              <p>{room.description}</p>
              <h3>Fra {room.day_price_normal} DKK</h3>
            </div>
          </div>
        );
      })}
    </>
  );
}
