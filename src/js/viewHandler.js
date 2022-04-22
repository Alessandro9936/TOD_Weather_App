/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
export const UI = (() => {
  let array;

  const handleDisplay = (weatherDaysArr) => {
    array = weatherDaysArr;
    _displayOverviews(weatherDaysArr);
  };

  function _displayOverviews() {
    const dayOverviewCont = document.querySelector(".days");

    array.forEach((day) => {
      const div = document.createElement("div");
      div.classList.add("day");
      const date = document.createElement("p");
      const img = document.createElement("img");
      date.textContent = `${day.day}`;
      img.src = `http://openweathermap.org/img/wn/${day.icon}@2x.png`;

      div.append(date, img);
      dayOverviewCont.appendChild(div);
    });
  }

  return {
    handleDisplay,
  };
})();

export const a = 1;
