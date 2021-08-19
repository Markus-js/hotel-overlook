import React, { useState, useEffect } from "react";
import { fetch2api } from "../../helpers/helper";
import classes from "./HotellerDestinationer.module.scss";
import NavCountry from "../../components/navCountry/NavCountry";
import Cities from "../../components/cities/Cities";
import Hotel from "../../components/hotel/Hotel";
import Header from "../../components/header/Header";
import Desc from "../../components/desc/Desc";
import RoomList from "../../components/rooms/RoomList";
import Reservation from "../../components/reservation/Reservation";

export default function HotellerDestinationer() {
  const [URL, setURL] = useState(
    `https://api.mediehuset.net/overlook/countries/`
  );
  const [data, setData] = useState(1);
  const [place, setPlace] = useState("");
  // Toggle Hotel
  const [hotelID, setHotelID] = useState(false);
  // Toggle Room
  const [roomID, setRoomID] = useState(false)
  // Reservation Data
  const [reservationData, setReservationData] = useState()

  // Fetch API
  const getplace = async () => {
    const url = URL + `${data}`;
    console.log(url);
    const result = await fetch2api(url);
    setPlace(result?.item);
  };
  // Lifecycle management
  useEffect(() => {
    getplace();
  }, [data, URL]);

  console.log(reservationData)

  return (
    <>
      <Header place={place} />  
      <section>
        {/* setRoomID False */}
        <NavCountry setData={setData} setURL={setURL} setRoomID={setRoomID}/>
        <div>
           <Desc place={place} />
          <div className={classes.cityContainer}>
            {data && (
              <Cities
                data={data}
                setData={setData}
                setURL={setURL}
                setHotelID={setHotelID}
              />
            )}
            {hotelID && (
              <Hotel
              data={data}
                hotelID={hotelID}
                setURL={setURL}
                setRoomID={setRoomID}
              />
            )}
            {roomID && <RoomList roomID={roomID} setHotelID={setHotelID} setReservationData={setReservationData} />}
            {reservationData && <Reservation reservationData={reservationData} />}
          </div>
        </div>
      </section>
    </>
  );
}
