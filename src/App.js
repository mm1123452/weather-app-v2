import React, { Component } from 'react'
import DayForecastList from './components/DayForecastList'
import WeatherFormContainer from './containers/WeatherFormContainer'
import CurrentWeatherContainer from './containers/CurrentWeatherContainer'

class App extends Component {

  render() {
   const { fourDayForecast } = this.props

   let fourDayArray = Object.keys(fourDayForecast).map((e) => {
      return fourDayForecast[e]
  })

    return (
    	<div className="App">      
    		<WeatherFormContainer/>
        <CurrentWeatherContainer/>
        <br/>
        <DayForecastList forecast={fourDayArray}/>
      </div>
    )
  }
}

export default App
