import React, { Component } from 'react'
import './WeatherForm.css'

class WeatherForm extends Component {
	constructor(props) {
	    super(props)

	    this.state = {                                     
	      location: '',	      
	    }

	    this.handleChange = this.handleChange.bind(this)
	    this.getLatitudeLongitude = this.getLatitudeLongitude.bind(this)
	}

	componentDidMount() {
	    const { getGeocode } = this.props
		getGeocode('10026')
	}

	handleChange(e) {
		this.setState({location: e.target.value })
	}

	getLatitudeLongitude(e) {
		e.preventDefault()
		const { getGeocode } = this.props
		getGeocode(this.state.location)
		this.setState({location: ''})		
	}

	render() {
		return (
		    <div className='container '>
				<form onSubmit={this.getLatitudeLongitude}>	
					<div className='form-group row'>
						<div className='col-md-1 mr-4'>
							<label htmlFor="InputLocation">Search: </label>
						</div>
						<div className='col-md-7'>	 
							<input type="text" className="form-control form-control-lg mb-2" id="InputLocation" 
								aria-describedby="locationlookup" placeholder="Enter city or zipcode" autoComplete="off"
								value={this.state.location} onChange={this.handleChange}/>
						</div>
						<div className='col-md-3'>
							<button className='button btn-lg text-white' type="submit">Lookup</button>
						</div>
					</div>
					
				</form>
			</div>
		)
	}
}

export default WeatherForm