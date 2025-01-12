export const CREATE_ELEMENT = {
  DIV: () => document.createElement('div'),
  P: () => document.createElement('p'),
  SPAN: () => document.createElement('span'),
  BUTTON: () => document.createElement('button'),
  IMG: () => document.createElement('img'),
  SVG: () => document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
  PATH: () => document.createElementNS('http://www.w3.org/2000/svg', 'path')
}

export const UI_ELEMENTS = {
  SECTOR_INPUT: document.getElementById('sector_input'),
  INPUT_CITY: document.getElementById('input_city'),
  LOADER: document.getElementById('loader'),
  LOADER_BACKGROUND: document.getElementById('loader-background'),
  INFO_TEMPERATURE: document.getElementById('info_temperature'),
  INFO_IMG: document.getElementById('info_img'),
  INFO_CITY: document.getElementById('info_city'),
  INFO_LIKE: document.getElementById('info_like'),
  FAVORITE_CITY_LIST: document.getElementById('list_locations'),
  WEATHER_INFO: document.getElementById('container_weather_info'),
  TEMP_INFO_LIST: document.getElementById('container_temp_info_list'),
  TEMP_INFO_TIME: document.getElementById('temp_info_time'),
  TEMP_INFO_TEXT: document.getElementById('temp_info_time_down_text'),
  TEMP_INFO_IMG: document.getElementById('info_list_img')
}

export const isLoader = (show) => {
  const loader = UI_ELEMENTS.LOADER
  const loaderBackground = UI_ELEMENTS.LOADER_BACKGROUND

  if (show) {
    loader.style.display = 'block'
    loaderBackground.style.display = 'block'
  }
  if (!show) {
    loader.style.display = 'none'
    loaderBackground.style.display = 'none'
  }
}

export const TOGGLE_LIKE = {
  ACTIVE: () => {
    UI_ELEMENTS.INFO_LIKE.classList.remove('inactive_like_city')
    UI_ELEMENTS.INFO_LIKE.classList.add('active_like_city')
  },
  INACTIVE: () => {
    UI_ELEMENTS.INFO_LIKE.classList.remove('active_like_city')
    UI_ELEMENTS.INFO_LIKE.classList.add('inactive_like_city')
  }
}
