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
  let place;

  const handleDisplay = (weatherDaysArr, country) => {
    if (country.includes(place)) return;
    array = weatherDaysArr;
    place = country;
    _displayPreviews(weatherDaysArr);
  };

  function _displayPreviews() {
    const dayPreviewCont = document.querySelector(".days");
    dayPreviewCont.innerHTML = "";

    array.forEach((day, index) => {
      const div = document.createElement("div");
      div.classList.add("day");
      const date = document.createElement("p");
      const img = document.createElement("img");
      date.textContent = `${day.day}`;
      img.src = `http://openweathermap.org/img/wn/${day.icon}@2x.png`;

      div.append(date, img);
      dayPreviewCont.appendChild(div);

      if (index === 0) _displayDaySpec(day);
      div.addEventListener("click", () => _displayDaySpec(day));
    });
  }

  function _displayDaySpec(day) {
    descriptionContainer.classList.add("fade-content");
    dayOverview.classList.add("fade-content");

    cityDesc.textContent = `${place.toUpperCase()}`;
    dayDesc.textContent = `${day.date}`;
    weatherDesc.textContent = `${
      day.weatherDescription[0].toUpperCase() + day.weatherDescription.slice(1)
    }`;
    minDesc.textContent = `${day.min}°`;
    maxDesc.textContent = `${day.max}°`;
    humidityDesc.textContent = `${day.humidity}%`;

    tempOver.textContent = `${day.percievedTemp}°`;
    cityOver.textContent = `${place.toUpperCase()}`;
    dayOver.textContent = `${day.date}`;
  }

  return {
    handleDisplay,
  };
})();

export const a = 1;
