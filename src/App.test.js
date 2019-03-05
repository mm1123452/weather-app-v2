import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from './App'
import WeatherForm from './components/WeatherForm'
import DayForecastList from './components/DayForecastList'

describe('App Component', () => {
	let props = '1'
	beforeEach(() => {
       props = {
				fourDayForecast: {
					'1': {
						id: '1',
						temp: 42.7,
						icon: 'wind',
						forecast:'Windy' ,
					},
					'2': {
						id: '2',
						temp: 52.7,
						icon: 'Spring',
						forecast:'Spring-like' ,
					},
					'3': {
						id: '3',
						temp: 62.7,
						icon: 'Sun' ,
						forecast: 'Sunny',
					},
					'4': {
						id: '4',
						temp: 72.7,
						icon: 'clear',
						forecast: 'clear skys',
					}		
				},
				isFetching: false,
				error: null
			}
	})


	it ('renders WeatherForm', () => {
        let newProps = {...props}
		const wrapper = shallow(<App {...newProps}/>)

		expect(wrapper.find(WeatherForm).length).toBe(1)
	})

	it ('renders DayForecastList', () => {
        let newProps = {...props}
		const wrapper = shallow(<App {...newProps}/>)

		expect(wrapper.find(DayForecastList).length).toBe(1)       
	})
})

