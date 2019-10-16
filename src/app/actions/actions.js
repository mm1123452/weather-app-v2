import { LATITUDE_LONGITUDE_FETCH, LATITUDE_LONGITUDE_FETCH_SUCCESS,
 LATITUDE_LONGITUDE_FETCH_FAILURE, WEATHER_FETCH,
 CURRENT_WEATHER_FETCH_SUCCESS, CURRENT_WEATHER_FETCH_FAILURE,
 FOUR_DAY_WEATHER_FETCH_SUCCESS, FOUR_DAY_WEATHER_FETCH_FAILURE
 } from '../constants'

import * as api from '../api/api'

import {hourlyToDailyForecast} from '../utilities/Util'

export const getLatitudeLongitude = (payload) => {         
  return {
    type: LATITUDE_LONGITUDE_FETCH,
    payload
  }
}

export const getLatitudeLongitudeSuccess = (response, payload) => {         
  return {
    type: LATITUDE_LONGITUDE_FETCH_SUCCESS,
    payload,
    response
  }
}

export const getLatitudeLongitudeFailure = (error, payload) => {         
  return {
    type: LATITUDE_LONGITUDE_FETCH_FAILURE,
    payload,
    error
  }
}

export const getWeather = (payload) => {     
  return {
    type: WEATHER_FETCH,
    payload
  }
}

export const getCurrentWeatherSuccess = (response, payload) => {         
  return {
    type: CURRENT_WEATHER_FETCH_SUCCESS,
    payload,
    response
  }
}

export const getCurrentWeatherFailure = (error, payload) => {         
  return {
    type: CURRENT_WEATHER_FETCH_FAILURE,
    payload,
    error
  }
}

export const getFourDayWeatherSuccess = (response, payload) => {         
  return {
    type: FOUR_DAY_WEATHER_FETCH_SUCCESS,
    payload,
    response
  }
}

export const getFourDayWeatherFailure = (error, payload) => {         
  return {
    type: FOUR_DAY_WEATHER_FETCH_FAILURE,
    payload,
    error
  }
}

export const fetchGeocode  = location => { 
  return async dispatch => {
    try {
      dispatch(getLatitudeLongitude(location))
      const response = await api.getGeocode(location)  
      dispatch(getLatitudeLongitudeSuccess(response, location))
      await dispatch(fetchWeather(response.results[0].geometry.location.lat, response.results[0].geometry.location.lng))     
    }
    catch(error) {
      dispatch(getLatitudeLongitudeFailure(error, location))
    }
  }
}

export const fetchWeather = (lat,long) => {
  return async dispatch => {
    try {
      dispatch(getWeather({lat, long}))
      const response = await api.getWeather(lat,long)
      dispatch(getCurrentWeatherSuccess(response.current, {lat: lat, long: long}))
      const fourDayarray = hourlyToDailyForecast(response.fourday.list)
       dispatch(getFourDayWeatherSuccess(fourDayarray, {lat: lat, long: long}))

    } catch (error) {
       dispatch(getFourDayWeatherFailure(error, {lat: lat, long: long}))
       dispatch(getCurrentWeatherFailure(error,{lat: lat, long: long}))
       
    }
  }
}