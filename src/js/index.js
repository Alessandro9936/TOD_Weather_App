import "../style.css";

import { apiCalls } from "./dataHandler";

// eslint-disable-next-line no-unused-vars
const init = (() => {
  const searchCountryBtn = document.querySelector(".btn-search");

  searchCountryBtn.addEventListener("click", async () => {
    try {
      const country = document.querySelector(".input-search").value;
      // Display day
      await apiCalls.getPlaceCoords(country);
      const getWeatherDaysArr = apiCalls.getArray();
      console.log(getWeatherDaysArr);
    } catch (err) {
      return err;
    }
  });
})();
