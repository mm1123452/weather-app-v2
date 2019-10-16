import axios from 'axios'
import { googleApi, openweathermap } from './config'

const API_BASE_URL_GOOGLE = 'https://maps.googleapis.com/maps/api/geocode/json?'
const GOOGLE_API_KEY = googleApi.key
const GOOGLE_API_REQUEST_PARAMS = {key: GOOGLE_API_KEY}

const API_BASE_URL_OPENWEATHER_FORECAST = 'https://api.openweathermap.org/data/2.5/forecast?&cnt=32&units=imperial&cnt=7' 
const API_BASE_URL_OPENWEATHER_CURRENT = 'https://api.openweathermap.org/data/2.5/weather?&cnt=32&units=imperial&cnt=7'  
const OPENWEATHERMAP_API_KEY = openweathermap.key
const OPENWEATHERMAP_API_REQUEST_PARAMS = { APPID: OPENWEATHERMAP_API_KEY}

const handleResponse = (response) => {
	if (response.results && response.results.length === 0) {
		throw new Error('geocode Error')
	} else if (response.cod && parseInt(response.cod) !== 200 ) {
		throw new Error('forecast Error')
	}	
	return response
}

export const sendRequest = async (method, url, callback, params)  => {
    try {
	    let response = await axios.request({
	        method: method,
	        url: url,
	        params: params     
	    });
	    return callback(response.data);

	} catch (err) {
		console.log(err)
	}
}

export const getGeocode = (data) => {
	return sendRequest('get', API_BASE_URL_GOOGLE, handleResponse, {...GOOGLE_API_REQUEST_PARAMS, address: data} )
}

export const getFourDayForecast = (lat,lon) => {
	return sendRequest('get',API_BASE_URL_OPENWEATHER_FORECAST, handleResponse, {...OPENWEATHERMAP_API_REQUEST_PARAMS, lat, lon} )
}

export const getCurrentWeather = (lat, lon) => {
	return sendRequest('get', API_BASE_URL_OPENWEATHER_CURRENT, handleResponse, {...OPENWEATHERMAP_API_REQUEST_PARAMS, lat, lon})
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