import React, {useState} from "react";
import { useHistory } from "react-router-dom";

export default function SelectedRoom({ roomData, setReservationData }) {
    const [roomToggle, setRoomToggle] = useState(true)
    const history = useHistory();

console.log("SELECTED")  

function handleReservation(type) {
    
    setReservationData([{type}, {roomData}])
    setRoomToggle(false)
    history.push("/");
}

  return (
       <>
       {roomToggle &&  <div>
        <div>
          <img src={roomData.images[0].image} alt={roomData.images[0].title} />
          <h3>{roomData.title}</h3>
          <p>
            {roomData.area}. Plads til {roomData.num_persons} personer.
          </p>
          <p>{roomData.description}</p>
          <h3>Fra {roomData.day_price_normal} DKK</h3>
        </div>
        <div>
          <p>Værelset er udstyret med:</p>
          <ul>
            {roomData.facilities.map((f) => {
              return <li key={f.id} >{f.title}</li>;
            })}
          </ul>
        </div>
        <div>
            <div>
                <h2>NORMAL pris inkl. morgenmad</h2>
                <p>Kan ikke ændres eller afbestilles</p>
                <div>
                    <h2>{roomData.day_price_normal} DKK/nat</h2>
                    <button onClick={() => handleReservation("NORMAL")}>Book</button>
                </div>
            </div>
            <div>
                <h2>Flex pris inkl. morgenmad</h2>
                <p>Kan ikke ændres eller afbestilles</p>
                <div>
                    <h2>{roomData.day_price_flex} DKK/nat</h2>
                    <button onClick={() => handleReservation("FLEX")} >Book</button>
                </div>
            </div>
        </div>
      </div>}
       </>
  );
}
