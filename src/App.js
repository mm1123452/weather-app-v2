import React, { Component } from 'react'
import DayForecastList from './components/DayForecastList'

class App extends Component {

  render() {
   const { fourDayForecast } = this.props

   let fourDayArray = Object.values(fourDayForecast)

    return (
      <div className="App">
          <DayForecastList forecast={fourDayArray}/>
      </div>
    )
  }
}

export default App
