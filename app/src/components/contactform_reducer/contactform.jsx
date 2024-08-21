"use client";
import { useReducer, useState } from "react";
import styles from "./contactform.module.css";

const initialState = {
  data: {
    fullname: "",
    postcode: "",
    address: "",
    street: "",
    email: "",
    phone: "",
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FORM_DATA":
      let newState = { ...state }
      const fieldName = action.payload.name;
      const newFieldValue = action.payload.value;

      newState.data[fieldName] = newFieldValue;

      console.log(`Form data changed`)
      return newState;
      break;
  }

  console.log(`Reducer Function`);
  console.log(state);
  return state;
}

export default function ContactFormReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)

  function handleChange(e) {
    e.preventDefault();
    // setFormData((formData) => ({
    //   ...formData,
    //   [e.target.name]: e.target.value,
    // })); 


    dispatch({
      type: 'CHANGE_FORM_DATA',
      payload: {
        name: e.target.name,
        value: e.target.value
      }
    })
    console.log('State console log: ')
    console.log(state)
    console.log("handleChange function")
  }

  return (
    <>
      <h1>Contact Form Reducer</h1>
      <form>
        <fieldset>
          <label htmlFor="fullname">Full Name:
            <input
              type="text"
              name="fullname"
              onChange={handleChange}
            // value={initialState.data.fullname}
            /></label>
        </fieldset>
        <fieldset></fieldset>
      </form>
    </>
  )
}