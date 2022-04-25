/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
export const UI = (() => {
  const descriptionContainer = document.querySelector(".desc-container");
  const dayOverview = document.querySelector(".day-overview");
  // Description container
  const cityDesc = document.querySelector("[data-city]");
  const dayDesc = document.querySelector("[data-day]");
  const weatherDesc = document.querySelector("[data-weather]");
  const minDesc = document.querySelector("[data-min]");
  const maxDesc = document.querySelector("[data-max]");
  const humidityDesc = document.querySelector("[data-humidity]");
  // dayOverview Container
  const tempOver = document.querySelector("[data-temp-now]");
  const cityOver = document.querySelector("[data-city-now]");
  const dayOver = document.querySelector("[data-today]");

  let array;

  const handleDisplay = (weatherDaysArr) => {
    array = weatherDaysArr;
    _checkInputMetric();
    _displayPreviews(array);
  };

  function _displayPreviews(weatherArr) {
    const dayPreviewCont = document.querySelector(".days");
    dayPreviewCont.innerHTML = "";

    weatherArr.forEach((day, index) => {
      const div = document.createElement("div");
      div.classList.add("day");
      const date = document.createElement("p");
      const img = document.createElement("img");
      date.textContent = `${day.day}`;
      img.src = `http://openweathermap.org/img/wn/${day.icon}@2x.png`;

      div.append(date, img);
      dayPreviewCont.appendChild(div);
      div.addEventListener("click", () => _displayDaySpec(day));
      if (index === 0) _displayDaySpec(day);
    });
  }

  function _displayDaySpec(day) {
    descriptionContainer.classList.add("fade-content");
    dayOverview.classList.add("fade-content");

    cityDesc.textContent = `${day.town.toUpperCase()}, ${day.nation.toUpperCase()}`;
    dayDesc.textContent = `${day.date}`;
    weatherDesc.textContent = `${
      day.weatherDescription[0].toUpperCase() + day.weatherDescription.slice(1)
    }`;
    minDesc.textContent = `${day.min}°`;
    maxDesc.textContent = `${day.max}°`;
    humidityDesc.textContent = `${day.humidity}%`;

    tempOver.textContent = `${day.percievedTemp}°`;
    cityOver.textContent = `${day.town.toUpperCase()}`;
    dayOver.textContent = `${day.date}`;
  }

  function _checkInputMetric() {
    const activeMetric = document.querySelector(".btn-focus");
    activeMetric.dataset.metric === "Fahrenheit" ? _toFahrenheit() : "";
  }

  const checkMetric = (target) => {
    if (
      target.dataset.metric === "Fahrenheit" &&
      !target.classList.contains("btn-focus")
    ) {
      _toggleActive();
      _toFahrenheit("Fahrenheit");
      console.log(array);
    } else if (
      target.dataset.metric === "Celcius" &&
      !target.classList.contains("btn-focus")
    ) {
      console.log("We have Fahrenheit, convert into Celcius");
      _toggleActive();
      _toCelcius("Celcius");
    } else {
      console.log(`You already have ${target.dataset.metric}`);
    }
  };

  function _toggleActive() {
    const btns = document.querySelectorAll(".btn");
    btns.forEach((btn) => btn.classList.toggle("btn-focus"));
  }

  function _toFahrenheit() {
    array.forEach((day) => {
      day.min = Math.floor(day.min * (9 / 5) + 32);
      day.max = Math.floor(day.max * (9 / 5) + 32);
      day.percievedTemp = Math.floor(day.percievedTemp * (9 / 5) + 32);
    });
    _displayPreviews(array);
  }

  function _toCelcius() {
    array.forEach((day) => {
      day.min = Math.floor((day.min - 32) * (5 / 9));
      day.max = Math.floor((day.max - 32) * (5 / 9));
      day.percievedTemp = Math.floor((day.percievedTemp - 32) * (5 / 9));
    });
    _displayPreviews(array);
  }

  return {
    handleDisplay,
    checkMetric,
  };
})();

export const a = 1;
