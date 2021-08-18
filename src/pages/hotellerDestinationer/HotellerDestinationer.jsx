import React, { useState, useEffect } from "react";
import { fetch2api } from "../../helpers/helper";
import classes from "./HotellerDestinationer.module.scss";
import NavCountry from "../../components/navCountry/NavCountry";
import Cities from "../../components/cities/Cities";
import Hotel from "../../components/hotel/Hotel";
import Header from "../../components/header/Header";
import Desc from "../../components/desc/Desc";
import Room from "../../components/room/Room";

export default function HotellerDestinationer() {
  const [URL, setURL] = useState(
    `https://api.mediehuset.net/overlook/countries/`
  );
  const [data, setData] = useState(1);
  const [place, setPlace] = useState("");
  // Toggle Hotel
  const [hotelID, setHotelID] = useState(false);
  const [hotelToggle, setHotelToggle] = useState(false);
  // Toggle Room
  const [roomID, setRoomID] = useState(false)
  const [roomToggle, setRoomToggle] = useState(false);

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

  console.log(place)

  return (
    <>
      <Header place={place} />  
      <section>
        <NavCountry setData={setData} setURL={setURL} />
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
            {roomID && <Room setRoomToggle={setRoomToggle} />}
          </div>
        </div>
      </section>
    </>
  );
}
