import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import arrowUp from "../../assets/arrow-up.svg"

export default function SelectedRoom({
  roomData,
  setReservationData,
  ID,
  setURL
}) {
  const [roomToggle, setRoomToggle] = useState(true);
  const history = useHistory();

  console.log("SELECTED");

  function handleReservation(type) {
    setReservationData([{ type }, { roomData }]);
    setRoomToggle(false);
    history.push("/");
  }

  function handlePrevRooms(ID) {
    setURL(`https://api.mediehuset.net/overlook/rooms/by_hotel/${ID}`)
  }

  return (
    <div>
      {roomToggle && (
        <div>
          <div className="container">
            <div>
              <img
                src={roomData.images[0].image}
                alt={roomData.images[0].title}
              />
            </div>
            <div className="room_desc">
              <h2>{roomData.title}</h2>
              <p>
                {roomData.area}. Plads til {roomData.num_persons} personer.
              </p>
              <p>{roomData.description}</p>
              <h3>Fra {roomData.day_price_normal} DKK</h3>
            </div>
          </div>
          <div className="details">
            <div>
              <h4>Værelset er udstyret med:</h4>
              <ul>
                {roomData.facilities.map((f) => {
                  return (
                    <div>
                      <li key={f.id}>{f.title}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="booking_container">
              <div className="booking_card">
                <h2>NORMAL pris inkl. morgenmad</h2>
                <p>Kan ikke ændres eller afbestilles</p>
                <div className="wrap">
                  <h2>{roomData.day_price_normal} DKK/nat</h2>
                  <button
                    className="btn"
                    onClick={() => handleReservation("NORMAL")}
                  >
                    Book
                  </button>
                </div>
              </div>
              <div className="booking_card">
                <h2>Flex pris inkl. morgenmad</h2>
                <p>Kan ikke ændres eller afbestilles</p>
                <div className="wrap">
                  <h2>{roomData.day_price_flex} DKK/nat</h2>
                  <button
                    className="btn"
                    onClick={() => handleReservation("FLEX")}
                  >
                    Book
                  </button>
                </div>
                
              </div>
              
            </div>
            <div className="btn_return"
            onClick={() => {
              handlePrevRooms(ID);
            }}
          >
            <img src={arrowUp} alt="arrow_icon" />
          </div>
          </div>
          
        </div>
      )}
    </div>
  );
}
