import React, { useState, useEffect } from "react";
import firebase from "firebase";
import classes from "./AdmindReservation.module.scss"

export default function AdmindReservation() {
  const [reservationList, setReservationList] = useState();

  useEffect(() => {
    firebase
      .firestore()
      .collection("reservations")
      .onSnapshot((snapshot) => {
        const reservation = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setReservationList(reservation);
      });
  }, []);

  function handleDelete(id) {
    const docRef = firebase.firestore()
      .collection("reservations")
      .doc("reservations")
      .collection("Messages");

    docRef.doc({ id }).delete();
  }
  console.log(reservationList);
  return (
    <>
      {reservationList && (
        <div className={classes.container} >
          {reservationList.map((r) => {
            return (
              <div key={r.id} className={classes.wrapper}>
                <span>{r.type}</span>
                <span>{r.num_people}</span>
                <span onClick={() => handleDelete(r.id)}>X</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
