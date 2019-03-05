import React from 'react'
import { shallow } from 'enzyme'
import WeatherForm from './WeatherForm'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

describe('WeatherForm Component', () => {
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

	it ('renders a Form element', () => {
		const wrapper = shallow(<WeatherForm />)

		expect(wrapper.find(Form).length).toBe(1)
	})

	it ('initializes the form with an empty location value', () => {
		const wrapper = shallow(<WeatherForm />)

		expect(wrapper.state().location).toEqual('')
	})

	it ('updates the location value when onChange event is triggered', () => {
		const wrapper = shallow(<WeatherForm />)
		wrapper.find('.form-control').simulate('change', {
			target: {value: '02905'}
		})

		expect(wrapper.state().location).toEqual('02905')
	})

	it ('calls getLatitudeLongitude method onSubmit', () => {
		const newProps = {...props, getGeocode: () => {}}

		const wrapper = shallow(<WeatherForm {...newProps} />)
		
		const spy= jest.spyOn(wrapper.instance(), 'getLatitudeLongitude')
		
		wrapper.instance().forceUpdate();
		wrapper.find(Form).simulate('submit', { preventDefault() {} })

		expect(spy).toHaveBeenCalled()
	})
})