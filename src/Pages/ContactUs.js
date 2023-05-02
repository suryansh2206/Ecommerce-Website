import classes from "./ContactUs.module.css";
import React, { useRef } from "react";

function ContactUs() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const numberRef = useRef("");

  const submitHandler = async (event) => {
    event.preventDefault();

    // could add validation here...

    const contact = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      number: numberRef.current.value,
    };

    const response = await fetch(
      "https://react-http-a080a-default-rtdb.firebaseio.com/contacts.json",
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email ID</label>
          <input type="text" id="email" ref={emailRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="number">Phone Number</label>
          <input type="number" id="number" ref={numberRef} />
        </div>
        <button>Store</button>
      </form>
    </div>
  );
}

export default ContactUs;
