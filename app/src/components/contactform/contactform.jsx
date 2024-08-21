"use client";
import { useState } from "react";
import styles from "./contactform.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    postcode: "",
    address: "",
    city: "",
    number: "",
    email: "",
  });

  const [error, setError] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.fullname ||
      !formData.postcode ||
      !formData.address ||
      !formData.city ||
      !formData.number ||
      !formData.email
    ) {
      setError(true);
      console.log("Testing case when no all fields filled");
      console.log("Error when no data", error);
      return;
    }
    if (error) {
      setError(false);
      console.log("Error when reset", error);
    }

    console.log("Testing case when all fields are filled!!!!!!!");
    console.log(formData);
  }

  console.log("Error outside of scope", error);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <fieldset className={`${styles.formFiedset} grid`}>
        <legend>Personal Information: </legend>
        <label htmlFor="fullname">
          Full Name:
          <input
            type="text"
            name="fullname"
            onChange={handleChange}
            value={formData.fullname}
          />
        </label>
        <label htmlFor="postcode">
          Postcode:{" "}
          <input
            type="text"
            name="postcode"
            onChange={handleChange}
            value={formData.postcode}
          />
        </label>
        <label htmlFor="address">
          Street Address:{" "}
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={formData.address}
          />
        </label>
        <label htmlFor="city">
          City:{" "}
          <input
            type="text"
            name="city"
            onChange={handleChange}
            value={formData.city}
          />
        </label>
      </fieldset>
      <fieldset className={`${styles.formFiedset} grid`}>
        <legend>Contact Information: </legend>
        <label htmlFor="number">
          Phone Number:{" "}
          <input
            type="text"
            name="number"
            onChange={handleChange}
            value={formData.number}
          />
        </label>
        <label htmlFor="email">
          Email Address:{" "}
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </label>
      </fieldset>
      <h1>{error ? "Please fill all fields" : ""}</h1>
      <button>Request Design Consultation</button>
    </form>
  );
}
