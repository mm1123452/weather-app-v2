import React, { Component } from 'react'
import DayForecastList from '../dayForecast/DayForecastList'
import WeatherFormContainer from '../../../app/containers/weatherForm/WeatherFormContainer'
import CurrentWeatherContainer from '../../../app/containers/currentWeather/CurrentWeatherContainer'
import './App.css'

class App extends Component {

  render() {
   const { fourDayForecast } = this.props
   let fourDayArray = Object.keys(fourDayForecast).map((e) => {
      return fourDayForecast[e]
  })

    return (
    	<div className="App container"> 
        <h1 className='header-text text-center pt-4 pb-5 ml-1 mr-1'>Fantastic Weather App</h1>  
    		<WeatherFormContainer/>    
        <CurrentWeatherContainer/>
        <br/>
        <DayForecastList forecast={fourDayArray}/>
      </div>
    )
  }
}

export default App
