import WeatherService from '../../service'
import * as Types from '../types.js'

export function updateWeatherTerm(city) {
  return async function (dispatch, getState) {
    dispatch(changeWeather(null))
    let c = city

    if (!city) c = getState().term

    let weather
    try {
      weather = await WeatherService.getWeatherByCity(c)
    } catch (err) {
      return dispatch(changeError(err))
    }

    if (weather) {
      dispatch(changeTerm(c))
      dispatch(changeWeather(weather))
    }
  }
}

export function changeWeather(weather) {
  return {
    type: Types.CHANGE_WEATHER,
    payload: weather,
  }
}
export function changeTerm(term) {
  return {
    type: Types.CHANGE_TERM,
    payload: term,
  }
}
export function addToTable(arr) {
  return {
    type: Types.ADD_TO_TABLE,
    payload: arr,
  }
}
export function changeTable(arr) {
  return {
    type: Types.CHANGE_TABLE,
    payload: arr,
  }
}
export function removeTableItem(i) {
  return {
    type: Types.REMOVE_TABLE_ITEM,
    payload: i,
  }
}
export function changeError(error) {
  return {
    type: Types.CHANGE_ERROR,
    payload: error,
  }
}
