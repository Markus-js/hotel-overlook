import React from "react";

import arrowDown from "../../assets/arrow-down.svg";

export default function Room({ room, setURL, setRoomToggle }) {
  function handleSelectedRoom(id) {
    setURL(`https://api.mediehuset.net/overlook/rooms/${id}`);
    setRoomToggle(true);
  }

  return (
    <>
      <div className="container">
        <div>
          <img src={room.images[0].image} alt={room.images[0].title} />
        </div>
        <div>
          <h2>{room.room_title} </h2>
          <p>
            {room.area}. Plads til {room.num_persons} personer.
          </p>
          <p>{room.description}</p>
          <h3>Fra {room.day_price_normal} DKK</h3>
        </div>
        <div className="btn_return" onClick={() => handleSelectedRoom(room.id)}>
          <img src={arrowDown} alt="arrow_icon" />
        </div>
      </div>
    </>
  );
}
