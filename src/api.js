import axios from 'axios'
import { googleApi, openweathermap } from './config'

const GOOGLE_API_KEY = googleApi.key

const OPENWEATHERMAP_API_KEY = openweathermap.key

const API_BASE_URL_GOOGLE = 'https://maps.googleapis.com/maps/api/geocode/json?'

const API_BASE_URL_OPENWEATHER_FORECAST = 'https://api.openweathermap.org/data/2.5/forecast?&cnt=32&units=imperial&cnt=7' 

const API_BASE_URL_OPENWEATHER_CURRENT = 'https://api.openweathermap.org/data/2.5/weather?&cnt=32&units=imperial&cnt=7'  

export const getGeocode = location => { 
	return axios.get(API_BASE_URL_GOOGLE, {
		params: {
          address: location,
          key: GOOGLE_API_KEY
        }
	}).then(response => {
		return response
	})                
} 

export const getFourDayForecast = (lat, lon) => {
	return axios.get(API_BASE_URL_OPENWEATHER_FORECAST, {
		params: {
          lat: lat,
          lon: lon,
          APPID: OPENWEATHERMAP_API_KEY
        }
	})
	.catch(error => {
		return {error: error.message}
	})
}

export const getCurrentWeather = (lat, lon) => {
	return axios.get(API_BASE_URL_OPENWEATHER_CURRENT, {
		params: {
          lat: lat,
          lon: lon,
          APPID: OPENWEATHERMAP_API_KEY
        }
	})
	.catch(error => {
		return {error: error.message}
	})
}

export const getWeather = (lat, long) => { 
	return axios
		.all([getFourDayForecast(lat,long), getCurrentWeather(lat,long)])
		.then(
			axios.spread((fourday, current) => {
				const response = {}

				response.fourday = fourday.data ? fourday.data : fourday

				response.current = current.data ? current.data : current

				return response
			})
		)
		.catch(error => error )               
} 