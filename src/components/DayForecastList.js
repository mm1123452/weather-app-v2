import React, { Component } from 'react'

class DayForecastList extends Component {

	render() {
		const images = ['https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
		'https://images.unsplash.com/photo-1499949059451-9a1119d4e912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
		'https://images.unsplash.com/photo-1498496294664-d9372eb521f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
		'https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60']

		const fourDayForecast = this.props.forecast.map((day, index) => {
			return (
				<div key={day.id} className='col-md-3 '>
					<div className='card'>			
						<img className='card-img ' src={`${images[index]}`} alt='colorful-images'/>			
					
						<div className='card-img-overlay'>
							<h1 className='mx-auto text-center text-white '>{Math.round(day.temp)}<span>&deg; F</span></h1>
						</div>
					
						<div className='card-body'>
							<img src={`http://openweathermap.org/img/w/${day.icon || "10n"}.png`}
							width="80"
							height="70"
							alt="icon"/>	
							<h6 className='card-subtitle text-muted'>{day.date}</h6>
							<h5 className='class-title'>{day.forecast}</h5>	
											
						</div>
					</div>
				</div>
			)
		})

		return (
			<div>
				<div className='container'>
					<h6>Next four days forecast:</h6>
					<div className='row'>
						{fourDayForecast}
					</div>
				</div>
			</div>
		)
	}
}

export default DayForecastList


