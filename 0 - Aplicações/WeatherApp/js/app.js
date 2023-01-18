const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector(
  '[data-js="city-temperature"]'
)
const cityCard = document.querySelector('[data-js="city-card"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')
let timeImg = document.querySelector('[data-js="time"]')

const getTimeIcon = (WeatherIcon) => `<img src="./src/icons/${WeatherIcon}.svg">`

const getWeatherData = async inputValue => {
  const [{ Key, LocalizedName }] = await getCityData(inputValue)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] =
    await getCityWeather(Key)

  return { LocalizedName, WeatherText, Temperature, IsDayTime, WeatherIcon }
}

const showCityCard = ({IsDayTime}) => {
  timeImg.src = IsDayTime
  ? ("./src/day.svg")
  : ("./src/night.svg")
  
  if (cityCard.classList.contains("d-none")) {
    cityCard.classList.remove("d-none")
  }
}

const insertWeatherInfo = ({ LocalizedName, WeatherText, Temperature, WeatherIcon}) => {
  timeIconContainer.innerHTML = getTimeIcon(WeatherIcon)
  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value
}

cityForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  const inputValue = e.target.city.value

  const weatherInfo = await getWeatherData(inputValue)

  insertWeatherInfo(weatherInfo)

  showCityCard(weatherInfo)

  localStorage.setItem('lastCity', inputValue)

  cityForm.reset()
})

const checkLocalStorageCity = async () => {
  const city = localStorage.getItem('lastCity')

  if (city) {
    const weatherInfo = await getWeatherData(city)
    insertWeatherInfo(weatherInfo)
    showCityCard(weatherInfo)
  }
}

checkLocalStorageCity()