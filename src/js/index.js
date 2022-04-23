/* eslint-disable no-use-before-define */
import "../style.css";

import { apiCalls } from "./dataHandler";
import { UI } from "./viewHandler";

// eslint-disable-next-line no-unused-vars
const init = (() => {
  const searchCountryBtn = document.querySelector(".btn-search");
  navigator.geolocation.getCurrentPosition(getCurrentPosition);

  async function getCurrentPosition(curPos) {
    const { latitude, longitude } = curPos.coords;
    const curCountry = await apiCalls.getCoords(latitude, longitude);
    apiCords(curCountry);
  }

  searchCountryBtn.addEventListener("click", () => {
    const country = document.querySelector(".input-search").value;
    apiCords(country);
  });

  async function apiCords(country) {
    try {
      await apiCalls.getPlaceCoords(country);
      const getWeatherDaysArr = apiCalls.getArray();
      UI.handleDisplay(getWeatherDaysArr, country);
    } catch (err) {
      return err;
    }
  }
})();
