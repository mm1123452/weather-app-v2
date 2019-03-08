import React, { Component } from 'react'
import DayForecastList from './components/DayForecastList'
import WeatherFormContainer from './containers/WeatherFormContainer'
import CurrentWeatherContainer from './containers/CurrentWeatherContainer'
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
