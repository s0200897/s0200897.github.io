const API_KEY = '715ac60004286c422cbbbf1d407f9a12'
const API_URI = 'https://api.openweathermap.org/data/2.5'
const API_UNIT = 'metric'
export const API_ICON_URI = 'https://openweathermap.org/img/wn/'

async function fetchLocations(neddle) {
  const PARAM = `type=like&sort=population&units=${API_UNIT}&cnt=7`
  let url = `${API_URI}/find?q=${neddle}&${PARAM}&appid=${API_KEY}`
  try {
    const response = await fetch(url)
    const json = await response.json()
    // console.log(json)
    return json.list
  } catch (error) {
    console.error(error)
  }
}

function polish5DaysForecast(data) {
  if (!data) return
  const forecast3hoursList = data.list.map(function(F, index) {
    return {
      day: F.dt_txt,
      tempMin: F.main.temp_min,
      tempMax: F.main.temp_max,
      conditions: F.weather[0].description,
      icon: F.weather[0].icon,
      wind: F.wind.speed,
    }
  })

  const forecastMap = forecast3hoursList.reduce(function(map, F) {
    const key = F['day'].substring(0, 10)
    if (!map.has(key)) {
      map.set(key, { ...F, day: F['day'].substring(0, 10), hourly: [] })
    }
    const item = map.get(key)
    item['tempMin'] = Math.min(item['tempMin'], F['tempMin'])
    item['tempMax'] = Math.max(item['tempMax'], F['tempMax'])

    F['day'] = F['day'].substr(11)
    item.hourly.push(F)
    return map
  }, new Map())

  return [...forecastMap.values()]
}

async function fetch5DaysForecast(locationID) {
  let url = `${API_URI}/forecast?id=${locationID}&units=${API_UNIT}&appid=${API_KEY}`
  try {
    const response = await fetch(url)
    const result = await response.json()
    // console.log(polish5DaysForecast(result))
    return polish5DaysForecast(result)
  } catch (error) {
    console.error(error)
  }
}

export default { fetchLocations, fetch5DaysForecast }
