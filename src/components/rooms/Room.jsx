import React from 'react'

export default function Room({room, setURL, setRoomToggle}) {

  function handleSelectedRoom(id) {
    setURL(`https://api.mediehuset.net/overlook/rooms/${id}`)
    setRoomToggle(true)
  }

  return (
      <div  onClick={() => handleSelectedRoom(room.id)} >
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
  )
}
