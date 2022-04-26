/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */

import { format, addDays } from "date-fns";

export const apiCalls = (() => {
  const API_KEY_WEATHER = "ab730ae7d0667fef9151fd3329107d0d";
  const API_KEY_POSITION = "ea5415dbcdba4198878f55403fefc4af";

  let weatherDaysArr;
  let country;
  let city;

  const getArray = () => weatherDaysArr;

  const getCityCoords = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=${API_KEY_POSITION}`
      );
      const data = await response.json();
      const [{ city: country }] = data.results;
      return country;
    } catch (err) {
      console.error(err);
    }
  };

  const getPlaceCoords = async (place) => {
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${place}&limit1&format=json&apiKey=${API_KEY_POSITION}`
      );
      const data = await response.json();
      [{ country, city }] = data.results;
      const [{ lat, lon }] = data.results;
      return _getWeatherByCords(lat, lon);
    } catch (err) {
      console.error(err);
    }
  };

  async function _getWeatherByCords(lat, lon) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,current,alerts&appid=${API_KEY_WEATHER}`
      );
      const data = await response.json();
      return _createWeatherDays(data.daily);
    } catch (err) {
      console.error(err);
    }
  }

  function _createWeatherDays(daysWeather) {
    const formatDay = "ccc";
    const formatDate = "EEEE dd LLL. yyyy";

    const weatherDays = daysWeather.map((day, index) => ({
      town: city,
      nation: country,
      day: `${format(addDays(new Date(), index), formatDay)}`,
      date: `${format(addDays(new Date(), index), formatDate)}`,
      weatherDescription: `${day.weather[0].description}`,
      percievedTemp: +`${Math.floor(day.feels_like.day)}`,
      min: +`${Math.floor(day.temp.min)}`,
      max: +`${Math.floor(day.temp.max)}`,
      humidity: +`${day.humidity}`,
      icon: `${day.weather[0].icon}`,
    }));
    return _pushWeatherDays(weatherDays);
  }

  function _pushWeatherDays(weatherDays) {
    weatherDaysArr = [...weatherDays];
  }

  return {
    getPlaceCoords,
    getCityCoords,
    getArray,
  };
})();
