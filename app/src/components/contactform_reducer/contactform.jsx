"use client";
import { useReducer } from "react";
import styles from "./contactform.module.css";

const initialState = {
  data: {
    fullname: "",
    postcode: "",
    address: "",
    city: "",
    email: "",
    phone: "",
  },
  errorStatus: false,
  errorMessage: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FORM_DATA":
      let newState = { ...state };
      const fieldName = action.payload.name;
      const newFieldValue = action.payload.value;

      if (!newFieldValue) {
        return { errorStatus: true };
      }

      newState.data[fieldName] = newFieldValue;
      return newState;
    case "SET_ERROR":
      return {
        ...state,
        errorStatus: true,
        errorMessage: action.payload.message,
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        errorStatus: false,
      };
  }

  console.log(`Reducer Function`);
  console.log("Data", state);
  return state;
}

export default function ContactFormReducer() {
  //Takes initial state and pass it to reducer function
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e) {
    e.preventDefault();
    dispatch({
      type: "CHANGE_FORM_DATA",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    //Case when one of the field is not filled
    if (
      !initialState.data.fullname ||
      !initialState.data.postcode ||
      !initialState.data.address ||
      !initialState.data.city ||
      !initialState.data.phone ||
      !initialState.data.email
    ) {
      //Dispatch an action
      //Set error when one of the field is not filled
      dispatch({
        type: "SET_ERROR",
        payload: { message: "Please fill all fields" },
      });
      return;
    } else {
      //Clear error when user fill all the fields
      dispatch({
        type: "CLEAR_ERROR",
        payload: { message: null },
      });
    }
  }

  return (
    <>
      <h1>Contact Form Reducer</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset className={`${styles.formFiedset} grid`}>
          <legend className={`${styles.formLegend}`}>
            Personal Information:{" "}
          </legend>
          <span
            className={`${styles.formLabelContainer} grid center`}
          >
            <label
              htmlFor="fullname"
              className={`${styles.formLabel} flex center`}
            >
              Full Name:
            </label>
            <input
              type="text"
              name="fullname"
              onChange={handleChange}
              className={`${styles.formInput}`}
            />
          </span>
          <span
            className={`${styles.formLabelContainer} grid center`}
          >
            <label
              htmlFor="postcode"
              className={`${styles.formLabel} flex center`}
            >
              Postcode:{" "}
            </label>
            <input
              type="text"
              name="postcode"
              onChange={handleChange}
              className={`${styles.formInput}`}
            />
          </span>
          <span
            className={`${styles.formLabelContainer} grid center`}
          >
            <label
              htmlFor="address"
              className={`${styles.formLabel} flex center`}
            >
              Street Address:{" "}
            </label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              className={`${styles.formInput}`}
            />
          </span>
          <span
            className={`${styles.formLabelContainer} grid center`}
          >
            <label
              htmlFor="city"
              className={`${styles.formLabel} flex center`}
            >
              City:{" "}
            </label>
            <input
              type="text"
              name="city"
              onChange={handleChange}
              className={`${styles.formInput}`}
            />
          </span>
        </fieldset>
        <fieldset className={`${styles.formFiedset} grid`}>
          <legend>Contact Information: </legend>
          <span
            className={`${styles.formLabelContainer} grid center`}
          >
            <label
              htmlFor="number"
              className={`${styles.formLabel} flex center`}
            >
              Phone Number:{" "}
            </label>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              className={`${styles.formInput}`}
            />
          </span>
          <span
            className={`${styles.formLabelContainer} grid center`}
          >
            <label
              htmlFor="email"
              className={`${styles.formLabel} flex center`}
            >
              Email Address:{" "}
            </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              className={`${styles.formInput}`}
            />
          </span>
        </fieldset>
        <h1>{state.errorStatus ? "Please fill all fields" : ""}</h1>
        <button>Request Design Consultation</button>
      </form>
    </>
  );
}
