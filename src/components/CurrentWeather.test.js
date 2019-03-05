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
				forecast:'Windy' 
			}
		}			
	})

	it ('renders a four paragraph elements', () => {
		const newprops = {...props}
		const wrapper = shallow(<CurrentWeather {...newprops}/>)

		expect(wrapper.find('p').length).toBe(4)
	})

	it ('renders two paragraphs containing the value of props', () => {
		const newprops = {...props}
		const wrapper = shallow(<CurrentWeather {...newprops}/>)

		expect(wrapper.childAt(2).shallow().text()).toEqual('Temperature: 42.7 ')
		expect(wrapper.childAt(3).shallow().text()).toEqual('Description: Windy')
	})
})
