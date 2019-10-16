import React from 'react'
import { shallow, render} from 'enzyme'
import CurrentWeather from './CurrentWeather'

describe('CurrentWeather Component', () => {
	let props = '1'
	beforeEach(() => {
        props = {
			currentForecast:{
				temp: 42.7,
				icon: 'wind',
				forecast:'Windy',
				location: 'New York'
			}
		}			
	})

	it ('renders a paragraph elements', () => {
		const newprops = {...props}
		const wrapper = shallow(<CurrentWeather {...newprops}/>)
		
		expect(wrapper.find('p').length).toBe(1)
	})

})
