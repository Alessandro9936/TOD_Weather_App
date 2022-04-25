/* eslint-disable no-use-before-define */
import "../style.css";

import { apiCalls } from "./dataHandler";
import { UI } from "./viewHandler";

// eslint-disable-next-line no-unused-vars
const init = (() => {
  const searchCityBtn = document.querySelector(".btn-search");
  const metricBtn = document.querySelectorAll(".btn");
  navigator.geolocation.getCurrentPosition(getCurrentLatLon);

  function getCurrentLatLon(curPos) {
    const { latitude, longitude } = curPos.coords;
    getCurrentCity(latitude, longitude);
  }

  async function getCurrentCity(lat, lon) {
    try {
      const curCity = await apiCalls.getCoords(lat, lon);
      apiCords(curCity);
    } catch (err) {
      console.error(err);
    }
  }

  searchCityBtn.addEventListener("click", () => {
    const city = document.querySelector(".input-search").value;
    apiCords(city);
  });

  async function apiCords(city) {
    try {
      await apiCalls.getPlaceCoords(city);
      const getWeatherDaysArr = apiCalls.getArray();
      return UI.handleDisplay(getWeatherDaysArr, city);
    } catch (err) {
      return err;
    }
  }

  metricBtn.forEach((btn) =>
    btn.addEventListener("click", (e) => UI.checkMetric(e.target))
  );
})();
