"use client";
import React, { useEffect, useState } from "react";

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
    const fetchData = async () => {
      // Replacing keyword in fetch req with state variable
      const data = await fetch(
        `https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`
      );
      const parsedData = await data.json();
      setCountriesData(parsedData);
    };
    fetchData();
  }, [selectedCountry]);

  return (
    <div>
      <h1> Trusted. </h1>
      <p> We've got thousands of happy customers all over the UK. Choose your country to see the latest review: </p>
      <button onClick={() => handleCountryChange("England")}>
        England
      </button>
      <button onClick={() => handleCountryChange("Wales")}>
        Wales
      </button>
      <button onClick={() => handleCountryChange("Scotland")}>
        Scotland
      </button>
      <div>
        {countriesData.text}
      </div>
      <div>
        {countriesData.author} {countriesData ? "-" : " "} {countriesData.location}
      </div>
    </div>
  );
};

export default Reviews;
