import { connect } from 'react-redux'   
import CurrentWeather from '../components/CurrentWeather'

const mapStateToProps = (state) => {                  
  return {
    currentForecast: state.forecast.items.currentForecast

  }
}

export default connect(mapStateToProps)(CurrentWeather);