import React from 'react'
import Form from "../form/Form"

export default function Reservation({reservationData}) {
    return (
        <div>
            <h1>Reservation</h1>
            <p>Udfyld nedenstående formular med din oplevelse af vores hotel.</p>
            <Form />
        </div>
    )
}
