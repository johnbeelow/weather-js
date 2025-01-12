import { CONFIG } from './config.js'
import { checkInput } from './utils.js'
import { ERROR } from './logger.js'
import Cookies from 'js-cookie'

const storage = {
  saveFavoriteList(favoriteList) {
    localStorage.setItem(
      'favoriteCityWeather',
      JSON.stringify([...favoriteList])
    )
  },
  getFavoriteList() {
    try {
      const storageList = localStorage.getItem('favoriteCityWeather')
      return JSON.parse(storageList) ?? new Set()
    } catch (error) {
      console.error(ERROR.STORAGE.PARSE_PROBLEM, error)
      return new Set()
    }
  }
}

const cookie = {
  saveCurrentCity(currentCity) {
    Cookies.set('currentCityWeather', currentCity, { expires: 1 })
  },
  getCurrentCity() {
    try {
      const storageCity = Cookies.get('currentCityWeather')
      return storageCity ?? CONFIG.DEFAULT_CITY
    } catch (error) {
      console.error(ERROR.STORAGE.PARSE_PROBLEM, error)
      return CONFIG.DEFAULT_CITY
    }
  }
}

const cityFavoriteList = new Set(storage.getFavoriteList())
let currentCity = cookie.getCurrentCity()

export const isCityExist = (name) => cityFavoriteList.has(name)

export const addCityFavorite = (name) => {
  cityFavoriteList.add(name)
  storage.saveFavoriteList(cityFavoriteList)
}

export const deleteCityFavorite = (name) => {
  cityFavoriteList.delete(name)
  storage.saveFavoriteList(cityFavoriteList)
}

export const setCurrentCity = (newCity) => {
  if (!checkInput(newCity)) return
  currentCity = newCity
  cookie.saveCurrentCity(newCity)
}

export const getCurrentCity = () => currentCity
export const getCityFavoriteList = () =>
  [...cityFavoriteList].map((name) => ({ name }))
