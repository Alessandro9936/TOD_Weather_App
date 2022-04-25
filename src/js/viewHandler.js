/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
export const viewLogic = (() => {
  let array;

  const handleDisplay = (weatherDaysArr) => {
    array = weatherDaysArr;
    _checkInputMetric();
  };

  function _checkInputMetric() {
    const activeMetric = document.querySelector(".btn-focus");
    // Metric is Celcius by default, then if active is on Celcius there's no need for a conversion.
    activeMetric.dataset.metric === "Celcius"
      ? viewUI.displayPreviews(array)
      : _toFahrenheit();
  }

  const checkMetric = (target) => {
    if (
      target.dataset.metric === "Fahrenheit" &&
      !target.classList.contains("btn-focus")
    ) {
      viewUI.toggleActive();
      _toFahrenheit("Fahrenheit");
    } else if (
      target.dataset.metric === "Celcius" &&
      !target.classList.contains("btn-focus")
    ) {
      viewUI.toggleActive();
      _toCelcius("Celcius");
    }
  };

  function _toFahrenheit() {
    array.forEach((day) => {
      day.min = Math.floor(day.min * (9 / 5) + 32);
      day.max = Math.floor(day.max * (9 / 5) + 32);
      day.percievedTemp = Math.floor(day.percievedTemp * (9 / 5) + 32);
    });
    viewUI.displayPreviews(array);
  }

  function _toCelcius() {
    array.forEach((day) => {
      day.min = Math.floor((day.min - 32) * (5 / 9));
      day.max = Math.floor((day.max - 32) * (5 / 9));
      day.percievedTemp = Math.floor((day.percievedTemp - 32) * (5 / 9));
    });
    viewUI.displayPreviews(array);
  }

  return {
    handleDisplay,
    checkMetric,
  };
})();

export const viewUI = (() => {
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

  const displayPreviews = (array) => {
    const dayPreviewCont = document.querySelector(".days");
    dayPreviewCont.innerHTML = "";

    array.forEach((day, index) => {
      const preview = _createPreview(day);
      dayPreviewCont.appendChild(preview);

      preview.addEventListener("click", () => _displayDaySpec(day));
      if (index === 0) _displayDaySpec(day);
    });
  };

  function _createPreview(day) {
    const div = document.createElement("div");
    div.classList.add("day");
    const date = document.createElement("p");
    const img = document.createElement("img");
    date.textContent = `${day.day}`;
    img.src = `http://openweathermap.org/img/wn/${day.icon}@2x.png`;
    div.append(date, img);

    return div;
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

  const toggleActive = () => {
    const btns = document.querySelectorAll(".btn");
    btns.forEach((btn) => btn.classList.toggle("btn-focus"));
  };

  return {
    displayPreviews,
    toggleActive,
  };
})();
