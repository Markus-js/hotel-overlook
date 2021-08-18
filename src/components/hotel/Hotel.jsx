import React, { useState, useEffect } from "react";
import { fetch2api } from "../../helpers/helper";
import classes from "./Hotel.module.scss";

export default function Hotel({ data, hotelID, setURL, setRoomID}) {
  const [hotelData, setHotelData] = useState([]);

  // Fetch API
  const getHotel = async () => {
    const url = `https://api.mediehuset.net/overlook/hotels/by_city/${hotelID}`;
    const result = await fetch2api(url);
    setHotelData(result?.items);
  };
  // Lifecycle management
  useEffect(() => {
    getHotel();
  }, [data]);

  function handlePickHotel(id) {
    setRoomID(id)
    setURL(`https://api.mediehuset.net/overlook/hotels/${id}`)
  }
console.log("HOTEL")
  return (
    <>
      {hotelID &&
        hotelData.map((hotel, idx) => {
          return (
            <div
              onClick={() => handlePickHotel(hotel.id)}
              className={classes.card}
              key={idx}
            >
              <div>
                <img src={hotel.image} alt={hotel.title} />
              </div>
              <div>
                <h3>{hotel.title}</h3>
              </div>
            </div>
          );
        })}
    </>
  );
}
