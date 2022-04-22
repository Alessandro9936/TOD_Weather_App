import "../style.css";

import { apiCalls } from "./dataHandler";
import { UI } from "./viewHandler";

// eslint-disable-next-line no-unused-vars
const init = (() => {
  const searchCountryBtn = document.querySelector(".btn-search");

  searchCountryBtn.addEventListener("click", async () => {
    try {
      const country = document.querySelector(".input-search").value;
      // Display day
      await apiCalls.getPlaceCoords(country);
      const getWeatherDaysArr = apiCalls.getArray();
      UI.handleDisplay(getWeatherDaysArr);
    } catch (err) {
      return err;
    }
  });
})();
