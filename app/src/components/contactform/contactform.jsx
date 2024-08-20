"use client";
import { useState } from "react";
import styles from "./contactform.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState('');

  //Add attributes to inputs
  //Grab input value and assign it to the fullName state
  //funmction handleInputChange
  //add onChange event listener to input

  function handleChange(e) {
    e.preventDefault();
    setFormData((formData) =>
      ({ ...formData, [e.target.name]: e.target.value })
    );
    console.log(formData);
  }

  return (
    <form>
      <fieldset className={`${styles.formFiedset} grid`}>
        <legend>Personal Information: </legend>
        <label htmlFor="fullname">
          Full Name:
          <input
            type="text"
            name="fullname"
            onChange={handleChange}
            value={formData.fullName}
          />
        </label>
        <label htmlFor="postcode">
          Postcode: <input type="text" name="postcode"
            onChange={handleChange} />
        </label>
        <label htmlFor="address">
          Street Address: <input type="text" name="address"
            onChange={handleChange} />
        </label>
        <label htmlFor="city">
          City: <input type="text" name="city"
            onChange={handleChange} />
        </label>
      </fieldset>
      <fieldset className={`${styles.formFiedset} grid`}>
        <legend>Contact Information: </legend>
        <label htmlFor="number">
          Phone Number: <input type="text" name="number"
            onChange={handleChange} />
        </label>
        <label htmlFor="email">
          Email Address: <input type="text" name="email"
            onChange={handleChange} />
        </label>
      </fieldset>
      <button>Request Design Consultation</button>
    </form>
  );
}
