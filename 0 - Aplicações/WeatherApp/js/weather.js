const APIKey = 'UqzjypxrEtYxwNXGcpR0VMlOvLB6KQNY'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName => `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherUrl = ({ Key }) => `${baseUrl}currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`

// A única variação que existe em ambas as funções é a url.
// Com a nova função criada eu especifico o que ela vai fazer mas não especificamente quais dados ela vai buscar. 
// Tudo que é especifico é removido dessa função e deixo apenas as generalidades.
const fetchData = async url => {
  try {
    const response = await fetch(url)
  
    if (!response.ok) {
      throw new Error('Não foi possível obter os dados.')
    }
  
    return response.json()

  } catch ({ name, message }) {
    alert(`Erro: ${name}, ${message}`)
  } 
}

const getCityData = cityName => fetchData(getCityUrl(cityName)) //Deixando a função assim, invés de retornar um array ela vai retornar uma promisse por causa do fetch que existe na função fetchData.

const getCityWeather = async cityName => {
  const [cityData] = await getCityData(cityName)
  return fetchData(getWeatherUrl(cityData))
}

getCityWeather('Espinho').then(console.log)
// const getCityData = async (cityName) => {
//   try {
//     const cityUrl = getCityUrl(cityName)
//     const response = await fetch(cityUrl)
  
//     if (!response.ok) {
//       throw new Error('Não foi possível obter os dados.')
//     }
  
//     const [cityData] = await response.json()
//     return cityData

//   } catch ({ name, message }) {
//     alert(`Erro: ${name}, ${message}`)
//   }
// }

// const getCityWeather = async (cityName) => {
//   try {
//     const { Key } = await getCityData(cityName)
//     const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`
//     const response = await fetch(cityWeatherUrl)
  
//     if (!response.ok) {
//       throw new Error('Não foi possível obter os dados.')
//     }
  
//     const cityWeatherData = await response.json()
//     return cityWeatherData

//   } catch ({ name, message }) {
//     alert(`Erro: ${name}, ${message}`)
//   }
// }

// getCityWeather('Ceara')

