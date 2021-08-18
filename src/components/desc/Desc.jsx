import { useState } from "react";


export default function Desc({place}) {

  let itDoes = []
  if (place) {
    let includesImage = Object.keys(place).includes("name");
    if (!includesImage) {
      // HOTEL DETAILTS = PLACE
      // itDoes.push(place.hotel_name)
      itDoes.push(place.title)
      itDoes.push(place.teaser)
    }
    if (includesImage) {
      // DEFAULT SETTING
      itDoes.push(place.name)
      itDoes.push(place.description)
    }
    
  }
  

  return (
    <div>
     <h3>Vores hoteller i {itDoes[0]} </h3>
     <p>{itDoes[1]} </p>
     <p>{itDoes[3]} </p>
     
    </div>
  );
}

