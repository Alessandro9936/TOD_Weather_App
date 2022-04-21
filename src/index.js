import "./style.css";
/*
async function hallo() {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=67.0522&lon=110.2437&exclude=minutely,hourly&appid=ab730ae7d0667fef9151fd3329107d0d"
  );
  const data = await res.json();
  console.log(data);
}
hallo();
*/

//day-specifics
//day-overview
//.fade-content

const a = document.querySelector(".desc-container");
window.addEventListener("load", () => {
  a.classList.add("fade-content");
});
