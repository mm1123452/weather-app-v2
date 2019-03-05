import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class WeatherForm extends Component {
	constructor(props) {
	    super(props)

	    this.state = {                                     
	      location: '',	      
	    }

	    this.handleChange = this.handleChange.bind(this),
	    this.getLatitudeLongitude = this.getLatitudeLongitude.bind(this)
	}

	handleChange(e) {
		//console.log(e.target.value)
		this.setState({location: e.target.value })
	}

	getLatitudeLongitude(e) {
		e.preventDefault()
		console.log('form submitted')
	}

	render() {
		return (
			<Form onSubmit={this.getLatitudeLongitude}>
				<Form.Group as={Row}>		
					<label htmlFor="InputLocation">Search:</label>
					<Col sm="6">
						<input type="text" className="form-control" id="InputLocation" 
							aria-describedby="locationlookup" placeholder="location"
							value={this.state.location} onChange={this.handleChange}/>					
					</Col>
					<Col >
						<Button ClassName='button' type="submit">Lookup</Button>
					</Col>
				</Form.Group>
			</Form>
		)
	}
}

export default WeatherForm