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
        <legend className={`${styles.formLegend}`}>Personal Information: </legend>
        <span className={`${styles.formLabelContainer} grid center`}>
          <label htmlFor="fullname" className={`${styles.formLabel} flex center`}>
            Full Name:
          </label>
          <input
            type="text"
            name="fullname"
            onChange={handleChange}
            value={formData.fullname}
            className={`${styles.formInput}`}
          />
        </span>
        <span className={`${styles.formLabelContainer} grid center`}>
          <label htmlFor="postcode" className={`${styles.formLabel} flex center`}>
            Postcode:{" "}
          </label>
          <input
            type="text"
            name="postcode"
            onChange={handleChange}
            value={formData.postcode}
            className={`${styles.formInput}`}
          />
        </span>
        <span className={`${styles.formLabelContainer} grid center`}>
          <label htmlFor="address" className={`${styles.formLabel} flex center`}>
            Street Address:{" "}
          </label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={formData.address}
            className={`${styles.formInput}`}
          />
        </span>
        <span className={`${styles.formLabelContainer} grid center`}>
          <label htmlFor="city" className={`${styles.formLabel} flex center`}>
            City:{" "}
          </label>
          <input
            type="text"
            name="city"
            onChange={handleChange}
            value={formData.city}
            className={`${styles.formInput}`}
          />
        </span>
      </fieldset>
      <fieldset className={`${styles.formFiedset} grid`}>
        <legend>Contact Information: </legend>
        <span className={`${styles.formLabelContainer} grid center`}>
          <label htmlFor="number" className={`${styles.formLabel} flex center`}>
            Phone Number:{" "}</label>
          <input
            type="text"
            name="number"
            onChange={handleChange}
            value={formData.number}
            className={`${styles.formInput}`}
          />
        </span>
        <span className={`${styles.formLabelContainer} grid center`}>
          <label htmlFor="email" className={`${styles.formLabel} flex center`}>
            Email Address:{" "}</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className={`${styles.formInput}`}
          />
        </span>
      </fieldset>
      <h1>{error ? "Please fill all fields" : ""}</h1>
      <button>Request Design Consultation</button>
    </form>
  );
}
