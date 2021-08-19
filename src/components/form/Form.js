import React, { useState } from "react";
import { fetch2api } from "../../helpers/helper";
// import emailjs from "emailjs-com";
// import { init } from "emailjs-com";
// init("user_iKlFVYLk9kyYQV2fO6bD6");



export default function Form() {
  const [data, setData] = useState({ name: "", email: "", tlf: "" });

  function handleFormData(e){
    e.preventDefault();
    console.log(data)
    e.target.reset();
  }
 

  console.log(data);

  return (
                 
    <form onSubmit={handleFormData}>
      <div>
        <label>Dit navn og efternavn:</label>
        <input
          name="name"
          type="text"
          placeholder="Anders Andersen"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Dit telefon nr.:</label>
        <input
          name="tlf"
          type="number"
          placeholder="+45 12 34 56 78"
          onChange={(e) => setData({ ...data, tlf: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Din mailadresse:</label>
        <input
          name="user_email"
          type="email"
          placeholder="example@email.com"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
      </div>
      <input type="submit" className="btn" />
    </form>
  );
}
