import React from 'react'
import './CurrentWeather.css'

const CurrentWeather = props => {
	const {location, temp, forecast} = props

	return (
		<div className='home-section ml-3 mr-3'>	
			<div className='home-inner container'>
				<div className='row'>
					<div className='col-lg-8 currentWeather'>
						<p className='pt-3 text-white'>Current temperature: </p>
						<h1 className='display-4 pb-4 text-white'>{Math.round(temp)}&deg; F</h1>
						<h5 className='text-white'>{location}</h5>
						<h4 className='text-white'>Forecast: {forecast}</h4>
					</div>						
				</div>
			</div>		
		</div>

	)
}

export default CurrentWeather













