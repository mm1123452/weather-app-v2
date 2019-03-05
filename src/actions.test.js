import { LATITUDE_LONGITUDE_FETCH, LATITUDE_LONGITUDE_FETCH_SUCCESS,
 LATITUDE_LONGITUDE_FETCH_FAILURE} from './constants'

import {getLatitudeLongitude,  getLatitudeLongitudeSuccess,
 getLatitudeLongitudeFailure} from './actions'

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
	})

	it('should contain the right payload', () => {
		const payload = '10026'
		const response = { location: '10026'}
		const action = getLatitudeLongitudeSuccess(payload,response)

		expect(action.payload).toEqual({location: '10026'})
	})
})

describe('getLatitudeLongitudeFailure' , () => {
	it('should contain the right action type', () => {
		const payload = '10026'
		const error = 'Error'
		const action = getLatitudeLongitudeFailure(payload, error)

		expect(action.type).toEqual(LATITUDE_LONGITUDE_FETCH_FAILURE)
	})

	it('should contain the right payload', () => {
		const payload = '10026'
		const error = 'Error'
		const action = getLatitudeLongitudeFailure(payload,error)

		expect(action.payload).toEqual('Error')
	})
})