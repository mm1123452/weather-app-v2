import { LATITUDE_LONGITUDE_FETCH, LATITUDE_LONGITUDE_FETCH_SUCCESS,
 LATITUDE_LONGITUDE_FETCH_FAILURE, WEATHER_FETCH,
 CURRENT_WEATHER_FETCH_SUCCESS, CURRENT_WEATHER_FETCH_FAILURE,
 FOUR_DAY_WEATHER_FETCH_SUCCESS, FOUR_DAY_WEATHER_FETCH_FAILURE
 } from './constants'

import * as api from './api'

import {hourlyToDailyForecast} from './Util'

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

export const fetchGeocode = location => {
  return dispatch => {
    dispatch(getLatitudeLongitude(location))
    return api.getGeocode(location)
    .then(resp => {
      if(resp.data && resp.data.error_message) {
          dispatch(getLatitudeLongitudeFailure(resp.data.error_message, location))
      } else {
        dispatch(getLatitudeLongitudeSuccess(resp, location))
        dispatch(fetchWeather(resp.data.results[0].geometry.location.lat, resp.data.results[0].geometry.location.lng))
      }
    })
    .catch(err => dispatch(getLatitudeLongitudeFailure(err, location)))
  }
}

export const fetchWeather = (lat,long) => {
  return dispatch => {
    dispatch(getWeather({lat: lat, long: long}))
    return api.getWeather(lat,long)
    .then(resp => {
        if(resp.current && resp.current.error) {
          dispatch(getCurrentWeatherFailure(resp.current.error,{lat: lat, long: long}))
        } else if (resp.current) {
          dispatch(getCurrentWeatherSuccess(resp.current, {lat: lat, long: long}))
        } 

        if(resp.fourday && resp.fourday.error)  {
          dispatch(getFourDayWeatherFailure(resp.fourday.error, {lat: lat, long: long}))
        } else if (resp.fourday) {
          const fourDayarray = hourlyToDailyForecast(resp.fourday.list)
          dispatch(getFourDayWeatherSuccess(fourDayarray, {lat: lat, long: long}))
        }
      })
      .catch(err => err)
   }
}

