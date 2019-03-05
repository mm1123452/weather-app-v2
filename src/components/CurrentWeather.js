import React from 'react'

const CurrentWeather = props => {

	const {currentForecast} = props

	return (
		<div>
			<p>Right now, the weather is: </p>
			<p>weather icon</p>
			<p>Temperature: {currentForecast.temp} </p>
			<p>Description: {currentForecast.forecast}</p>
		</div>
	)
}

export default CurrentWeather