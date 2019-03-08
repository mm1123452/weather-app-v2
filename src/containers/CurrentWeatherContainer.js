import { connect } from 'react-redux'   
import CurrentWeather from '../components/CurrentWeather'

const mapStateToProps = (state) => {                  
  return {
    location: state.items.location,
    temp: state.items.currentForecast.temp,
    forecast: state.items.currentForecast.forecast,
    icon: state.items.currentForecast.icon
  }
}

export default connect(mapStateToProps)(CurrentWeather);