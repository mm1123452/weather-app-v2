import { connect } from 'react-redux'
import WeatherForm from '../components/WeatherForm'
import {getLatitudeLongitude} from '../actions'

export const getGeocode = (dispatch, location) => {
	console.log('dispatching ' + location)
	dispatch(getLatitudeLongitude(location))
}


const mapStateToProps = state => {
	return {

	}
}

const mapDispatchToProps = dispatch => {
	return {
       getGeocode: (location) => getGeocode(dispatch,location)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForm)