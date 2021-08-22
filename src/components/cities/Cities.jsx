import React, { useState, useEffect } from "react";
import { fetch2api } from "../../helpers/helper";
import classes from "./Cities.module.scss"
export default function Countries({ data, setData, setURL, setHotelID }) {
  const [cityData, setCityData] = useState([]);

  // Fetch API
  const getCityData = async () => {
    const url = `https://api.mediehuset.net/overlook/cities/by_country/${data}`;
    const result = await fetch2api(url);
    setCityData(result?.items);
  };
  // Lifecycle management
  useEffect(() => {
    getCityData();
  }, [data]);
  
  function handlePickCity(id) {
    setData("")
    setHotelID(id)
    // Show hotels
   // setHotelToggle(true)
    setURL(`https://api.mediehuset.net/overlook/cities/${id}`)
  }
  console.log("CITIES")
  return (
    <>
      {data &&
        cityData.map((city, idx) => {
          return (
            <div onClick={() => handlePickCity(city.id)} className="card" key={idx} >
              <div>
                <img src={city.image} alt={city.name} />
              </div>
              <div>
                <h3>{city.name}</h3>
              </div>
            </div>
          );
        })}
    </>
  );
}
