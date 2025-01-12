import { isLoader } from './ui_elements.js'
import { CONFIG } from './config.js'
import { ERROR } from './logger.js'

export const API = {
  URL_WEATHER: 'http://api.openweathermap.org/data/2.5/weather',
  URL_FORECAST: 'https://api.openweathermap.org/data/2.5/forecast',
  URL_IMG: 'http://openweathermap.org/img/wn',
  IMG_SIZE_2X: '@2x.png'
}

const fetchWeatherData = async (server, city) => {
  const url = `${server}?q=${city}&appid=${CONFIG.API_KEY}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(
        response.status === 404
          ? ERROR.API.DATA_NOT_FOUND
          : `${ERROR.API.ERR_REQUEST} ${response.status}`
      )
    }
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getWeatherData = async (server, city, onSuccess) => {
  try {
    isLoader(true)
    const data = await fetchWeatherData(server, city)
    onSuccess(data)
  } catch (error) {
    console.error(error)
  } finally {
    isLoader(false)
  }
}
