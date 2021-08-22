import React, { useState } from "react";
import firebase from "firebase";

// import emailjs from "emailjs-com";
// import { init } from "emailjs-com";
// init("user_iKlFVYLk9kyYQV2fO6bD6");

export default function Form({ currentUser, reservationData, setReservationData}) {
  const [data, setData] = useState({
    priceClass: reservationData[0].type,
    num_people: "1",
  });

  function handleFormData(e) {
    e.preventDefault();
    console.log(data);

    firebase.firestore().collection("reservations").add({
      type: data.priceClass,
      num_people: data.num_people,
    });

    e.target.reset();
    setReservationData(false)
  }

  console.log(data);
  const arrAmountOfPeople = [];
  const amountOfPeople = reservationData[1].roomData.num_persons;
  for (let i = 0; i < amountOfPeople; i++) {
    arrAmountOfPeople.push(i + 1);
  }

  return (
    <>
      <form onSubmit={handleFormData}>
        <div>
          <label>Vælg antal personer</label>
          <select
            onChange={(e) => setData({ ...data, num_people: e.target.value })}
            required
          >
            {arrAmountOfPeople.map((i) => {
              return (
                <option key={i} value={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <p>Vælg prisklasse:</p>
          <label>
            <input
              type="radio"
              value="normal"
              name="priceClass"
              defaultChecked={reservationData[0].type === "NORMAL"}
              onChange={(e) => setData({ ...data, priceClass: e.target.value })}
            />
            Normal
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="flex"
              name="priceClass"
              defaultChecked={reservationData[0].type === "FLEX"}
              onChange={(e) => setData({ ...data, priceClass: e.target.value })}
            />
            flex
          </label>
        </div>
        <input type="submit" className="btn" />
      </form>
      
    </>
  );
}
