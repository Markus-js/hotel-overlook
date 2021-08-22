import React, { useState, useEffect } from "react";
import { fetch2api } from "../../helpers/helper";
import Room from "./Room";
import SelectedRoom from "./SelectedRoom";
import "./RoomList.scss";

export default function RoomList({ roomID, setHotelID, setReservationData }) {
  const [ID, setID] = useState(roomID)
  const [roomData, setRoomData] = useState({});
  const [roomToggle, setRoomToggle] = useState(false);
  const [roomListData, setRoomListData] = useState([]);
  const [URL, setURL] = useState(
    `https://api.mediehuset.net/overlook/rooms/by_hotel/${roomID}`
  );
  // Fetch API
  const getRoomData = async () => {
    const url = URL;
    const result = await fetch2api(url);
    setRoomListData(result?.items);
    setRoomData(result?.item);
  };
  // Lifecycle management
  useEffect(() => {
    //setHotelToggle(false)
    getRoomData();
    setHotelID(false);
  }, [URL]);
  return (
    <>
      <h2 className="intro">Vores værelser</h2>
      <section className="section_container" >
        {roomListData &&
          roomListData.map((room) => {
            return (
              <Room
                key={room.id}
                room={room}
                setURL={setURL}
                setRoomToggle={setRoomToggle}
              />
            );
          })}
        {roomData && roomToggle && (
          <SelectedRoom
            roomData={roomData}
            setReservationData={setReservationData}
            ID={ID}
            setID={setID}
            setURL={setURL}
            />
        )}
      </section>
    </>
  );
}
