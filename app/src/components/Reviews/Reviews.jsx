"use client";
import React, { useEffect, useState } from "react";
import styles from "./review.module.css"


const Reviews = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [countriesData, setCountriesData] = useState(" ");

  console.log(selectedCountry);

  console.log("Countries data: ", countriesData);

  // Change currently selected country
  function handleCountryChange(country) {
    setSelectedCountry(country);
  }

  useEffect(() => {
    try {
      // Don't run fetch when there is no selected country
      if (selectedCountry === null) {
        return;
      }
      const fetchData = async () => {
        // Replacing keyword in fetch req with state variable
        const data = await fetch(
          `https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`
        );
        const parsedData = await data.json();
        setCountriesData(parsedData);
      };
      fetchData();
    } catch (err) {
      return console.log(err);
    }
  }, [selectedCountry]);

  return (
    <div className={`${styles.review_wrapper} flex center`} > 
      <div className={`${styles.review_header_wrapper} flex center`}>
        <h1> Trusted. </h1>
        <p>
          We`ve got thousands of happy customers all over the UK. Choose
          your country to see the latest review:
        </p>
      </div>
      <div className={`${styles.review_button_wrapper} flex center`}>
        <button onClick={() => handleCountryChange("England")}>
          England
        </button>
        <button onClick={() => handleCountryChange("Wales")}>
          Wales
        </button>
        <button onClick={() => handleCountryChange("Scotland")}>
          Scotland
        </button>
      </div>
      <div className={`${styles.review_user_wrapper} flex center`} >
        <div>{countriesData.text}</div>
        <div>
          {/* {countriesData.author} {countriesData ? "-" : " "}
          {countriesData.location} */}
          {selectedCountry !== null
            ? `${countriesData.author} - ${countriesData.location}`
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
