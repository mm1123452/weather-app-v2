import React, { Component } from 'react'
import DayForecastList from './components/DayForecastList'
import WeatherForm from './components/WeatherForm'

class App extends Component {

  render() {
   const { fourDayForecast } = this.props

   let fourDayArray = Object.keys(fourDayForecast).map((e) => {
      return fourDayForecast[e]
  })

    return (
    	<div className="App">
    		<WeatherForm/>
        <DayForecastList forecast={fourDayArray}/>
      </div>
    )
  }
}

export default App
