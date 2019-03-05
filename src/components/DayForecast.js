import React from 'react'

const DayForecast = props => {
	return (
		<div>
			<p>weather icon</p>
			<p>Temperature: {props.temp} &#8451;</p>
			<p>Description: {props.description}</p>
		</div>
	)
}

export default DayForecast