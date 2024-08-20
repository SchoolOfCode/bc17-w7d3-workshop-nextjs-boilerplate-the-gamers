"use client";
import { useState } from "react";
import styles from "./contactform.module.css";

export default function ContactForm() {
  const [fullName, setFullName] = useState(null);
  const [postcode, setPostcode] = useState(null);
  const [address, setAddress] = useState(null);
  const [city, setCity] = useState(null);
  const [number, setNumber] = useState(null);
  const [email, setEmail] = useState(null);

  //Add attributes to inputs
  //Grab input value and assign it to the fullName state
  //funmction handleInputChange
  //add onChange event listener to input

  function handleFullNameChange(e) {
    e.preventDefault();
    setFullName(e.target.value);
    console.log(e.target.value);
  }

  return (
    <form>
      <fieldset className={`${styles.formFiedset} grid`}>
        <legend>Personal Information: </legend>
        <label for="fullname">
          Full Name:
          <input
            type="text"
            name="fullname"
            onChange={handleFullNameChange}
            value={fullName}
          />
        </label>
        <label for="postcode">
          Postcode: <input type="text" name="postcode" />
        </label>
        <label for="address">
          Street Address: <input type="text" name="address" />
        </label>
        <label for="city">
          City: <input type="text" name="city" />
        </label>
      </fieldset>
      <fieldset className={`${styles.formFiedset} grid`}>
        <legend>Contact Information: </legend>
        <label for="number">
          Phone Number: <input type="text" name="number" />
        </label>
        <label for="email">
          Email Address: <input type="text" name="email" />
        </label>
      </fieldset>
      <button>Request Design Consultation</button>
    </form>
  );
}
