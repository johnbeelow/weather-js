const { format } = require('date-fns')

const isInputValid = (str) => !str || str.trim() === ''
const isInputNumber = (number) => isNaN(number)

export const checkInput = (value) =>
  !isInputValid(value) && isInputNumber(value)

export const convertKelvinToCelsius = (temperature) =>
  `${Math.round(temperature - 273.15)}`

export const convertUnixToTime = (time) => {
  return format(new Date(time * 1000), 'HH:mm')
}

export const isToday = (data) => {
  const startOfDay = new Date()
  startOfDay.setHours(0, 0, 0, 0)
  const startOfDayUnix = Math.floor(startOfDay.getTime() / 1000)

  const endOfDay = new Date()
  endOfDay.setHours(23, 59, 59, 999)
  const endOfDayUnix = Math.floor(endOfDay.getTime() / 1000)

  if (data >= startOfDayUnix && data <= endOfDayUnix) return true
}
