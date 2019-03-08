import { connect } from 'react-redux'   
import App from './App'

const mapStateToProps = (state) => {              
  return {
    fourDayForecast: state.items.fourDayForecast
  }
}

export default connect(mapStateToProps)(App);