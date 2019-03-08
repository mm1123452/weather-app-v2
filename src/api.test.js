import {getGeocode, getFourDayForecast,  getCurrentWeather , getWeather} from './api'
import axios from 'axios'
 
jest.mock('axios')
 
describe('getGeocode', () => {
	 beforeEach(() => {
        axios.get.mockReturnValue(Promise.resolve({}));
    })

	it('calls getGeocode from api ', () => {
		const location='10026'
		getGeocode(location)
		expect(axios.get).toHaveBeenCalled()
	})
})

describe('getFourDayForecast ', () => {
	 beforeEach(() => {
        axios.get.mockReturnValue(Promise.resolve({}));
    })

	it('calls getFourDayForecast from api ', () => {
		const lat=20
		const long=25
		getFourDayForecast(lat,long)
		expect(axios.get).toHaveBeenCalled()
	})
})

describe('getCurrentWeather ', () => {
	 beforeEach(() => {
        axios.get.mockReturnValue(Promise.resolve({}));
    })

	it('calls  getCurrentWeather from api ', () => {
		const lat=20
		const long=25
		getCurrentWeather(lat,long)
		expect(axios.get).toHaveBeenCalled()
	})
})

describe('getWeather', () => {
	 beforeEach(() => {
        axios.all.mockReturnValue(Promise.resolve({}))
        axios.spread.mockReturnValue(Promise.resolve({}))
    })

	it('calls getWeather from api ', () => {
		const lat=20
		const long=25
		getWeather(lat,long)
		expect(axios.all).toHaveBeenCalled()
		expect(axios.spread).toHaveBeenCalled()
	})
})

