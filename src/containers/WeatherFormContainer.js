import { connect } from 'react-redux'
import WeatherForm from '../components/WeatherForm'
import {fetchGeocode} from '../actions'

export const getGeocode = (dispatch, location) => {
	dispatch(fetchGeocode(location))
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