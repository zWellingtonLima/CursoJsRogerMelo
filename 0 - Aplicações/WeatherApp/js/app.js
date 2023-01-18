const cityForm = document.querySelector('[data-js="change-location"]');
const cityNameContainer = document.querySelector('[data-js="city-name"]');
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]');
const cityTemperatureContainer = document.querySelector(
  '[data-js="city-temperature"]'
);
const cityCard = document.querySelector('[data-js="city-card"]');
const timeIconContainer = document.querySelector('[data-js="time-icon"]');
let timeImg = document.querySelector('[data-js="time"]');

cityForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputValue = e.target.city.value;
  const [{ Key, LocalizedName }] = await getCityData(inputValue);
  const [{ WeatherText, Temperature, isDayTime, WeatherIcon }] =
    await getCityWeather(Key);
  const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg">`;

  if (cityCard.classList.contains("d-none")) {
    cityCard.classList.remove("d-none");
  }

  isDayTime
    ? (timeImg.src = "./src/day.svg")
    : (timeImg.src = "./src/night.svg");

  timeIconContainer.innerHTML = timeIcon;
  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value

  cityForm.reset()
})
