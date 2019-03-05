import { connect } from 'react-redux'   
import App from './App'


const mapStateToProps = (state) => {                    
  return {
    fourDayForecast: state.forecast.items.fourDayForecast

  }
}


export default connect(mapStateToProps)(App);