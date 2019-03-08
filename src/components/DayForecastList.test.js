import React from 'react'
import { shallow } from 'enzyme'
import DayForecastList from './DayForecastList'

describe('DayForecastList Component', () => {
	let props = '1'
	beforeEach(() => {
        props = 
        { forecast: [
        {id: '1',
		temp: 42.7,
		icon: 'wind',
		forecast:'Windy' ,
		}, 
		{id: '2',
		temp: 52.7,
		icon: 'Spring',
		forecast:'Spring-like'},
		{id: '3',
		temp: 62.7,
		icon: 'Sun' ,
		forecast: 'Sunny'},
		{id: '4',
		temp: 72.7,
		icon: 'clear',
		forecast: 'clear skys'}]
        }
	})
	it ('renders 4 cards/elements based on the given array', () => {	
		const wrapper = shallow(<DayForecastList {...props}/>)

		expect(wrapper.find('.card').length).toBe(4)
	})

	it ('renders an h5 element with the forecast', () => {		
		const wrapper = shallow(<DayForecastList {...props}/>)

		expect(wrapper.find('h5').length).toBe(4)
		expect(wrapper.find('h5').at(0).text()).toBe('Windy')
		expect(wrapper.find('h5').at(1).text()).toBe('Spring-like')
	})

	it ('renders an an image tag with the right src address', () => {		
		const wrapper = shallow(<DayForecastList {...props}/>)

		expect(wrapper.find('img').at(0).props().src).toEqual('https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')	
	})
})