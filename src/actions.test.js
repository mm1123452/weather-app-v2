import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {LATITUDE_LONGITUDE_FETCH, LATITUDE_LONGITUDE_FETCH_SUCCESS,
 LATITUDE_LONGITUDE_FETCH_FAILURE, WEATHER_FETCH,
 CURRENT_WEATHER_FETCH_SUCCESS, CURRENT_WEATHER_FETCH_FAILURE,
 FOUR_DAY_WEATHER_FETCH_SUCCESS, FOUR_DAY_WEATHER_FETCH_FAILURE} from './constants'

import {getLatitudeLongitude,  getLatitudeLongitudeSuccess,
 getLatitudeLongitudeFailure, getWeather, getCurrentWeatherSuccess, getCurrentWeatherFailure,
 getFourDayWeatherSuccess, getFourDayWeatherFailure, fetchGeocode, fetchWeather } from './actions'

jest.unmock('./api');                                                
import * as api from './api';  

const middlewares = [thunk];                             
const mockStore = configureMockStore(middlewares);  

api.getGeocode= jest.fn(                                             
  () => new Promise((resolve, reject) => resolve({data:{results:[{geometry:{location:{lat: 40, lng: 73}}}]}} )),   
)

api.getWeather= jest.fn(                                             
  () => new Promise((resolve, reject) => resolve({current:{main: {temp: 22}, weather:[{icon:'12', main:'Sunny'}]}, fourday:{list:[{ dt_txt: "2019-03-08 18:00:00", weather:[{icon:'123',main:'Rain'}] },{ dt_txt: "2019-03-08 18:00:00", weather:[{icon:'123',main:'Rain'}] },{ dt_txt: "2019-03-08 18:00:00", weather:[{icon:'123',main:'Rain'}] }]} } )),
  () => new Promise((resolve, reject) => resolve( {main: {temp: 22}, weather:[{icon:'12', main:'Sunny'}]} )),
  () => new Promise((resolve, reject) => resolve([{ dt_txt: "2019-03-08 18:00:00", weather:[{icon:'123',main:'Rain'}] },
  	{ dt_txt: "2019-03-09 18:00:00", weather:[{icon:'123',main:'Rain'}]},
  	{ dt_txt: "2019-03-10 18:00:00", weather:[{icon:'123',main:'Rain'}]},
  	{ dt_txt: "2019-03-11 18:00:00", weather:[{icon:'123',main:'Rain'}]}]))   
)


describe('getLatitudeLongitude action' , () => {
	it('should contain the right action type', () => {
		const payload = '10026'
		const action = getLatitudeLongitude(payload)

		expect(action.type).toEqual(LATITUDE_LONGITUDE_FETCH)
	})

	it('should contain the right payload', () => {
		const payload = '10026'
		const action = getLatitudeLongitude(payload)

		expect(action.payload).toEqual('10026')
	})
})

describe('getLatitudeLongitudeSuccess' , () => {
	it('should contain the right action type', () => {
		const payload = '10026'
		const response = { location: '10026'}
		const action = getLatitudeLongitudeSuccess(payload, response)

		expect(action.type).toEqual(LATITUDE_LONGITUDE_FETCH_SUCCESS)
		expect(action.payload).toEqual({location: '10026'})
	})
})

describe('getLatitudeLongitudeFailure' , () => {
	it('should contain the right action type', () => {
		const payload = '10026'
		const error = 'Error'
		const action = getLatitudeLongitudeFailure( error,payload)

		expect(action.type).toEqual(LATITUDE_LONGITUDE_FETCH_FAILURE)
		expect(action.error).toEqual('Error')
	})
})

describe('getWeather action' , () => {
	it('should contain the right action type', () => {
		const payload = '10026'
		const action = getWeather(payload)

		expect(action.type).toEqual( WEATHER_FETCH)
		expect(action.payload).toEqual('10026')
	})
})

describe('getCurrentWeatherSuccess' , () => {
	it('should contain the right action type', () => {
		const payload = '10026'
		const response = {weather: 'Spring'}
		const action = getCurrentWeatherSuccess(response, payload)

		expect(action.type).toEqual( CURRENT_WEATHER_FETCH_SUCCESS)
		expect(action.response).toEqual({weather: 'Spring'})
	})
})

describe('getCurrentWeatherFailure' , () => {
	it('should contain the right action type', () => {
		const payload = '10026'
		const error = 'Error'
		const action = getCurrentWeatherFailure(error,payload)

		expect(action.type).toEqual(CURRENT_WEATHER_FETCH_FAILURE)
		expect(action.error).toEqual('Error')
	})
})

describe('getFourDayWeatherSuccess ' , () => {
	it('should contain the right action type', () => {
		const payload = '10026'
		const response = {weather: 'Spring'}
		const action = getFourDayWeatherSuccess (response, payload)

		expect(action.type).toEqual(FOUR_DAY_WEATHER_FETCH_SUCCESS)
		expect(action.response).toEqual({weather: 'Spring'})
	})
})

describe('getFourDayWeatherFailure' , () => {
	it('should contain the right action type', () => {
		const payload = '10026'
		const error = 'Error'
		const action = getFourDayWeatherFailure(error,payload)

		expect(action.type).toEqual(FOUR_DAY_WEATHER_FETCH_FAILURE)
		expect(action.error).toEqual('Error')
	})
})

describe('async action creators', () => {
	const store = mockStore({items: {}})

	beforeEach(() => {
		store.clearActions()
	})

	describe('fetchGeocode' , () => {
		it('should work', () => {
			const expectedAction = [
				{type: LATITUDE_LONGITUDE_FETCH, payload: '10026'},
				{type: LATITUDE_LONGITUDE_FETCH_SUCCESS, response: {data:{results:[{geometry:{location:{lat: 40, lng: 73}}}]}}, payload: '10026'},
				{type: WEATHER_FETCH, payload: {lat: 40, long: 73}},
				{type: CURRENT_WEATHER_FETCH_SUCCESS, response: {main: {temp: 22}, weather:[{icon:'12', main:'Sunny'}]}, payload: {lat: 40, long: 73}},
				
				{type: FOUR_DAY_WEATHER_FETCH_SUCCESS, response:[{ dt_txt: "2019-03-08 18:00:00", weather:[{icon:'123',main:'Rain'}] },],payload:{lat: 40, long: 73}        }
			]

			return store.dispatch(fetchGeocode('10026')).then(() => {
				expect(store.getActions()).toEqual(expectedAction)
				expect(api.getGeocode).toHaveBeenCalled()
			})		
			
		})
	})

	describe('fetchWeather' , () => {
	it('should work', () => {
		const expectedAction = [
			{type: WEATHER_FETCH, payload: {lat: 40, long: 73}},
			{type: CURRENT_WEATHER_FETCH_SUCCESS, response: {main: {temp: 22}, weather:[{icon:'12', main:'Sunny'}]}, payload: {lat: 40, long: 73}},
			{type: FOUR_DAY_WEATHER_FETCH_SUCCESS, response:[{ dt_txt: "2019-03-08 18:00:00", weather:[{icon:'123',main:'Rain'}] },],payload:{lat: 40, long: 73}        }
		]

			return store.dispatch(fetchWeather(40, 73)).then(() => {
				expect(store.getActions()).toEqual(expectedAction)
				expect(api.getWeather).toHaveBeenCalled()
			})		
			
		})
	})

})








