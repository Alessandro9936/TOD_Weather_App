/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */

import { format, addDays } from "date-fns";

export const apiCalls = (() => {
  const API_KEY_WEATHER = "ab730ae7d0667fef9151fd3329107d0d";
  const API_KEY_POSITION = "41b91df81b7b4a7c0e2add20e1b46987";
  const weatherDaysArr = [];

  const getArray = () => [...weatherDaysArr];

  const getPlaceCoords = async (place) => {
    try {
      const response = await fetch(
        `http://api.positionstack.com/v1/forward?access_key=${API_KEY_POSITION}&query=${place}&limit=1`
      );
      const data = await response.json();
      const { latitude, longitude } = data.data[0];
      return _getWeatherByCords(latitude, longitude);
    } catch (err) {
      return err;
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
      return err;
    }
  }

  function _createWeatherDays(daysWeather) {
    const formatDay = "ccc";
    const formatDate = "EEEE dd LLL. yyyy";

    const weatherDays = daysWeather.map((day, index) => ({
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
    weatherDaysArr.push(...weatherDays);
    // console.log(weatherDaysArr);
  }

  return {
    getPlaceCoords,
    getArray,
  };
})();

export const a = 1;
