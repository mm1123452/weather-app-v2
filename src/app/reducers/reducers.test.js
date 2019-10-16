import {forecastReducer} from './reducers'
import { LATITUDE_LONGITUDE_FETCH, LATITUDE_LONGITUDE_FETCH_SUCCESS,
 LATITUDE_LONGITUDE_FETCH_FAILURE, WEATHER_FETCH,
 CURRENT_WEATHER_FETCH_SUCCESS, CURRENT_WEATHER_FETCH_FAILURE,
 FOUR_DAY_WEATHER_FETCH_SUCCESS, FOUR_DAY_WEATHER_FETCH_FAILURE} from '../constants'

describe('forecast Reducer', () => {
	let initialState
	beforeEach(() =>
		initialState = {
			items: {
				location: 'Harlem',
				currentForecast: {
					temp: 32.7,
					icon: '10n',
					forecast:'Rain',
				},
				fourDayForecast: {
					'1': {
						id: '1',
						temp: 42.7,
						icon: '10n',
						forecast:'Windy',
						date: '03-08'
					},
					'2': {
						id: '2',
						temp: 52.7,
						icon: '10n',
						forecast:'Spring-like',
						date: '03-09'
					},
					'3': {
						id: '3',
						temp: 62.7,
						icon: '10n' ,
						forecast: 'Sunny',
						date: '03-10'
					},
					'4': {
						id: '4',
						temp: 72.7,
						icon: '10n',
						forecast: 'clear skys',
						date: '03-11'
					}		
				},	

		}
	})

	it('should handle LATITUDE_LONGITUDE_FETCH', () => {
		const payload = '10040'
		const action = {type: LATITUDE_LONGITUDE_FETCH, payload }
		const expectedState = { ...initialState, isFetching: true, fetchError: null}

		expect(forecastReducer(initialState,action)).toEqual(expectedState)
	})

	it('should handle LATITUDE_LONGITUDE_FETCH_SUCCESS', () => {
		const response = {results: [{formatted_address: 'New York NY 10026'}]}
		const action = {type: LATITUDE_LONGITUDE_FETCH_SUCCESS, response}
		const expectedState = { ...initialState,
		items: {
			...initialState.items,
			location: 'New York NY 10026'
		},
		isFetching: false}

		expect(forecastReducer(initialState,action)).toEqual(expectedState)
	})

	it('should handle LATITUDE_LONGITUDE_FETCH_FAILURE', () => {
		const error = 'Error'
		const action = {type: LATITUDE_LONGITUDE_FETCH_FAILURE, error}
		const expectedState = { ...initialState,
		isFetching: false, fetchError: 'Error'}

		expect(forecastReducer(initialState,action)).toEqual(expectedState)
	})


	it('should handle WEATHER_FETCH', () => {
		const payload = {lat: 25.76, long: -80.19}
		const action = {type: WEATHER_FETCH, payload }
		const expectedState = { ...initialState, 
			items: {
				...initialState.items,
				isFetchingCurrentWeather: true,
  				currentWeatherfetchError: null, 
  				isFetchingFourDayWeather: true,
  				fourDayWeatherfetchError: null	
			}
		}
		expect(forecastReducer(initialState,action)).toEqual(expectedState)
	})

	it('should handle CURRENT_WEATHER_FETCH_SUCCESS', () => {
		const response = {main: {temp: 87}, weather: [{icon: '001', main: 'Sunny'}]}
		const action = {type: CURRENT_WEATHER_FETCH_SUCCESS, response}
		const expectedState = { ...initialState,
		items: {
			...initialState.items,
			currentForecast: {
				...initialState.items.currentForecast,
				temp: 87,
  				icon: '001',
  				forecast: 'Sunny',
			},
		isFetchingCurrentWeather: false
		}}

		expect(forecastReducer(initialState,action)).toEqual(expectedState)
	})

	it('should handle CURRENT_WEATHER_FETCH_FAILURE', () => {
		const error = 'Error'
		const action = {type: CURRENT_WEATHER_FETCH_FAILURE, error}
		const expectedState = { ...initialState,
		items: {
			...initialState.items,
			currentWeatherfetchError: 'Error'
		}
		}

		expect(forecastReducer(initialState,action)).toEqual(expectedState)
	})

	it('should handle FOUR_DAY_WEATHER_FETCH_SUCCESS', () => {
		const response = [ {dt_txt:'2019-03-08', main:{temp: 105}, weather:[{description: 'sunny', icon: '02n'}] }, 
		{dt_txt:'2019-03-08', main:{temp: 105}, weather:[{description: 'sunny', icon: '02n'}] },
		{dt_txt:'2019-03-08', main:{temp: 105}, weather:[{description: 'sunny', icon: '02n'}] },
		{dt_txt:'2019-03-08', main:{temp: 105}, weather:[{description: 'sunny', icon: '02n'}] } ]

		const action = {type: FOUR_DAY_WEATHER_FETCH_SUCCESS, response}
		const expectedState = { ...initialState,
		items: {
			...initialState.items,
			fourDayForecast: {
				...initialState.items.fourDayForecast,
				  '1': {
		              id: '1',
		              temp: action.response[0].main.temp,
		              forecast: action.response[0].weather[0].description,
		              icon: action.response[0].weather[0].icon,
		              date: action.response[0].dt_txt.slice(5,10)
		            },
		            '2': {
		              id: '2',
		              temp: action.response[1].main.temp,
		              forecast: action.response[1].weather[0].description,
		              icon: action.response[1].weather[0].icon,
		              date: action.response[1].dt_txt.slice(5,10)
		            },
		            '3': {
		              id: '3',
		              temp: action.response[2].main.temp,
		              forecast: action.response[2].weather[0].description,
		              icon: action.response[2].weather[0].icon,
		              date: action.response[2].dt_txt.slice(5,10)
		            },
		            '4': {
		              id: '4',
		              temp: action.response[3].main.temp,
		              forecast: action.response[3].weather[0].description,
		              icon: action.response[3].weather[0].icon,
		              date: action.response[3].dt_txt.slice(5,10)
		            }
			},
		isFetchingFourDayWeather: false
		}}

		expect(forecastReducer(initialState,action)).toEqual(expectedState)
	})

	it('should handle FOUR_DAY_WEATHER_FETCH_FAILURE', () => {
		const error = 'Error'
		const action = {type: FOUR_DAY_WEATHER_FETCH_FAILURE, error}
		const expectedState = { ...initialState,
		items: {
			...initialState.items,
			fourDayWeatherfetchError: 'Error'
		}
		}

		expect(forecastReducer(initialState,action)).toEqual(expectedState)
	})



})