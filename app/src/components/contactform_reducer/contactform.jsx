"use client"; // This directive indicates that the code is running on the client side !!

import { useReducer, useState } from "react"; // Importing the useReducer hook from React !!

import styles from "./contactform.module.css"; // Importing CSS module for styling the form !!

const initialState = {
  // Initial state of the form ##
  data: {
    fullname: "",
    postcode: "",
    address: "",
    city: "",
    email: "",
    phone: "",
  },
  errorStatus: false, // Error status flag ##
  errorMessage: "", // Error message string ##
  buttonStatus: "",
};

function reducer(state, action) {
  // Reducer function to handle state changes ##
  switch (action.type) {
    // Switch statement to handle different action types ##
    case "CHANGE_FORM_DATA":
      // Action to change form data ##
      let newState = { ...state }; // Create a copy of the current state ??
      const fieldName = action.payload.name; // Get the name of the field to update **
      const newFieldValue = action.payload.value; // Get the new value for the field **

      newState.data[fieldName] = newFieldValue; // Update the field in the state ##
      return newState; // Return the updated state ##
    case "SET_ERROR":
      // Action to set an error !!
      return {
        ...state,
        errorStatus: true,
        errorMessage: action.payload.message,
        buttonStatus: action.payload.status,
      };
    case "CLEAR_ERROR":
      // Action to clear an error ##
      return {
        ...state,
        errorStatus: false,
        errorMessage: "",
        buttonStatus: action.payload.status,
      };
    case "SUBMITTING_FORM":
      return {
        ...state,
        buttonStatus: action.payload.status,
      };
    case "SUBMITTED_FORM":
      document.getElementById("form").reset();
      return {
        ...state,
        buttonStatus: action.payload.status,
      };
    default:
      // Default case if action type is not recognized ##
      return state;
  }
}

export default function ContactFormReducer() {
  // Main component function ##
  const [state, dispatch] = useReducer(reducer, initialState); // Using the useReducer hook with the reducer function and initial state !!

  // Check for valid input
  const [isValid, setIsValid] = useState(null);

  function handleChange(e) {
    // Function to handle changes in form inputs ##
    e.preventDefault(); // Prevent the default form submission behavior !!
    dispatch({
      type: "CHANGE_FORM_DATA",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    }); // Dispatches an action to update form data in the state ??
    // Checks if the form data has changed and updates the state accordingly ??
  }

  function handleSubmit(e) {
    // Function to handle form submission ##
    e.preventDefault(); // Prevent the default form submission behavior !!

    //Display an error when not all fields are filled 👌
    //Once all fields are filled change the button to 'Submitting' 👌
    //Hide error
    //Make a delay to change form button to 'Submitted'
    //Update trenary operator to include 'Submitted' state

    dispatch({
      type: "SUBMITTING_FORM",
      payload: {
        status: "Submitting",
      },
    });
    if (
      !state.data.fullname ||
      !state.data.postcode ||
      !state.data.address ||
      !state.data.city ||
      !state.data.phone ||
      !state.data.email
    ) {
      dispatch({
        type: "SET_ERROR",
        payload: { message: "Please fill all fields", status: "" },
      }); // Sets an error message if any form field is empty !!
      return;
    }
    dispatch({
      type: "CLEAR_ERROR",
      payload: {
        message: null,
        status: "Submitting",
      },
    });
    setTimeout(() => {
      // if (state.buttonStatus.value === "Submitting") {
      dispatch({
        type: "SUBMITTED_FORM",
        payload: {
          status: "Submitted",
        },
      });
      // }
    }, 3000);
  }

  return (
    <>
      <span className={`flex center`}>
        <h1 className={`${styles.title}`}>Booking</h1>
      </span>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={`${styles.form} grid center`}
        id="form"
      >
        <fieldset className={`${styles.formFieldset} grid`}>
          <legend className={`${styles.formLegend}`}>
            Personal Information:
          </legend>
          <span
            className={`${styles.formLabelContainer} grid center`}
          >
            <label
              htmlFor="fullname"
              className={`${styles.formLabel} flex`}
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
              className={`${styles.formLabel} flex`}
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
              className={`${styles.formLabel} flex`}
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
              className={`${styles.formLabel} flex`}
            >
              City:{" "}
            </label>
            <input
              type="text"
              name="city"
              // pattern="[a-z]"
              onChange={handleChange}
              className={`${styles.formInput}`}
            />
          </span>
        </fieldset>
        <fieldset className={`${styles.formFieldset} grid`}>
          <legend className={`${styles.formLegend}`}>
            Contact Information:{" "}
          </legend>

          <span
            className={`${styles.formLabelContainer} grid center`}
          >
            <label
              htmlFor="phone"
              className={`${styles.formLabel} flex`}
            >
              Phone Number:{" "}
            </label>
            <input
              type="tel"
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
              className={`${styles.formLabel} flex`}
            >
              Email Address:{" "}
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className={`${styles.formInput}`}
            />
          </span>
        </fieldset>
        {state.errorStatus ? (
          <span
            className={`${styles.formErrorContainer} flex center`} id="errorMessage">
            <h3 className={`${styles.formError} flex center`}>
              ⚠︎&nbsp; &nbsp; &nbsp; Please fill in all fields!&nbsp;
              &nbsp; &nbsp; ⚠︎
            </h3>
          </span>
        ) : (
          ""
        )}
        <button className={`${styles.formButton} center`} id="submitButton">
          {state.buttonStatus === "Submitting"
            ? `Submitting...`
            : state.buttonStatus === "Submitted"
              ? `Submitted ✅`
              : `Request Design Consultation`}
        </button>
      </form>
    </>
  );
}
